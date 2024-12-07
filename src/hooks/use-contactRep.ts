// import contactRepAction from "@/apis/contactRep.api";
// import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
// import {
//   createContactRepData,
//   updateContactRepData,
// } from "@/schema/contactRep.schema";

// export const useContactRep = () => {
//   const queryClient = useQueryClient();

//   const useGetAllContactRep = () => {
//     return useQuery({
//       queryKey: ["contactReps"],
//       queryFn: () => {
//         return contactRepAction.getContactRep();
//       },
//     });
//   };

//   const useCreateContactRep = () => {
//     return useMutation({
//       mutationFn: (data: createContactRepData) =>
//         contactRepAction.createContactRep(data),
//       onSettled: () => {
//         queryClient.invalidateQueries({
//           queryKey: ["contactReps"],
//         });
//       },
//     });
//   };

//   const useUpdateContactRep = () => {
//     return useMutation({
//       mutationFn: ({ id, data }: { id: string; data: updateContactRepData }) =>
//         contactRepAction.updateContactRep(id, data),
//       onSettled: () => {
//         queryClient.invalidateQueries({
//           queryKey: ["contactReps"],
//         });
//       },
//     });
//   };

//   const useGetContactRepById = (id: string) => {
//     return useQuery({
//       queryKey: ["contactRep", id],
//       queryFn: () => {
//         return contactRepAction.getContactRep(id);
//       },
//     });
//   };

//   return {
//     queryClient,
//     useGetAllContactRep,
//     useCreateContactRep,
//     useUpdateContactRep,
//     useGetContactRepById,
//   };
// };

import contactRepAction from "@/apis/contactRep.api";
import { ContactRepBodyType } from "@/schema/contactRep.schema";
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
