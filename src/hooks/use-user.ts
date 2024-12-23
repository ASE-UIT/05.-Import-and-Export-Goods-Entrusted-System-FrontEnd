import userAction from "@/apis/user.api";
import {
  CreateClientAccountBodyType,
  CreateEmployeeAccountBodyType,
  UpdatePasswordBodyType,
} from "@/schema/user.schema";
import { ErrorType } from "@/types/error.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useUser = {
  useGetListUser() {
    return useQuery({
      queryKey: ["users"],
      queryFn: userAction.list,
    });
  },

  useCreateEmployeeAccount() {
    return useMutation({
      mutationFn: (createUserDetails: CreateEmployeeAccountBodyType) =>
        userAction.createEmployee(createUserDetails),
      onError: (error: ErrorType) => {
        console.error("Error during user creation:", error);
        throw error;
      },
    });
  },

  useCreateClientAccount() {
    return useMutation({
      mutationFn: (createUserDetails: CreateClientAccountBodyType) =>
        userAction.createClient(createUserDetails),
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
