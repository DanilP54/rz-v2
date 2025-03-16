import { Flex, Skeleton, Stack } from "@mantine/core";

const TOTAL_COUNT_CARD_SKELETON = 100

const CardSkeleton = () => {
  return (
    <>
      <Stack gap={10}>
        <Skeleton w={150} h={150} />
        <Skeleton w={150} h={10} />
        <Skeleton w={100} h={10} />
      </Stack>
    </>
  );
};

export const CardListSkeleton = () => {
  return (
    <div style={{ padding: '20px 0 30px 0' }}>
      <Flex gap={20} wrap={"wrap"} mt={20} justify={"center"}>
        {Array.from({ length: TOTAL_COUNT_CARD_SKELETON }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </Flex>
    </div>
  );
};
