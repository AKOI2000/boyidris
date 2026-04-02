import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteClient as deleteClientApi } from "./getClients";
import toast from "react-hot-toast";
import { deleteExperiences as deleteExperiencesApi } from "./getExperience";

export function useDeleteClient() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteClient } = useMutation({
    mutationFn: deleteClientApi,
    onSuccess: () => {
      toast.success("Client successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["Clients"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteClient };
}

export function useDeleteExperience() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteExperience } = useMutation({
    mutationFn: deleteExperiencesApi,
    onSuccess: () => {
      toast.success("Experience successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["Experiences"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteExperience };
}
