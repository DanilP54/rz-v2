import { Group } from "@mantine/core";
import Link from "next/link";
import classes from './authLink.module.css';

export const AuthLinks = ({gap = 10}: {gap?: number}) => {
    return (
        <>
            <Group gap={gap} className={classes.links}>
                <Link href={'#'}>Sign In</Link>
                <Link href={'#'}>Sign Up</Link>
            </Group>
        </>
    )
}