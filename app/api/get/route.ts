import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/ssr/server";

export const GET = async (req: NextRequest) => {
  const supabase = createClient();

  const { data, error } = await supabase.from("todo").select();

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
};
