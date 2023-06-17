import { createLink } from "@/service/link.service"
import { useSpinnerStore } from "@/store/store"
import { stableQueryClient } from "@/utils/stable-query-client"
import { useMutation } from "@tanstack/react-query"


const useAddLink = () => {
  const { setIsLoading } = useSpinnerStore((state) => ({
    setIsLoading: state.setIsLoading,
  }))

  return useMutation({
    mutationFn: createLink,
    onSettled: () => {
      setIsLoading(false)
      stableQueryClient.invalidateQueries(['links']);
    },
  })
}


export default useAddLink 
