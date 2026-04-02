import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addClients as addClientsApi } from "./getClients";
import toast from "react-hot-toast";
import { addExperiences as addExperiencesApi } from "./getExperience";

export function useAddClient() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: addClients } = useMutation({
    mutationFn: addClientsApi,
    onSuccess: () => {
      toast.success("Client successfully created");
      queryClient.invalidateQueries({
        queryKey: ["Clients"],
      });
    },
  });

  return { isCreating, addClients };
}

export function useAddExperience() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: addExperience } = useMutation({
    mutationFn: addExperiencesApi,
    onSuccess: () => {
      toast.success("Experience successfully created");
      queryClient.invalidateQueries({
        queryKey: ["Experiences"],
      });
    },
  });

  return {
    isCreating,
    addExperience,
  };
}
