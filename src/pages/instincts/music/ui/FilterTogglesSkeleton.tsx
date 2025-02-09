import { Chip, Flex, UnstyledButton } from "@mantine/core"

export const FilterTogglesSkeleton = () => {
    return (
        <>
        <Flex align={'center'} gap={'md'}>
            <Chip radius={'sm'} disabled>Коммерческое</Chip>
            <Chip radius={'sm'} disabled>Некоммерческое</Chip>
        </Flex>
        </>
    )
} 