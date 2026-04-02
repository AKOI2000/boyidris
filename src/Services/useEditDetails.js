import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editClient as editClientAPI } from "./getClients";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { editExperiences as editExperiencesApi } from "./getExperience";

export function useEditClient() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { mutate: editClient, isPending } = useMutation({
    mutationFn: (client) => editClientAPI(id, client),
    onSuccess: () => {
      toast.success("Client successfully Edited");

      queryClient.invalidateQueries({
        queryKey: ["Client", id],
      });

      queryClient.invalidateQueries({
        queryKey: ["Clients"],
      });
    },

    onError: () => toast.error("Problem Editing the client"),
  });

  return { editClient, isPending };
}

export function useEditExperience() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { mutate: editExperience, isPending: isEditing } = useMutation({
    mutationFn: (experience) => editExperiencesApi(id, experience),

    onSuccess: () => {
      toast.success("Experience successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["Experience", id],
      });

      queryClient.invalidateQueries({
        queryKey: ["Experiences"],
      });
    },
  });

  return { editExperience, isEditing };
}
