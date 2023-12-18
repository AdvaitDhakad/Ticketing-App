import Ticket from "../../models/ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("hit the route");
  try {
    const body = await req.json();
    const ticketdata = body.formData;
    await Ticket.create(ticketdata);
    return NextResponse.json(
      { message: "Ticket created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
