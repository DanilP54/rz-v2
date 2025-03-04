import { DetailsHeader } from "@/widgets/detail-header/DetailHeader";
import { ReactNode } from "react";

export function InstinctsDetailsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DetailsHeader segment="instincts" />
      {children}
    </>
  );
}
