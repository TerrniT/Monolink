import {
  createBrowserSupabaseClient,
  createServerSupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.push("/homepage");
      }
    };
    checkSession();
  }, []);

  supabase.auth.onAuthStateChange((event) => {
    if (event == "SIGNED_IN") {
      router.push("/homepage");
    }
  });

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <Component {...pageProps} />;
    </SessionContextProvider>
  );
}
