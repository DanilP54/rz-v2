import { Input } from "@mantine/core";
import classes from "./searchBarSkeleton.module.css";
import { IconSearch } from "@tabler/icons-react";

export const SearchBarSkeleton = () => {
  return (
    <div className={classes.wrapper}>
      <Input
        disabled
        classNames={{
          wrapper: classes.input_wrapper,
          input: classes.input,
        }}
        placeholder="Поиск"
        leftSection={<IconSearch size={16} />}
        w={250}
      />
    </div>
  );
};
