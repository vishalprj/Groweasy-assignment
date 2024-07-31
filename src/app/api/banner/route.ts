import { NextRequest, NextResponse } from "next/server";
import { bannerData } from "../data/bannerData";


export async function GET(request : NextRequest){
    try {
        return NextResponse.json(bannerData)
    } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch banner data' }, { status: 500 });
    }
}
