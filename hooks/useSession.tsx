import { getSession } from "@/service/auth.service";
import { AuthError, Session } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

type UseUserType = {
  isLoading: boolean,
  data: {
    session: Session | null
    error: AuthError | null
  } | undefined
  userId: string | undefined
}

const useSession = (): UseUserType => {
  const { data, isLoading } = useQuery(['session'], () => getSession())

  const userId = data?.session?.user.id

  return {
    isLoading,
    data,
    userId
  };
};

export default useSession;
