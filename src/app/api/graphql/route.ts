import { NextRequest, NextResponse } from 'next/server';

const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://www.msocorockers.co.za/graphql';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();

    const response = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    const data = await response.text();

    return new NextResponse(data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('[GraphQL Proxy] Error:', error);
    return NextResponse.json(
      { errors: [{ message: 'Failed to fetch from WordPress GraphQL' }] },
      { status: 502 }
    );
  }
}
