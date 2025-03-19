"use client"

import { ReactNode } from "react";
import { useParams, } from "next/navigation";

export function ConditionalRenderer({ children }: { children: ReactNode }) {

  const { id } = useParams() as { id?: string }

  if (id) {
    return null
  }

  return children
}
