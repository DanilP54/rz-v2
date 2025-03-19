import React from "react";
import { Flex } from "@mantine/core";
import classes from "./searchAndFilters.module.css";
import clsx from "clsx";
import { NavigationSegments } from "../navigation/config";

export const SearchAndFilters = ({
  segment,
  filters,
  search,
}: {
  segment: NavigationSegments;
  filters: React.ReactNode;
  search: React.ReactNode;
}) => {
  return (
    <>
      <div className={clsx(classes.top_bar, classes[segment])}>
        <Flex justify={"space-between"} align={"center"}>
          {filters}
          {search}
        </Flex>
      </div>
    </>
  );
};
