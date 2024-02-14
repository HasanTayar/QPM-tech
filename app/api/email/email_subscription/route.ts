import { NextResponse } from "next/server";
import prisma from "@/lib/db";
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const insertData = await prisma.emailSubscription.create({
      data: {
        email: data.email,
        langSubmit: data.lang,
      },
    });

    return NextResponse.json({
      data: insertData,
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
export async function DELETE(req: Request) {
  try {
    const data = await req.json();
    const deleteData = await prisma.emailSubscription.delete({
      where: {
        email: data.email,
      },
    });

    return NextResponse.json({
      data: deleteData,
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
