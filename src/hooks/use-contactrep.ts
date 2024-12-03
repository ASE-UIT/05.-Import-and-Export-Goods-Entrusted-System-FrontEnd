
import contactRepAction from "@/apis/contactrep.api";
import { ContactRepBodyType } from "@/schema/contactrep.schema";
// import { ContactRepBodyType } from "@/schema/contactrep.schema";
import { ErrorType } from "@/types/error.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useContactRep = {
    useGetContactRep() {
        return useQuery({
            queryKey: ["contact-rep"],
            queryFn: async () => {
                try {
                    const result = await contactRepAction.getContactRep();
                    return result.data;
                } catch (error) {
                    throw error;
                }
            },
            retry: 0,
        });
    },

    useCreateContactRep() {
        const queryClient = useQueryClient();
        return useMutation({
            mutationFn: (contactRepDetails: ContactRepBodyType) =>
                contactRepAction.createContactRep(contactRepDetails),
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["contact-rep"],
                });
            },
            onError: (error: ErrorType) => {
                throw error;
            },
        });
    },

    useUpdateContactRep() {
        const queryClient = useQueryClient();
        return useMutation({
            mutationFn: (contactRepDetails: ContactRep) =>
                contactRepAction.updateContractRep(contactRepDetails),
            onSuccess: (data) => {
                queryClient.invalidateQueries({
                    queryKey: ["contact-rep", data.id],
                });
            },
            onError: (error: ErrorType) => {
                throw error;
            },
        });
    },
};
export default useContactRep;