import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://blog.runes.agency/ghost/api/content/posts/?key=e6d6d1558b13a2d6b0a6b8edda", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await res.json();

    return NextResponse.json(data);
}