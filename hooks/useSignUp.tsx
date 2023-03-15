import { AuthService } from "@/service/auth.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"



const useSignUp = () => {

  const queryClient = useQueryClient()


  const { data: error, isLoading, mutate } = useMutation(['session'],
    {
      mutationFn: (email: string) => AuthService.signUpWithMagicLink(email),
      onSuccess: () => {
        toast.success("Check your email", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
    error, isLoading, mutate
  }
}


export default useSignUp
