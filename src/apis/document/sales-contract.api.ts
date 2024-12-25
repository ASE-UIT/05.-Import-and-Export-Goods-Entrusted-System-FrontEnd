import {
    CreateSalesContractType,
    GetSaleContractDocumentByIdType,
} from "@/schema/document/sales-contract.schema";
import { ErrorType } from "@/types/error.type";
import { IShipment } from "@/types/shipment";
import http from "@/utils/http";
import axios from "axios";

const salesContractAction = {
    createDocument: async (createSalesContract: CreateSalesContractType) => {
        try {
            const response = await http.post(
                `v1/document`,
                createSalesContract
            );
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.data) {
                const postError = error.response.data as ErrorType;
                console.error("Error during update quote request:", postError);
                throw postError;
            } else {
                console.error("Unexpected error during post:", error);
                throw error;
            }
        }
    },
    getDocumentById: async (id: string) => {
        try {
            const response = await http.get<
                EximResponseWrapper<GetSaleContractDocumentByIdType[]>
            >(`v1/document/${id}?type=SALES_CONTRACT`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.data) {
                const getError = error.response.data as ErrorType;
                console.error("Error during get document:", getError);
                throw getError;
            } else {
                console.error("Unexpected error during get:", error);
                throw error;
            }
        }
    },
    async getShipment(id?: string) {
        const res = await http.get<EximResponseWrapper<IShipment>>(
            `/v1/shipment/${id}`
        );
        return res.data;
    },
};
export default salesContractAction;
