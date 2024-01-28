import CenteredLayout from "@/components/centered-layout";
import { ReactNode } from "react";

export default function MenuitemLayout({ children }: { children: ReactNode }) {
  return <CenteredLayout>{children}</CenteredLayout>;
}
