'use client'
import { Flex } from "@mantine/core";
import classes from "./topBar.module.css";
import React from "react";
import clsx from "clsx";

export const TopBar = ({
  variant,
  filterToggles,
  searchBar,
}: {
  variant: "instincts" | "intellect" | "balance";
  filterToggles: React.ReactNode;
  searchBar: React.ReactNode;
}) => {
  return (
    <>
      <div className={clsx(classes.top_bar, classes[variant])}>
        <Flex justify={"space-between"} align={"center"}>
          {filterToggles}
          {searchBar}
        </Flex>
      </div>
    </>
  );
};
