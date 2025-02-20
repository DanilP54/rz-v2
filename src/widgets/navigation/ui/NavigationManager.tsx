"use client";
import React, {createContext, useEffect, useLayoutEffect} from "react";
import {Flex, Stack, UnstyledButton} from "@mantine/core";
import {ReactNode, useState} from "react";
import {usePathname} from "next/navigation";
import {
    useNavigationManager,
} from "../lib/useNavigationManager";
import {useToggle} from "../lib/useToggle";
import Link from "next/link";
import classes from "./navogationManager.module.css";
import clsx from "clsx";
import {NavigationPanel, navigationPanels, Segments} from "../config/navigationConfig";


export interface NavPanelState extends NavigationPanel {
    readonly segment: Segments;
    isOpen: boolean;
    isActive: boolean;
};

export type NavigationManagerContext = {
    panels: NavPanelState[];
    setPanels: React.Dispatch<React.SetStateAction<NavPanelState[]>>;
};

export const NavigationManagerContext = createContext<NavigationManagerContext | null>(null);


const createInitialState = (pathname: string | null, config: NavigationPanel[]) => {
    return config.map(panel => ({
        ...panel,
        isActive: pathname?.includes(panel.segment) || false,
        isOpen: pathname?.includes(panel.segment) || false

    }))
}

export function NavigationManager({children, initialPanels}: {
    children: ReactNode;
    initialPanels: NavigationPanel[];
}) {

    const pathname = usePathname()

    const [panels, setPanels] = useState<NavPanelState[]>(() => createInitialState(pathname, initialPanels))

    console.log(panels)

    // useEffect(() => {
    //     if (!pathname) return
    //     setPanels((panel) => {
    //         return panel.map(p => {
    //             if (pathname.includes(p.segment)) {
    //                 return {...p, isActive: true, isOpen: true}
    //             }
    //             return {...p, isActive: false, isOpen: false}
    //         })
    //     })
    // }, [pathname]);

    return (
        <NavigationManagerContext value={{panels, setPanels}}>
            <Stack h={"min-content"} gap={0}>
                {children}
            </Stack>
        </NavigationManagerContext>
    );
}

// function InitialPanel({panel}: { panel: NavigationPanel }) {
//
//     const {initialNewPanel, panelIsActive, setActivePanel} = useNavigationManager();
//
//
//     const pathname = usePathname()
//
//     useLayoutEffect(() => {
//         initialNewPanel(panel.segment);
//     }, [panel.segment]);
//
//     useLayoutEffect(() => {
//         panel.menuItems.map((link) => {
//             if (pathname?.includes(link.path)) {
//                 setActivePanel(panel.segment)
//             }
//         })
//     }, [pathname])
//
//     return (
//         <Toggle
//             segment={panel.segment}
//             panelIsActive={panelIsActive(panel.segment)}
//         >
//             {panel.menuItems.map((link) => (
//                 <Links
//                     label={link.label}
//                     key={link.label}
//                     path={link.path}
//                     isActive={pathname?.includes(link.path) || false}
//                 />
//             ))}
//         </Toggle>
//     );
// }


function Toggle({children, segment}: {
    children: ReactNode;
    segment: Segments;
}) {

    const pathname = usePathname()

    const {isOpen, toggle} = useToggle(segment);

    const isActivePanel = pathname?.includes(segment) || false;


    return (
        <Flex style={{order: isActivePanel ? "1" : "0"}}>
            <UnstyledButton
                role="navigation"
                className={clsx(classes.toggle, classes[segment])}
                onClick={toggle}
            ></UnstyledButton>
            {isOpen && (
                <Flex className={clsx(classes.panel, classes[segment])} component="nav">
                    {children}
                </Flex>
            )}
        </Flex>
    );
}

function Links({label, path}: {
    label: string;
    path: string;
}) {

    const {setActivePanel} = useNavigationManager()

    const pathname = usePathname()

    const isActiveLink = pathname?.includes(path) || false

    useEffect(() => {
        if (!isActiveLink) return
        setActivePanel(path)
    }, [pathname]);

    return (
        <Link
            className={clsx(classes.link, {[classes.active]: isActiveLink})}
            href={path}>
            {label}
        </Link>
    );
}


// InitialPanel.displayName = "NavigationManager.InitialPanel";
Links.displayName = "NavigationManager.Links";
Toggle.displayName = "NavigationManager.Toggle";

NavigationManager.Toggle = Toggle;
NavigationManager.Links = Links;
// NavigationManager.InitialPanel = InitialPanel;
