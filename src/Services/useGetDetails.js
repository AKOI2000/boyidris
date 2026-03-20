import { useQuery } from "@tanstack/react-query";
import { getClients } from "./getClients";
import { getExperiences } from "./getExperience";

export function useGetClients() {
  const {
    data: clients,
    isPending,
    error,
  } = useQuery({
    queryKey: ["Clients"],
    queryFn: getClients,
  });

  return { clients, isPending, error };
}

export function useGetExperiences() {
  const {
    data: experiences,
    isPending,
    error,
  } = useQuery({
    queryKey: ["Experiences"],
    queryFn: getExperiences,
  });

  return { experiences, isPending, error };
}
