import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/ssr/server";
import { revalidatePath } from "next/cache";

export const GET = async (req: NextRequest) => {
  const supabase = createClient();

  const { error } = await supabase.from("todo").insert({
    title: "todo6",
    description: "description6",
  });

  revalidatePath("/", "page");

  return NextResponse.json({ data: "success", error }, { status: 200 });
};
