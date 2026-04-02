import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getWork,
  getWorks,
  createWork as createWorkApi,
  editWork as editWorkApi,
  deleteWork as deleteWorkApi,
  getPaginatedWorks,
  getWebsiteWork,
} from "./getWorks";
import { useParams, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

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

export function useGetPaginatedWorks() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const {
    data: paginatedWorks,
    isPending: isFetching,
    error,
  } = useQuery({
    queryKey: ["Paginated Works"],
    queryFn: () => getPaginatedWorks(page),
  });

  return { paginatedWorks, isFetching, error };
}

export function useGetWork() {
  const { slug } = useParams();
  const {
    data: work,
    isPending,
    error,
  } = useQuery({
    queryKey: [`Work, ${slug}`],
    queryFn: () => getWork(slug),
  });

  return { work, isPending, error };
}

export function useGetWebsiteWork() {
  const { slug } = useParams();
  const {
    data: work,
    isPending,
    error,
  } = useQuery({
    queryKey: [`Work, ${slug}`],
    queryFn: () => getWebsiteWork(slug),
  });

  return { work, isPending, error };
}

export function useCreateWork() {
  const queryClient = useQueryClient();
  const { isPending, mutate: createWork } = useMutation({
    mutationFn: createWorkApi,
    onSuccess: () => {
      toast.success("Work successfully created");
      queryClient.invalidateQueries({
        queryKey: ["Works"],
      });
    },

    onError: () => {
      toast.error(
        "Problem uploading Work, try again. Make sure each images are less than 10mb, the total can be more than but individually, it should be less than 10mb"
      );
    },
  });

  return { createWork, isPending };
}
export function useEditWork() {
  const { slug } = useParams();
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editWork } = useMutation({
    mutationFn: (data) => editWorkApi(slug, data),
    onSuccess: () => {
      toast.success("Work successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["Works"],
      });

      queryClient.invalidateQueries({
        queryKey: [`Work, ${slug}`],
      });
    },

    onError: () => {
      toast.error("Problem editing Work, try again");
    },
  });

  return { isEditing, editWork };
}
export function useDeleteWork() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteWork } = useMutation({
    mutationFn: deleteWorkApi,
    onSuccess: () => {
      toast.success("Work successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["Works"],
      });
    },

    onError: () => {
      toast.error("Problem deleting Work, try again");
    },
  });

  return { isDeleting, deleteWork };
}
