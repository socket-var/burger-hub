import { ReactNode } from "react";

export default function CenteredLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-96 mx-auto my-16 border border-slate-400 border-solid rounded-md p-8">
      {children}
    </div>
  );
}
