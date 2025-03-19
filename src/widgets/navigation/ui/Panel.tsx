import { NavLink } from "./NavLink";
import { Toggle } from "./Toggle";
import { usePathname } from "next/dist/client/components/navigation";
import { NavigationPanel } from "../config";
import { Dispatch, SetStateAction } from "react";
import { NavigationSegments } from "../config";

export function Panel({ panel, openPanelSegment, updateOpenPanelSegment }: {
  panel: NavigationPanel;
  openPanelSegment: NavigationSegments | null;
  updateOpenPanelSegment: Dispatch<SetStateAction<NavigationSegments | null>>;
}) {

  const { segment, navigationLinks } = panel

  const pathname = usePathname()

  const activePanel = pathname?.includes(segment) || false

  return (
    <Toggle
      isOpen={openPanelSegment === segment}
      updateOpenPanelSegment={updateOpenPanelSegment}
      segment={segment}
      panelIsActive={activePanel}>
      {
        navigationLinks.map((link) => (
          <NavLink
            segment={segment}
            key={link.label}
            label={link.label}
            path={link.path}
            navLinkIsActive={isActiveNavLink(pathname, link.path)}
          />
        ))
      }
    </Toggle>
  );
}

function isActiveNavLink(currentPath: string | null, linkPath: string) {
  return currentPath?.includes(linkPath) ?? false
}
