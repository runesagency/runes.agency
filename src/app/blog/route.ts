import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const requester = request.headers.get("X-Requested-By");
    let blogURL = process.env.GHOST_BLOG_URL;

    if (blogURL.endsWith("/")) {
        blogURL = blogURL.slice(0, -1);
    }

    if (requester === request.nextUrl.host) {
        const res = await fetch(process.env.GHOST_BLOG_URL + "/ghost/api/content/posts/?key=" + process.env.GHOST_BLOG_CONTENT_API_KEY, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "cache-control": "public, max-age=" + 60 * 60 * 24 * 1, // 1 day
            },
        });

        const data = await res.json();

        return NextResponse.json(data);
    }

    return NextResponse.redirect(process.env.GHOST_BLOG_URL);
}
