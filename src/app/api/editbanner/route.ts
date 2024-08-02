import { NextRequest, NextResponse } from "next/server";
import { bannerData } from "../data/bannerData";


export async function PATCH(req: NextRequest) {
  try {
    const { id, title, description } = await req.json();

    const banner = bannerData.find(b => b.id === id);
    if (!banner) {
      return NextResponse.json({ error: "Banner not found" }, { status: 404 });
    }

    banner.title = title ?? banner.title;
    banner.description = description ?? banner.description;

    return NextResponse.json(banner);
  } catch (error) {
    return NextResponse.json({ error: "Failed to edit AdBanner" }, { status: 500 });
  }
}
