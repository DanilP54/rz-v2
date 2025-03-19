import { AppHeader } from "@/widgets/app-header";
import { ReactNode } from "react";

export function RadioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
}
