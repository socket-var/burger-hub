import CenteredLayout from "@/shared/components/centered-layout";
import { ReactNode } from "react";

export default function CartLayout({ children }: { children: ReactNode }) {
  return <CenteredLayout>{children}</CenteredLayout>;
}
