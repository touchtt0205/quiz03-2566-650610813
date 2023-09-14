import { DB, readDB, writeDB } from "@/app/libs/DB";
import { checkToken } from "@/app/libs/checkToken";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export const GET = async () => {
  readDB();
  
  return NextResponse.json({
    ok: true,
    rooms:DB.rooms,
    totalRooms:DB.rooms.length,

  });
};

export const POST = async (request) => {
  const payload = checkToken();
  const body = await request.json();
  const RoomId = checkToken(body);
  
  if(!payload)
  return NextResponse.json(
    {
      ok: false,
      message: "Invalid token",
    },
    { status: 401 }
  );

  readDB();
  const foundRoomId = DB.rooms.find((x) => x.roomID === roomId);
  if(!foundRoomId)
  return NextResponse.json(
    {
      ok: false,
      message: `Room ${DB.roomName} already exists`,
    },
    { status: 400 }
  );

   const roomId = nanoid();

  // //call writeDB after modifying Database
   writeDB();

  return NextResponse.json({
    ok: true,
    roomId,
    message: `Room ${"replace this with room name"} has been created`,
  });
};
