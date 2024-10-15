import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET POST WITH MOST VIEWS
export const GET = async () => {
  try {
    const mostViewedPost = await prisma.post.findFirst({
      orderBy: { views: "desc" },
      include: { user: true },
    });

    if (!mostViewedPost) {
      return new NextResponse(JSON.stringify({ message: "No posts found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(mostViewedPost), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
