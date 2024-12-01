import customerAction from '@/apis/customer.api';
import { useMutation, useQuery } from '@tanstack/react-query';

const useCustomer = () => {
  const useListCustomer = (
    params: CustomerQueryParams | null | undefined = null
  ) =>
    useQuery({
      queryKey: ['customers', ...Object.values(params ?? {})],
      queryFn: () => customerAction.list(params),
    });

  const useCreateCustomer = () =>
    useMutation({
      mutationFn: customerAction.create,
    });

  const useUpdateCustomer = () =>
    useMutation({
      mutationFn: ({ id, body }: { id: string; body: UpdateCustomerBody }) =>
        customerAction.update(id, body),
    });

  return {
    useListCustomer,
    useCreateCustomer,
    useUpdateCustomer,
  };
};

export default useCustomer;
