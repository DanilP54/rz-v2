import {
  Chip,
  Flex
} from "@mantine/core"

export const FiltersSkeleton = () => {
  return (
    <>
      <Flex align={'center'} gap={'md'}>
        <Chip radius={'sm'} disabled>Коммерческое</Chip>
        <Chip radius={'sm'} disabled>Некоммерческое</Chip>
      </Flex>
    </>
  )
}
