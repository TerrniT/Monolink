import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import '@/styles/globals.css'
import "../styles/globals.css"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import { Session } from 'inspector';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FC } from 'react'
import { AnimatePresence } from 'framer-motion';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  const [session, setSession] = useState<Session | null>(null);

  const queryClient = new QueryClient()
  const contextClass = {
    success: "bg-green-300/20 ring ring-green-700 text-green-400",
    error: "bg-red-600/20 text-red-600 ring ring-red-700",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider supabaseClient={supabaseClient}>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} session={session} />
        </AnimatePresence>
        <ToastContainer
          toastClassName={(type) => contextClass[type?.type || "default"] +
            " relative flex  p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
          }
          bodyClassName={() => "text-sm flex  font-md block p-3"}
        />
      </SessionContextProvider>
    </QueryClientProvider>
  )
}

export default App
