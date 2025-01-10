import { Flex } from "@mantine/core"
import Link from "next/link"

export const LangSwitchLinks = () => {
    return (
        <Flex style={{fontSize: '.9rem'}} gap={10}>
            <Link href={'#'}>en</Link>
            <Link className="active" href={'#'}>ru</Link>
            <Link href={'#'}>ua</Link>
            <Link href={'#'}>ro</Link>
        </Flex>
    )
}