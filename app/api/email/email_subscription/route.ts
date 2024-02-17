import { NextResponse } from "next/server";
import prisma from "@/lib/db";
export async function POST(req: Request) {
  try {
    const data = await req.json(); // Destructure data object
    console.log(data);

    if (!data.email) {
      throw new Error("Email field is missing in the request data.");
    }

    const insertData = await prisma.emailSubscription.create({
      data: {
        email: data.email,
        langSubmit: data.lang,
      },
    });

    return NextResponse.json(
      {
        message: "Successfully subscribed",
        data: insertData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const data = await prisma.emailSubscription.findMany();
    const unSentWelcomeEmailData = await prisma.emailSubscription.findMany({
      where: { welcomeEmailSended: false },
    });
    return NextResponse.json({
      data: data,
      unsentwelcomeemail: unSentWelcomeEmailData,
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
