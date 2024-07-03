"use client";

import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
