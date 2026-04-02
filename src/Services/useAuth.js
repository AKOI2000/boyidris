import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { checkAuth, handleLogin } from "./auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useAuthLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => handleLogin({ email, password }),
    onSuccess: () => {
      queryClient.setQueryData(["user"]);
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoggingIn };
}

export function useCheckAuth() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: checkAuth,
  });

  return { user, isPending };
}
