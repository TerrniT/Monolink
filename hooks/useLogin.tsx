import { signInPassword } from "@/service/auth.service"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { toast } from "react-toastify"



const useLogin = (email: string, password: string) => {

  const router = useRouter()

  const { error, isLoading, mutate, isSuccess } = useMutation(['session'],
    {
      mutationFn: (data: { email: string; password: string }) => signInPassword(password, email),
      onSuccess: () => {
        router.push('/')
      },
      onError: () => {
        toast.error("Error", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  )

  return {
    error, isLoading, mutate, isSuccess
  }
}


export default useLogin
