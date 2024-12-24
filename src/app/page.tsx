"use client";

import useAuth from "@/hooks/use-auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: user } = useAuth.useGetSession();

  useEffect(() => {
    if (user?.role?.name === "CLIENT") {
      redirect("/quote-request");
    }

    if (!user) {
      redirect("/login");
    }
  }, [user]);

  return <div className="h-[10000px]">Home</div>;
}
