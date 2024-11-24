import contactRepAction from "@/apis/contactRep.api";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import {
  contactRepSchema,
  createContactRepData,
  updateContactRepData,
} from "@/schema/contactRep.schema";
import z from "zod";

export const useContactRep = () => {
  const queryClient = useQueryClient();

  const useGetAllContactRep = () => {
    return useQuery({
      queryKey: ["contactReps"],
      queryFn: () => {
        return contactRepAction.getContactRep();
      },
    });
  };

  const useCreateContactRep = () => {
    return useMutation({
      mutationFn: (data: createContactRepData) =>
        contactRepAction.createContactRep(data),
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["contactReps"],
        });
      },
    });
  };

  const useUpdateContactRep = () => {
    return useMutation({
      mutationFn: ({ id, data }: { id: string; data: updateContactRepData }) =>
        contactRepAction.updateContactRep(id, data),
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["contactReps"],
        });
      },
    });
  };

  const useGetContactRepById = (id: string) => {
    return useQuery({
      queryKey: ["contactRep", id],
      queryFn: () => {
        return contactRepAction.getContactRep(id);
      },
    });
  };

  return {
    queryClient,
    useGetAllContactRep,
    useCreateContactRep,
    useUpdateContactRep,
    useGetContactRepById,
  };
};
