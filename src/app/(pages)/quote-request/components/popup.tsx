import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import useQuoteRequest from "@/hooks/use-quote-request";
import { PackageDetails } from "./package-details";
interface CustomDialogProps {
  quoteRequestId: string; 
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function CustomDialog({ quoteRequestId, setIsPopupOpen }: CustomDialogProps){
    const { data, isLoading, error } = useQuoteRequest.useGetQuoteRequestDetail(quoteRequestId || "", {
        enabled: !!quoteRequestId,
    });
    const closePopup = () => {
    setIsPopupOpen(false); 
    };
    return (
        <Dialog open={true} onOpenChange={closePopup}>
            <DialogContent>
            <DialogHeader>
                <DialogTitle>Additional Information</DialogTitle>
                <DialogDescription>
                {data ? (
                    <div>
                    <p>Origin: {data.origin}</p>
                    <p>Destination: {data.destination}</p>
                    <p>Shipment Ready Date: {new Date(data.shipmentReadyDate).toDateString()}</p>
                    <p>Shipment Deadline: {new Date(data.shipmentDeadline).toDateString()}</p>
                    <p>Cargo Insurance: {String(data.cargoInsurance)}</p>
                    <p>Quote Request Id: {data.quoteReqId}</p>
                    <p>Updated At: {new Date(data.updatedAt).toDateString()}</p>
                    <p>Create At: {new Date(data.createdAt).toDateString()}</p>
                    <PackageDetails quoteRequestDetailsId={data.id}/>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button onClick={closePopup}>Close</Button>
            </DialogFooter>
            </DialogContent>
      </Dialog>
    )
}
