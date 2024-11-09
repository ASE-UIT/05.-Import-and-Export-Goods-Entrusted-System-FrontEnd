"use client";

import useAuth from "@/hooks/use-auth";

export default function TestPage() {
  const { data } = useAuth.useGetSession();

  console.log(data);

  return (
    <div className="flex items-center justify-center">
      <div className="text-2xl">Hello, {data?.username}</div>
      <div></div>
    </div>
  );
}
