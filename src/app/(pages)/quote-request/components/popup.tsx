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
  const closePopup = () => setIsPopupOpen(false);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-GB");

  return (
    <Dialog open={true} onOpenChange={closePopup}>
      <DialogContent className="max-w-xl p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">
            Additional Information
          </DialogTitle>
          <DialogDescription>
            {data && data.length > 0 ? (
              <div className="space-y-4">
                <section className="space-y-1">
                  <h3 className="text-black font-extrabold">
                    General Information:
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm border border-black-300 rounded-md p-4 ">
                    <p>
                      <strong>Origin:</strong> {data[0].origin}
                    </p>
                    <p>
                      <strong>Destination:</strong> {data[0].destination}
                    </p>
                    <p>
                      <strong>Shipment Ready Date:</strong>{" "}
                      {formatDate(data[0].shipmentReadyDate.toString())}
                    </p>
                    <p>
                      <strong>Shipment Deadline:</strong>{" "}
                      {formatDate(data[0].shipmentDeadline.toString())}
                    </p>
                    <p>
                      <strong>Cargo Insurance:</strong>{" "}
                      {data[0].cargoInsurance ? "Yes" : "No"}
                    </p>
                    <p>
                      <strong>Quote Request Id:</strong> {data[0].quoteReqId}
                    </p>
                  </div>
                </section>

                <section className="space-y-1">
                  <h3 className="text-black font-extrabold">Timestamps:</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm border border-black-300 rounded-md p-4">
                    <p>
                      <strong>Updated At:</strong>{" "}
                      {formatDate(data[0].updatedAt.toString())}
                    </p>
                    <p>
                      <strong>Created At:</strong>{" "}
                      {formatDate(data[0].createdAt.toString())}
                    </p>
                  </div>
                </section>

                <section>
                  <PackageDetails quoteRequestDetailsId={data[0].id} />
                </section>
              </div>
            ) : (
              <p className="text-center text-gray-500">Loading...</p>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end gap-2">
          <Button
            onClick={() =>
              router.push(`${PATH_NAME.QUOTE_REQUEST}/update/` + quoteRequestId)
            }
          >
            Edit
          </Button>
          <Button onClick={closePopup} variant="outline">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
