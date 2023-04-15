import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import '@/styles/globals.css'
import "../styles/globals.css"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FC } from 'react'
import { AnimatePresence } from 'framer-motion';
import { contextClass } from '@/utils/toast.styles';
import Layout from '@/components/layout/layout';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider supabaseClient={supabaseClient}>
        <Layout>
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
        <ToastContainer
          toastClassName={(type) => contextClass[type?.type || "default"] +
            " relative flex  p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
          }
          bodyClassName={() => "text-sm flex font-md block p-3"}
        />
      </SessionContextProvider>
    </QueryClientProvider>
  )
}

export default App
