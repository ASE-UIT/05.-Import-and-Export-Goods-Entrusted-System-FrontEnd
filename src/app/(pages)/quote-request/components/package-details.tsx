import useQuoteRequest from "@/hooks/use-quote-request";

interface PackageProps {
  quoteRequestDetailsId: string; 
}
export function PackageDetails({quoteRequestDetailsId} : PackageProps){
  const { data } = useQuoteRequest.useGetPackageDetail(quoteRequestDetailsId );
    return (
        <div className="flex flex-col ">
          <div className="flex justify-between items-center">
            <span className="text-1xl font-bold">Package Information :</span>
          </div>
            {data ?(
              <div>
              <p>Package Type: {data.packageType}</p>
              <p>Weight: {data.weight}</p>
              <p>Length: {data.length}</p>
              <p>Width: {data.width}</p>
              <p>Height: {data.height}</p>
              <p>Updated At: {new Date(data.updatedAt).toDateString()}</p>
              <p>Create At: {new Date(data.createdAt).toDateString()}</p>
              </div>
            ): (
              <p>Loading...</p>
          )}
            
        </div>
    )
}