import { AuthService } from "@/service/auth.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { toast } from "react-toastify"



const useLogin = (email: string, password: string) => {

  const router = useRouter()

  const { data, error, isLoading, mutate } = useMutation(['session'],
    {
      mutationFn: (data: { email: string; password: string }) => AuthService.signInPassword(password, email),
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
    data, error, isLoading, mutate
  }
}


export default useLogin
