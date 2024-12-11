import useQuoteRequest from "@/hooks/use-quote-request";

interface PackageProps {
  quoteRequestDetailsId: string;
}
export function PackageDetails({ quoteRequestDetailsId }: PackageProps) {
  const { data } = useQuoteRequest.useGetPackageDetail(quoteRequestDetailsId);
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center">
        <span className="text-1xl font-bold">Package Information :</span>
      </div>
      {data && data.length > 0 ? (
        <div>
          <p>Package Type: {data[0].packageType}</p>
          <p>Weight: {data[0].weight}</p>
          <p>Length: {data[0].length}</p>
          <p>Width: {data[0].width}</p>
          <p>Height: {data[0].height}</p>
          <p>Updated At: {new Date(data[0].updatedAt).toDateString()}</p>
          <p>Create At: {new Date(data[0].createdAt).toDateString()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
