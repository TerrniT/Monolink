import { useSession } from "@/hooks";
import Login from "@/pages/login";
import { TypeComponentAuthFields } from "@/types/page.interface";

import { Session } from "@supabase/supabase-js";
import { createContext, FC, Dispatch, SetStateAction, PropsWithChildren } from "react";

export type TypeUser = null | { name: string }

export type TypeContext = {
  session: Session | null | undefined
}

export const AuthContext = createContext<TypeContext>({
  session: null,
})

export const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({ children, Component: { isOnlyUser } }) => {

  const { session, isLoading } = useSession()

  if (isOnlyUser && !session?.user) return <Login />

  return (
    <AuthContext.Provider value={{ session }}>
      {children}
    </AuthContext.Provider>
  )
}
