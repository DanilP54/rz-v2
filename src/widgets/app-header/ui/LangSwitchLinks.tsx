import { Flex } from "@mantine/core"
import Link from "next/link"

export const LangSwitchLinks = () => {
    return (
        <Flex style={{fontSize: '.9rem'}} gap={10}>
            <Link href={'#'}>eng</Link>
            <Link href={'#'}>ru</Link>
            <Link href={'#'}>ua</Link>
            <Link href={'#'}>ro</Link>
        </Flex>
    )
} 