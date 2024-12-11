"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useQuoteRequest from "@/hooks/use-quote-request";
import { PackageDetails } from "./package-details";
import { PATH_NAME } from "@/configs";
import { useRouter } from "next/navigation";
interface CustomDialogProps {
  quoteRequestId: string;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function CustomDialog({
  quoteRequestId,
  setIsPopupOpen,
}: CustomDialogProps) {
  const router = useRouter();
  const { data } = useQuoteRequest.useGetQuoteRequestDetail(
    quoteRequestId || ""
  );
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <Dialog open={true} onOpenChange={closePopup}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Additional Information</DialogTitle>
          <DialogDescription>
            {data && data.length > 0 ? (
              <div>
                <p>Origin: {data[0].origin}</p>
                <p>Destination: {data[0].destination}</p>
                <p>
                  Shipment Ready Date:{" "}
                  {new Date(data[0].shipmentReadyDate).toDateString()}
                </p>
                <p>
                  Shipment Deadline:{" "}
                  {new Date(data[0].shipmentDeadline).toDateString()}
                </p>
                <p>Cargo Insurance: {String(data[0].cargoInsurance)}</p>
                <p>Quote Request Id: {data[0].quoteReqId}</p>
                <p>Updated At: {new Date(data[0].updatedAt).toDateString()}</p>
                <p>Create At: {new Date(data[0].createdAt).toDateString()}</p>
                <PackageDetails quoteRequestDetailsId={data[0].id} />
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() =>
              router.push(`${PATH_NAME.QUOTE_REQUEST}/update/` + quoteRequestId)
            }
          >
            Edit
          </Button>
          <Button onClick={closePopup}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
