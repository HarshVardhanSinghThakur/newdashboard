// app/api/btc/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Fetch data for the last 1 hour (0.0417 days)
  const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=0.0417';

  try {
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch Bitcoin data' }, { status: 500 });
  }
}