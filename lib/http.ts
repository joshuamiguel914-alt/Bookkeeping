import { NextResponse } from "next/server";

export function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function readJson(request: Request): Promise<{ data?: unknown; response?: NextResponse }> {
  try {
    return { data: await request.json() };
  } catch (error) {
    if (error instanceof SyntaxError) return { response: errorResponse("Request body must be valid JSON.", 400) };
    throw error;
  }
}
