"use client";
import { navigationPanels } from "./config/navigationConfig";
import { NavigationManager } from "./ui/NavigationManager";

export const Navigation = () => {
  return (
    <>
      <NavigationManager>
        {navigationPanels.map((panel) => (
          <NavigationManager.InitialPanel key={panel.segment} panel={panel} />
        ))}
      </NavigationManager>
    </>
  );
};
