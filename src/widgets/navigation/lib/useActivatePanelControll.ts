import { usePathname } from "next/dist/client/components/navigation";
import { useEffect } from "react";
import { Segments } from "../config";
import { containsSubstring } from "./utils";


export function useActivatePanelControll({ segment, actionFn }: { segment: Segments, actionFn: () => void }) {

  const pathname = usePathname()

  useEffect(() => {
    if (!containsSubstring(pathname, segment)) return
    actionFn()
  }, [pathname])


  return pathname
}
