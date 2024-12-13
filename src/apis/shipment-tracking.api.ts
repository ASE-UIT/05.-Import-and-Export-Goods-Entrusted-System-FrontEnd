import { UpdateShipmentTrackingBodyType } from "@/schema/shipmentTracking.schema";
import { ErrorType } from "@/types/error.type";
import { ShipmentTracking } from "@/types/shipment-tracking.type";
import { Shipment } from "@/types/shipment.type";
import http from "@/utils/http";
import axios from "axios";

const shipmentTrackingAction = {
  getShipmentTracking: async (
    shipmentId?: string,
    location?: string,
    status?: string,
    page?: number,
    limit?: number
  ) => {
    try {
      const params = {
        shipmentId,
        location,
        status,
        page,
        limit,
      };
      const response = await http.get<
        EximResponseWrapper<PaginationWrapper<ShipmentTracking[]>>
      >(`v1/shipment-tracking`, { params });
      return response.data.data;
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
    trackingId: string,
    body: UpdateShipmentTrackingBodyType
  ) => {
    try {
      const response = await http.patch(
        `v1/shipment-tracking/${trackingId}`,
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

  getShipment: async (
    contractId?: string,
    shipmentType?: string,
    page?: number,
    limit?: number
  ) => {
    try {
      const params = {
        contractId,
        shipmentType,
        page,
        limit,
      };
      const response = await http.get<
        EximResponseWrapper<PaginationWrapper<Shipment[]>>
      >(`v1/shipment`, { params });
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const shipmentError = error.response.data as ErrorType;
        console.error("Error during shipment:", shipmentError);
        throw shipmentError;
      } else {
        console.error("Unexpected error during shipment:", error);
        throw error;
      }
    }
  },
};

export default shipmentTrackingAction;
