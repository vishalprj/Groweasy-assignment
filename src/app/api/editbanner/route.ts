import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const updateUser = await prisma.banner.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        description: body.description,
        cta: body.cta,
        image: body.image,
      },
    });

    return NextResponse.json(updateUser);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to edit AdBanner" },
      { status: 500 }
    );
  }
}
