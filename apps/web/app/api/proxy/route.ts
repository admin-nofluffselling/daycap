// app/api/proxy/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  console.log('API route hit:', req.method, req.url);

  try {
    const body = await req.json();
    const response = await fetch('https://dev.collaborative-dynamics.com/api/private/v0/workflow/execute', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer sk-78aebe5a5b62463e9d8a56dd6da0d1b3c75a7ccc8e254ca4ab6d3e6eb45f7ae2',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ message: 'An error occurred', error: String(error) }, { status: 500 });
  }
}