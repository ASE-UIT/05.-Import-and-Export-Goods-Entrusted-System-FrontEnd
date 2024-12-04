import { useQuery } from "@tanstack/react-query";
import contractAction from "@/apis/contract.api"; // Assuming contractAction is the API service

// Custom hook to fetch contract details based on contractId
export const useGetContractDetails = (contractId: string) => {
  return useQuery({
    queryKey: ["contract"],
    queryFn: () => {
      return contractAction.getContract()
    },
  });
};
