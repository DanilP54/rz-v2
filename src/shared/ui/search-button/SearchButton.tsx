import { Flex, Text, UnstyledButton } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import classes from "./searchButton.module.css";
import { clsx } from "clsx";

type Pages = 'feed' | 'radio' | 'details' | 'rz';

type SearchButtonProps = {
  page: Pages;
  placeholder?: string
}

export const SearchButton = ({ page, placeholder = 'Поиск' }: SearchButtonProps) => {
  return (
    <UnstyledButton
      w={200}
      className={clsx(classes.search_button, classes[page])}>
      <Flex
        align={'center'}
        gap={15}
      >
        <IconSearch size={15} className={clsx(classes.search_button_icon, classes[page])} />
        <Text className={clsx(classes.search_button_text, classes[page])} size={'sm'}>{placeholder}</Text>
      </Flex>
    </UnstyledButton>
  )
}
