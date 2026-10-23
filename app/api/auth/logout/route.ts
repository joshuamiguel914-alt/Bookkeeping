import { clearSession } from "@/lib/auth/session";

export async function POST() {
  await clearSession();
  return Response.json({ message: "Signed out." });
}
