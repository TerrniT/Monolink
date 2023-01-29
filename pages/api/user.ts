import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

async function getUser() {
  const user = await supabase.auth.getUser();
  if (user) {
    try {
      return user;
    } catch (error) {
      console.log("error on load user", error);
    }
  }
}

const userApi = { getUser };

export default userApi;
