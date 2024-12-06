import customerAction from '@/apis/customer.api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const useCustomer = () => {
  const queryClient = useQueryClient();

  const useListCustomer = (
    params: CustomerQueryParams | null | undefined = null
  ) =>
    useQuery({
      queryKey: ['customers', ...Object.values(params ?? {})],
      queryFn: () => customerAction.list(params),
    });

  const useDetailsCustomer = (id: string) =>
    useQuery({
      queryKey: ['customer', id],
      queryFn: () => customerAction.details(id),
    });

  const useCreateCustomer = () =>
    useMutation({
      mutationFn: customerAction.create,
    });

  const useUpdateCustomer = () =>
    useMutation({
      mutationFn: ({ id, body }: { id: string; body: UpdateCustomerBody }) =>
        customerAction.update(id, body),
      onSuccess: (_, req) => {
        queryClient.invalidateQueries({
          queryKey: ['customer', req.id],
        });
      },
    });

  return {
    useListCustomer,
    useDetailsCustomer,
    useCreateCustomer,
    useUpdateCustomer,
  };
};

export default useCustomer;
