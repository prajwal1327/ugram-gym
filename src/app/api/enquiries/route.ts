import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, phone, email, message, interestedIn } = body;

    if (!fullName || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // TODO: Save to Supabase
    // const supabase = createClient();
    // await supabase.from('enquiries').insert({
    //   fullName, phone, email, message, interestedIn,
    //   source: 'website', status: 'new', createdAt: new Date()
    // });

    // TODO: Send WhatsApp notification to admin
    // await sendWhatsAppToAdmin({ fullName, phone, interestedIn });

    return NextResponse.json({
      success: true,
      message: 'Enquiry received! We will contact you shortly.',
    });
  } catch (error) {
    console.error('Enquiry API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // TODO: Authenticate and return enquiries list from Supabase
  return NextResponse.json({ success: true, data: [], total: 0 });
}
