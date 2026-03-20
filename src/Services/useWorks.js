import { useQuery } from "@tanstack/react-query";
import { getWork, getWorks } from "./getWorks";
import { useParams } from "react-router-dom";

export function useGetWorks() {
  const {
    data: works,
    isPending,
    error,
  } = useQuery({
    queryKey: ["Works"],
    queryFn: getWorks,
  });

  return { works, isPending, error };
}

export function useGetWork() {
  const { slug } = useParams();
  const {
    data: work,
    isPending,
    error,
  } = useQuery({
    queryKey: [`Work, ${slug}`],
    queryFn: getWork,
  });

  return { work, isPending, error };
}
