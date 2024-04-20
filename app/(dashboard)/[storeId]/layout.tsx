import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId,
      id: params.storeId,
    },
  });
  if (!store) {
    redirect("/");
  }

  return (
    <>
      <div>This will be a Nav Bar</div>
      {children}
    </>
  );
}
