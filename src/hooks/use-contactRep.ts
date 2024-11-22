import contactRepAction from "@/apis/contactRep.api";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";

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
      mutationFn: (data: any) => contactRepAction.createContactRep(data),
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["contactReps"],
        });
      },
    });
  };

  const useUpdateContactRep = () => {
    return useMutation({
      mutationFn: ({ id, data }: { id: string; data: any }) =>
        contactRepAction.updateContactRep(id, data),
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["contactReps"],
        });
      },
    });
  };

  return {
    queryClient,
    useGetAllContactRep,
    useCreateContactRep,
    useUpdateContactRep,
  };
};
