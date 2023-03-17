import { createLink } from "@/service/link.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"


interface Props {
  userId: string
  title: string
  desc: string
  url: string
  tags: {
    color: string
    tag_name: string
  }
}

const useAddLink = () => {

  const queryClient = useQueryClient()

  const { mutate, data, error } = useMutation({
    mutationFn: createLink,
    onSettled: () => {
      queryClient.invalidateQueries(['links']);
    },
  })

  return {
    mutate
  }
}


export default useAddLink 
