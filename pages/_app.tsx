import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider } from "@tanstack/react-query"
import { FC } from 'react'
import { AnimatePresence } from 'framer-motion';
import { contextClass } from '@/utils/toast.styles';
import { stableQueryClient } from '@/utils/stable-query-client';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={stableQueryClient}>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
      <ToastContainer
        toastClassName={(type) => contextClass[type?.type || "default"] +
          " relative flex  p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer border-1 border-zinc-400"
        }
        bodyClassName={() => "text-sm flex font-md block p-3"}
      />
    </QueryClientProvider>
  )
}

export default App
