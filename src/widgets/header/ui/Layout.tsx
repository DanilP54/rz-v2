import { Logo } from "@/shared/ui/logo/Logo"
import { Flex } from "@mantine/core"
import { ReactNode } from "react"

type LayoutProps = {
    themeToggle?: ReactNode,
    langSwitchLinks?: ReactNode
    globalSearch?: ReactNode
    authLinks?: ReactNode
}

export const Layout = ({ themeToggle, langSwitchLinks, globalSearch, authLinks }: LayoutProps) => {
    return (
        <Flex component="header" align={'start'} justify={'space-between'} p={20}>
            <Logo size="sm" link />
            <Flex align={'center'} gap={70}>
                <div>
                    {themeToggle}
                </div>
                <div>
                    {langSwitchLinks}
                </div>
                <div>
                    {globalSearch}
                </div>
                <div>
                    {authLinks}
                </div>
            </Flex>
        </Flex>
    )
}