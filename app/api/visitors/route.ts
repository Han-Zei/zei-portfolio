import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

export const revalidate = 0; // Disable caching for this route

export async function GET() {
  try {
    // We only try to connect if the environment variables exist
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      return NextResponse.json({ count: '---' }); // Return dummy data if DB isn't connected yet
    }

    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });

    // Increment total visitors count
    const count = await redis.incr('portfolio_total_visitors');
    
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Redis error:', error);
    return NextResponse.json({ count: 'ERR' }, { status: 500 });
  }
}
