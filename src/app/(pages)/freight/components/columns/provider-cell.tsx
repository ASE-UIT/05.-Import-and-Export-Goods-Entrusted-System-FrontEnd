import React from "react";
import { useProvider } from "@/hooks/use-provider";

const ProviderCell = ({ providerId }: { providerId: string }) => {
  const providerData = useProvider().useGetProviderById(providerId).data;
  const providerName = providerData?.data?.[0]?.name || "Noname";

  return <div>{providerName}</div>;
};

export default ProviderCell;
