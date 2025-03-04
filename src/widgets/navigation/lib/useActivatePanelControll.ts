import { usePathname } from "next/dist/client/components/navigation";
import { useEffect } from "react";
import { NavigationSegments } from "@/shared/types/Segments";
import { containsSubstring } from "./utils";


export function useActivatePanelControll({ segment, actionFn }: { segment: NavigationSegments, actionFn: () => void }) {

  const pathname = usePathname()

  useEffect(() => {
    if (!containsSubstring(pathname, segment)) return
    actionFn()
  }, [pathname])


  return pathname
}
