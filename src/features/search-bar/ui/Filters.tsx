"use client";
import React, { useState } from "react";
import { Chip, ChipGroup, Flex } from "@mantine/core";
import classes from '../searchBar.module.css';
import { IconX } from "@tabler/icons-react";

export function Filter() {
  const [value, setValue] = useState<string | null>("");

  const handleChipClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === value) {
      setValue(null);
    }
  };

  return (<ChipGroup multiple={false}
    value={value}
    onChange={setValue}
  >
    <Flex align={'center'} gap={'md'}>
      <Chip
        radius={"sm"}
        icon={<IconX size={18} />}
        value="first"
        onClick={handleChipClick}
      >
        Коммерческое
      </Chip>
      <Chip
        radius={"sm"}
        icon={<IconX size={18} />}
        value="second"
        onClick={handleChipClick}
      >
        Некоммерческое
      </Chip >
    </Flex>
  </ChipGroup>
  );
}
