"use server";

import { signIn, signOut } from "./auth";

export async function signInAction() {
  await signIn("google", { redirectTo: "/user/settings" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
