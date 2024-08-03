import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function GET(request: NextRequest) {
  try {
    const allBanners = await prisma.banner.findMany();
    return NextResponse.json(allBanners);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch banner data" },
      { status: 500 }
    );
  }
}
