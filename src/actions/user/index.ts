"use server";

import { currentUser } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import { createUser, findUser, updateSubscription } from "./queries";
import { refreshToken } from '@/lib/fetch'
import { updateIntegration } from "../integrations/queries";
import { stripe } from '@/lib/stripe'

export const onCurrentUser = async () => {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");

  return user;
};

export const onBoardUser = async () => {

}
