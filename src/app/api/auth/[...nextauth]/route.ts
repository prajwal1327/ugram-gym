import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Simple admin auth — check against env vars
        if (
          credentials?.email === process.env.ADMIN_EMAIL &&
          credentials?.password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: '1',
            name: 'Admin',
            email: credentials.email as string,
            role: 'admin',
          };
        }
        return null;
      },
    }),
  ],
  pages: { signIn: '/admin/login' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as Record<string, unknown>).role;
      return token;
    },
    async session({ session, token }) {
      if (token) (session.user as Record<string, unknown>).role = token.role;
      return session;
    },
  },
  session: { strategy: 'jwt' },
});

export const { GET, POST } = handlers;
