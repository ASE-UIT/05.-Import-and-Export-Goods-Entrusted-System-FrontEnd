import importCusDecAction from "@/apis/document/importCusDec.api";
import { useQuery } from "@tanstack/react-query";


const useImportCusDec = {
    useGetImportCusDec: (docNum?: number, shipmentId?: string) => {
        return useQuery({
            queryKey: ["importDocument", docNum, shipmentId],
            queryFn: () => {
                return importCusDecAction.getImportDocument(docNum, shipmentId);
            },
        });
    },

    useGetDetail(id: string) {
        return useQuery({
            queryKey: ["importDocument", id],
            queryFn: () => {
                return importCusDecAction.detail(id);
            },
        });
    }
}

export default useImportCusDec;