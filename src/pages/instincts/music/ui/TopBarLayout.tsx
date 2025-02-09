import { Flex } from "@mantine/core";
import React from "react";

export const TopBarLayout = ({
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
        <div
          style={{
            padding: "10px 68px",
            backgroundColor: "rgb(240, 226, 226)",
            borderLeft: "6px solid rgb(230, 96, 96)",
            borderRight: "6px solid rgb(230, 96, 96)",
            borderBottom: "6px solid rgb(230, 96, 96)",
          }}
        >
          <Flex justify={"space-between"} align={"center"}>
            {filterToggles}
            {searchBar}
          </Flex>
        </div>
    </>
  );
};
