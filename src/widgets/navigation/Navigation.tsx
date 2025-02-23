"use client";
import { navigationPanelsConfig } from "./config";
import { NavigationManager } from "./ui/NavigationManager";

export const Navigation = () => {
  return (
    <>
      <NavigationManager configuration={navigationPanelsConfig}>
        {
          navigationPanelsConfig.map(panel => (
            <NavigationManager.Panel key={panel.segment} panel={panel} />
          ))
        }
      </NavigationManager>
    </>
  );
};
