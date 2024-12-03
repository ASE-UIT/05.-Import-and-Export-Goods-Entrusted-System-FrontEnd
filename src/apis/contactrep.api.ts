import {
    ContactRepBodyType,
    ContactRepResType,
} from "@/schema/contactrep.schema";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

const contactRepAction = {
    getContactRep: async () => {
        try {
            const response = await http.get<ContactRepResType>(
                "v1/contact-representatives"
            );
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.data) {
                const contactRepError = error.response.data as ErrorType;
                console.error(
                    "Error during get contact representative:",
                    contactRepError
                );
                throw contactRepError;
            } else {
                console.error(
                    "Unexpected error during get contact representative:",
                    error
                );
                throw error;
            }
        }
    },

    createContactRep: async (contactRepDetails: ContactRepBodyType) => {
        try {
            const response = await http.post(
                "v1/contact-representatives",
                contactRepDetails
            );
            return response.data as ContactRep;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.data) {
                const contactRepError = error.response.data as ErrorType;

                throw { ...contactRepError, statusCode: error.status };
            } else {
                throw error;
            }
        }
    },

    updateContractRep: async (contactRepDetails: ContactRep) => {
        try {
            const response = await http.patch(
                `v1/contact-representatives/${contactRepDetails.id}`,
                contactRepDetails
            );
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.data) {
                const contactRepError = error.response.data as ErrorType;

                throw { ...contactRepError, statusCode: error.status };
            } else {
                throw error;
            }
        }
    },
};

export default contactRepAction;