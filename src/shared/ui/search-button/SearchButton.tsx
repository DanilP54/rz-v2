import { Flex, Text, UnstyledButton } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import classes from "./searchButton.module.css";

type Pages = 'feed' | 'radio' | 'details' | 'rz';



type SearchButtonProps = {
  page: Pages;
  feedPage?: true
  radioPage?: true
}




export const SearchButton = ({ feedPage, radioPage }: SearchButtonProps) => {
  return (
    <UnstyledButton
      styles={{
        root: {
          // "--custom-text-color-search-button": "red",
          // "--custom-bg-color-search-button": "blue"
        }
      }}
      feedpage={feedPage?.toString()}
      radiopage={radioPage?.toString()}
      w={200}
      className={classes.search_button}>
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
