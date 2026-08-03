import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    // TODO: Authenticate
    // const session = await auth();
    // if (!session || session.user?.role !== 'admin') {
    //   return NextResponse.json({ success: false, error: 'Unauthorised' }, { status: 401 });
    // }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);
    const status = searchParams.get('status') || 'all';
    const month = searchParams.get('month') || '';
    const memberId = searchParams.get('memberId') || '';

    // TODO: Fetch from Supabase
    // const supabase = createClient();
    // let query = supabase.from('payments').select('*', { count: 'exact' });
    // if (status !== 'all') query = query.eq('status', status);
    // if (memberId) query = query.eq('memberId', memberId);
    // if (month) {
    //   const start = new Date(month + '-01');
    //   const end = new Date(start.getFullYear(), start.getMonth() + 1, 0);
    //   query = query.gte('paymentDate', start.toISOString()).lte('paymentDate', end.toISOString());
    // }
    // query = query.order('paymentDate', { ascending: false }).range((page - 1) * limit, page * limit - 1);
    // const { data, count, error } = await query;

    return NextResponse.json({
      success: true,
      data: [],
      total: 0,
      page,
      limit,
      totalPages: 0,
      monthlyTotal: 0,
    });
  } catch (error) {
    console.error('Payments GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch payments' },
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

    // TODO: Validate
    const { memberId, amount, paymentMethod } = body;
    if (!memberId || !amount || !paymentMethod) {
      return NextResponse.json(
        { success: false, error: 'memberId, amount, and paymentMethod are required' },
        { status: 400 }
      );
    }

    // TODO: Generate receipt number (UF-RCP-XXX)
    // TODO: Save to Supabase
    // const supabase = createClient();
    // const { data, error } = await supabase.from('payments').insert({
    //   ...body,
    //   receiptNumber: generateReceiptNumber(),
    //   createdAt: new Date(),
    // }).select().single();

    // TODO: Update member expiry date if full payment
    // TODO: Send payment confirmation WhatsApp

    return NextResponse.json(
      {
        success: true,
        message: 'Payment recorded successfully',
        receiptNumber: `UF-RCP-${Date.now()}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Payments POST error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to record payment' },
      { status: 500 }
    );
  }
}
