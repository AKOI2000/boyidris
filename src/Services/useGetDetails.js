import { useQuery } from "@tanstack/react-query";
import { getClient, getClients, getWebsiteClients } from "./getClients";
import {
  getExperience,
  getExperiences,
  getWebsiteExperiences,
} from "./getExperience";
import { useParams } from "react-router-dom";

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

export function useGetWebsiteClients() {
  const {
    data: clients,
    isPending,
    error,
  } = useQuery({
    queryKey: ["Clients"],
    queryFn: getWebsiteClients,
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

export function useGetWebsiteExperiences() {
  const {
    data: experiences,
    isPending,
    error,
  } = useQuery({
    queryKey: ["Experiences"],
    queryFn: getWebsiteExperiences,
  });

  return { experiences, isPending, error };
}

export function useGetClient() {
  const { id } = useParams();
  const {
    data: client,
    isPending,
    error,
  } = useQuery({
    queryKey: ["Client", id],
    queryFn: () => getClient(id),
  });

  return { client, isPending, error };
}

export function useGetExperience() {
  const { id } = useParams();
  const {
    data: experience,
    isPending,
    error,
  } = useQuery({
    queryKey: ["Experience", id],
    queryFn: () => getExperience(id),
  });

  return { experience, isPending, error };
}
