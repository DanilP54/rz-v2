import { Flex, Text, UnstyledButton } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import classes from "./searchButton.module.css";

type SearchButtonProps = {
  width?: number,
  feedPage?: true
  radioPage?: true
}

export const SearchButton = ({ width = 200, feedPage, radioPage }: SearchButtonProps) => {
  return (
    <UnstyledButton
      feedpage={feedPage?.toString()}
      radiopage={radioPage?.toString()}
      w={width}
      className={classes.search_container}>
      <Flex
        align={'center'}
        gap={15}
      >
        <IconSearch size={15} className={classes.search_icon} />
        <Text className={classes.search_text} size={'sm'}>Поиск</Text>
      </Flex>
    </UnstyledButton>
  )
}
