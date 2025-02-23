"use client";
import { navigationPanels } from "./config/navigationConfig";
import { NavigationManager } from "./ui/NavigationManager";

export const Navigation = () => {
  return (
    <>
      <NavigationManager configuration={navigationPanels}>
        {
          navigationPanels.map(panel => (
            <NavigationManager.Panel key={panel.segment} panel={panel} />
          ))
        }
      </NavigationManager>
    </>
  );
};
