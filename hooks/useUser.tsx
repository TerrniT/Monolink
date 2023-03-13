import { supabase } from "@/utils/supabaseClient";
import { User, UserResponse } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

type UserProps = {
  user: User | undefined,
  isLoading: boolean,
  session: any
}

const useUser = (): UserProps => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [session, setSession] = useState<any>(null)

  async function getUser() {
    setLoading(true)
    try {
      const { data: { session }, error } = await supabase.auth.getSession()
      if (session) {
        console.log("re-render", session)
        setUser(session.user)
        setSession(session)
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getUser()
  }, []);

  return {
    user,
    isLoading,
    session
  };
};

export default useUser;
