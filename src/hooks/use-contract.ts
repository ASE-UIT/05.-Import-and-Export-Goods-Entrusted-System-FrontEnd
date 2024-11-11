import contractAction from "@/apis/contract.api";
import { useQuery } from "@tanstack/react-query";

const useContract = {
  useGetQuoteRequest() {
    return useQuery({
      queryKey: ["contracts"],
      queryFn: async () => {
        try {
          const result = await contractAction.getContracts();
          return result;
        } catch (error) {
          console.error("Error during get contracts:", error);
          throw error;
        }
      },
      retry: 0,
    });
  },
};

export default useContract;
