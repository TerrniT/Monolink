import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/router";
import React from "react";

const SignOut = () => {
  const router = useRouter();

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <button
      onClick={signOut}
      className="btn border border-slate-400 rounded-xl py-2 px-4 backdrop-blur-lg filter bg-transparent hover:border-zinc-600 hover:text-gray-800 transition-all duration-150 text-sm"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
