"use server";
import { redirect } from "next/navigation";
import { auth } from "./auth";

export const loginGoogleAction = async () => {
  // "use server";

  const response = await auth.api.signInSocial({
    body: {
      provider: "google",
    },
  });

  redirect(response.url!);
};
