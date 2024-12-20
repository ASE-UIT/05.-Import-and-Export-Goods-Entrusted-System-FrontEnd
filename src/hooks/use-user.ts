import userAction from "@/apis/user.api";
import {
  CreateUsersBodyType,
  UpdatePasswordBodyType,
} from "@/schema/user.schema";
import { ErrorType } from "@/types/error.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useUser = {
  useCreateUser() {
    return useMutation({
      mutationFn: (createUserDetails: CreateUsersBodyType) =>
        userAction.create(createUserDetails),
      onError: (error: ErrorType) => {
        console.error("Error during user creation:", error);
        throw error;
      },
    });
  },
  useUpdatePassword() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: ({
        id,
        updatePasswordDetails,
      }: {
        id: string;
        updatePasswordDetails: UpdatePasswordBodyType;
      }) => userAction.updatePassword(id, updatePasswordDetails),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["user-session"],
        });
      },
      onError: (error: ErrorType) => {
        console.error("Error during password update:", error);
        throw error;
      },
    });
  },
};

export default useUser;
