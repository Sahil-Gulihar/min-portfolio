import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the request body
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const response = await prisma.response.create({
      data: { name, email, description: message },
    });

    return NextResponse.json(
      { message: 'Response saved successfully!', data: response },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save data.' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
