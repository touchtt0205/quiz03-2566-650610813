import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Sippakon Khammisawang",
    studentId: "650610813",
  });
};
