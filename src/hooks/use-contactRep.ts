import contactRepAction from "@/apis/contactRep.api";
import { ContactRepBodyType } from "@/schema/contactRep.schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useContactRep = () => {
  const queryClient = useQueryClient();

  const useListContactRep = (
    params: ContactRepQueryParams | null | undefined = null
  ) =>
    useQuery({
      queryKey: ["contact-reps", ...Object.values(params ?? {})],
      queryFn: () => contactRepAction.list(params),
    });

  const useDetailsContactRep = (id: string) =>
    useQuery({
      queryKey: ["contact-rep", id],
      queryFn: () => contactRepAction.details(id),
    });

  const useCreateContractRep = () =>
    useMutation({
      mutationFn: contactRepAction.create,
    });

  const useUpdateContactRep = () =>
    useMutation({
      mutationFn: ({
        id,
        body,
      }: {
        id: string;
        body: ContactRepBodyType;
      }) => contactRepAction.update(id, body),
      onSuccess: (_, req) => {
        queryClient.invalidateQueries({
          queryKey: ["contact-rep", req.id],
        });
      },
    });

  return {
    useListContactRep,
    useDetailsContactRep,
    useCreateContractRep,
    useUpdateContactRep,
  };
};
export default useContactRep;
