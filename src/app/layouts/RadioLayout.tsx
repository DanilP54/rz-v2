import { Header } from "@/widgets/header/header";
import { ReactNode } from "react";

export function RadioLayout({children}: {children: ReactNode}) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}