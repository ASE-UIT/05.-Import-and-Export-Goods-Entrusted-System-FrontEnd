import legalRepAction from '@/apis/legalRep.api';
import { useMutation, useQuery } from '@tanstack/react-query';

const useLegalRep = () => {
  const useListLegalRep = (
    params: LegalRepQueryParams | null | undefined = null
  ) =>
    useQuery({
      queryKey: ['legalReps', ...Object.values(params ?? {})],
      queryFn: () => legalRepAction.list(params),
    });

  const useCreateLegalRep = () =>
    useMutation({
      mutationFn: legalRepAction.create,
    });

  const useUpdateLegalRep = () =>
    useMutation({
      mutationFn: ({ id, body }: { id: string; body: UpdateLegalRepBody }) =>
        legalRepAction.update(id, body),
    });

  return {
    useListLegalRep,
    useCreateLegalRep,
    useUpdateLegalRep,
  };
};

export default useLegalRep;
