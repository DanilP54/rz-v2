"use client";
import { useState } from "react";
import { Chip, Group } from "@mantine/core";
// import classes from './filter.module.css';
import { IconCircle, IconX } from "@tabler/icons-react";

export function Filter() {
  const [value, setValue] = useState<string | null>("");

  const handleChipClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === value) {
      setValue(null);
    }
  };

  return (
    <Chip.Group multiple={false} value={value} onChange={setValue}>
      <Group>
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
        </Chip>
      </Group>
    </Chip.Group>
  );
}
