'use client'
import { FloatingIndicator, Tabs } from "@mantine/core"
import classes from "./feedTabs.module.css"
import { useState } from "react";
import { PostList } from "./PostList";

type ValueTabs = 'public feed' | 'privet feed';

export const FeedTabs = () => {
    
    const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
    const [value, setValue] = useState<string | null>('public feed');
    const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});

    const setControlRef = (val: ValueTabs) => (node: HTMLButtonElement) => {
      controlsRefs[val] = node;
      setControlsRefs(controlsRefs);
    };

    return (
        <Tabs variant="none" value={value} onChange={setValue}>
            <Tabs.List justify="center" ref={setRootRef} className={classes.list}>
                <Tabs.Tab fw={700} value="public feed" ref={setControlRef('public feed')} className={classes.tab}>
                    Наша лента
                </Tabs.Tab>
                <Tabs.Tab fw={700} value="privet feed" ref={setControlRef('privet feed')} className={classes.tab}>
                    Ваша лента
                </Tabs.Tab>
                <FloatingIndicator
                    target={value ? controlsRefs[value] : null}
                    parent={rootRef}
                    className={classes.indicator}
                />
            </Tabs.List>
            <Tabs.Panel value="public feed">
                <PostList />
            </Tabs.Panel>
            <Tabs.Panel value="privet feed">
                <PostList />
            </Tabs.Panel>
        </Tabs>
    )
}