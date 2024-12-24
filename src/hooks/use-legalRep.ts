import legalRepAction from "@/apis/legalRep.api";
import { useMutation, useQuery } from "@tanstack/react-query";

const useLegalRep = () => {
  const useListLegalRep = (
    params: LegalRepQueryParams | null | undefined = null
  ) =>
    useQuery({
      queryKey: ["legalReps", ...Object.values(params ?? {})],
      queryFn: () => legalRepAction.list(params),
    });

  const useDetailLegalRep = (id: string) =>
    useQuery({
      queryKey: ["legalReps", id],
      queryFn: () => legalRepAction.detail(id),
    });

  const useCreateLegalRep = () =>
    useMutation({
      mutationFn: async (body: CreateLegalRepBody) =>
        await legalRepAction.create(body),
    });

  const useUpdateLegalRep = () =>
    useMutation({
      mutationFn: async ({
        id,
        body,
      }: {
        id: string;
        body: UpdateLegalRepBody;
      }) => await legalRepAction.update(id, body),
    });
  return {
    useListLegalRep,
    useDetailLegalRep,
    useCreateLegalRep,
    useUpdateLegalRep,
  };
};

export default useLegalRep;
