import { NavigationSegments } from "../config";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { Flex, UnstyledButton } from "@mantine/core";
import classes from '../navogation.module.css';
import clsx from "clsx";

type ToggleProps = {
  isOpen: boolean,
  updateOpenPanelSegment: Dispatch<SetStateAction<NavigationSegments | null>>
  children: ReactNode;
  panelIsActive: boolean;
  segment: NavigationSegments;
}

export const Toggle = ({
  isOpen,
  updateOpenPanelSegment,
  children,
  segment,
  panelIsActive,
}: ToggleProps) => {


  const toggle = () => {
    if (panelIsActive) return
    isOpen ? updateOpenPanelSegment(null) : updateOpenPanelSegment(segment)
  }

  return (
    <Flex className={clsx(classes.toggle_wrapper, { [classes.active]: panelIsActive })}>
      <UnstyledButton
        role="navigation"
        className={clsx(classes.toggle, classes[segment])}
        onClick={toggle}
      ></UnstyledButton>
      {(panelIsActive || isOpen) && (
        <Flex data-testid={segment} className={clsx(classes.panel, classes[segment])} component="nav">
          {children}
        </Flex>
      )}
    </Flex>
  );
}
