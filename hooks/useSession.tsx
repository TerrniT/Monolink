import { AuthService } from "@/service/auth.service";
import { AuthError, Session } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

type UseUserType = {
  isLoading: boolean,
  data: {
    session: Session | null
    error: AuthError | null
  } | undefined
}

const useSession = (): UseUserType => {

  const { data, isLoading } = useQuery(['session'], () => AuthService.getSession())

  return {
    isLoading,
    data
  };
};

export default useSession;
