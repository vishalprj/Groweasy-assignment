import { NextRequest, NextResponse } from "next/server";
import { bannerData } from "../data/bannerData";


export async function PATCH(request : NextRequest){
    try {
    } catch (error) {
    return NextResponse.json({ error: 'Failed to updated banner data' }, { status: 500 });
    }
}
