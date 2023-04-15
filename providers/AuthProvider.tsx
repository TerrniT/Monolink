import { useSession } from "@/hooks";
import Login from "@/pages/login";
import { TypeComponentAuthFields } from "@/types/page.interface";

import { Session } from "@supabase/supabase-js";
import { createContext, FC, PropsWithChildren } from "react";

export type TypeUser = null | { name: string }

export type TypeContext = {
  session: Session | null | undefined
}

export const AuthContext = createContext<TypeContext>({
  session: null,
})

export const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({ children, Component: { isOnlyUser } }) => {

  // TODO Re-write auth
  const { data } = useSession()

  if (isOnlyUser && !data?.session?.user) return <Login />
  const session = data?.session

  return (
    <AuthContext.Provider value={{ session }}>
      {children}
    </AuthContext.Provider>
  )
}
