import { useMutation } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useDeleteCategory = () => {
  return ( useMutation({
        mutationFn:(id)=> request.delete(`/category/${id}`).then((res)=> res.data)
  }))
}
