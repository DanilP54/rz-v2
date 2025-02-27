import { useEffect } from "react"
import { useNavigationManager } from "./useNavigationManager"
import { usePathname } from "next/dist/client/components/navigation"

import { containsSubstring } from "./utils"
import { NavigationPanel } from "../config"


export function useInitialPanel(panel: NavigationPanel) {

  const { initialPanel } = useNavigationManager()

  const pathname = usePathname()

  useEffect(() => {
    initialPanel(panel, containsSubstring(pathname, panel.segment))
  }, [])


  return panel.segment
}
