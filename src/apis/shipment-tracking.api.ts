import { UpdateShipmentTrackingBodyType } from "@/schema/shipmentTracking.schema";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

const shipmentTrackingAction = {
  getShipmentTracking: async (
    shipmentId?: string,
    location?: string,
    status?: string
  ) => {
    try {
      const params = {
        shipmentId,
        location,
        status,
      };
      const response = await http.get(`/shipment-tracking`, { params });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const shipmentTrackingError = error.response.data as ErrorType;
        console.error("Error during shipment tracking:", shipmentTrackingError);
        throw shipmentTrackingError;
      } else {
        console.error("Unexpected error during shipment tracking:", error);
        throw error;
      }
    }
  },

  updateShipmentTracking: async (
    shipmentId: string,
    body: UpdateShipmentTrackingBodyType
  ) => {
    try {
      const response = await http.patch(
        `/shipment-tracking/${shipmentId}`,
        body
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const shipmentTrackingError = error.response.data as ErrorType;
        console.error(
          "Error during update shipment tracking:",
          shipmentTrackingError
        );
        throw shipmentTrackingError;
      } else {
        console.error(
          "Unexpected error during update shipment tracking:",
          error
        );
        throw error;
      }
    }
  },
};

export default shipmentTrackingAction;
