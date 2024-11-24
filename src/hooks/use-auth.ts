import authAction from "@/apis/auth.api";
import { LoginBodyType } from "@/schema/auth.schema";
import { ErrorType } from "@/types/error.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useAuth = {
  useLogin() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (loginDetails: LoginBodyType) =>
        authAction.login(loginDetails),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["user-session"],
        });
      },
      onError: (error: ErrorType) => {
        console.error("Error during login:", error);
        throw error;
      },
    });
  },

  useGetSession() {
    return useQuery({
      queryKey: ["user-session"],
      queryFn: async () => {
        try {
          const result = await authAction.getSession();
          return result.data;
        } catch (error) {
          console.error("Error during session retrieval:", error);
          throw error;
        }
      },
      retry: 0,
    });
  },

  useLogout() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: () => authAction.logout(),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["user-session"],
        });
      },
      onError: (error: ErrorType) => {
        console.error("Error during logout:", error);
        throw error;
      },
    });
  },
};
export default useAuth;
