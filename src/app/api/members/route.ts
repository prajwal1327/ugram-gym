import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    // TODO: Authenticate — verify JWT from cookie
    // const session = await auth();
    // if (!session || session.user?.role !== 'admin') {
    //   return NextResponse.json({ success: false, error: 'Unauthorised' }, { status: 401 });
    // }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);
    const status = searchParams.get('status') || 'all';
    const search = searchParams.get('search') || '';

    // TODO: Fetch from Supabase with filters
    // const supabase = createClient();
    // let query = supabase.from('members').select('*', { count: 'exact' });
    // if (status !== 'all') query = query.eq('status', status);
    // if (search) query = query.ilike('fullName', `%${search}%`);
    // query = query.range((page - 1) * limit, page * limit - 1);
    // const { data, count, error } = await query;

    return NextResponse.json({
      success: true,
      data: [],
      total: 0,
      page,
      limit,
      totalPages: 0,
    });
  } catch (error) {
    console.error('Members GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch members' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // TODO: Authenticate
    // const session = await auth();
    // if (!session || session.user?.role !== 'admin') {
    //   return NextResponse.json({ success: false, error: 'Unauthorised' }, { status: 401 });
    // }

    const body = await request.json();

    // TODO: Validate with Zod
    // const result = memberSchema.safeParse(body);
    // if (!result.success) {
    //   return NextResponse.json({ success: false, error: result.error.flatten() }, { status: 422 });
    // }

    // TODO: Generate member ID (UF-XXX)
    // TODO: Calculate expiry date based on membership type
    // TODO: Save to Supabase
    // const supabase = createClient();
    // const { data, error } = await supabase.from('members').insert(body).select().single();

    // TODO: Send welcome WhatsApp message
    // await sendWhatsAppWelcome(body.phone, body.fullName, body.membershipType);

    const { fullName, phone } = body;
    if (!fullName || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Member added successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Members POST error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add member' },
      { status: 500 }
    );
  }
}
