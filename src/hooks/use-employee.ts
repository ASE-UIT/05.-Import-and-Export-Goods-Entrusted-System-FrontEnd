import employeeAction from "@/apis/employee.api";
import {
  CreateEmployeeBodyType,
  UpdateEmployeeBodyType,
} from "@/schema/employee.schema";
import { ErrorType } from "@/types/error.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useEmployee = {
  useGetListEmployee() {
    return useQuery({
      queryKey: ["employees"],
      queryFn: employeeAction.list,
    });
  },

  useCreateEmployee() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (createEmployeeDetails: CreateEmployeeBodyType) =>
        employeeAction.create(createEmployeeDetails),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["employees"],
        });
      },
      onError: (error: ErrorType) => {
        console.error("Error during employee creation:", error);
        throw error;
      },
    });
  },

  useGetDetailEmployee(id: string) {
    return useQuery({
      queryKey: ["employee", id],
      queryFn: () => employeeAction.detail(id),
    });
  },

  useUpdateEmployee() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: ({
        id,
        updateEmployeeDetails,
      }: {
        id: string;
        updateEmployeeDetails: UpdateEmployeeBodyType;
      }) => employeeAction.update(id, updateEmployeeDetails),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["employees"],
        });
      },
      onError: (error: ErrorType) => {
        console.error("Error during employee update:", error);
        throw error;
      },
    });
  },
};

export default useEmployee;
