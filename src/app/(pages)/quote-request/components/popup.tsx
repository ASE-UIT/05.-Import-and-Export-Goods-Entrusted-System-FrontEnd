import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import useQuoteRequest from "@/hooks/use-quote-request";
interface CustomDialogProps {
  quoteRequestId: string; 
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function CustomDialog({ quoteRequestId, setIsPopupOpen }: CustomDialogProps){
    const { data, isLoading, error } = useQuoteRequest.useGetQuoteRequestDetail(quoteRequestId || "", {
        enabled: !!quoteRequestId,
    });
    console.log(data);
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
                    <p>Customer ID: {data.quoteReqId}</p>
                    <p>Origin: {data.origin}</p>
                    <p>Destination: {data.destination}</p>
                    
                    {/* Render more fields as needed */}
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
