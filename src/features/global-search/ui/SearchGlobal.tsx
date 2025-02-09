"use client";
import { Spotlight, spotlight } from "@mantine/spotlight";
import { ReactNode, useState } from "react";
import classes from "./searchGlobal.module.css";

export const SearchGlobal = ({ trigger }: { trigger: ReactNode }) => {
  
  const [query, setQuery] = useState("");
  
  return (
    <>
      <div onClick={spotlight.open} className={classes.trigger}>
        {trigger}
      </div>
      <Spotlight
        inputMode="search"
        scrollable
        actions={[]}
        // maxHeight={600}
        limit={query.length === 0 ? 0 : 30}
        highlightQuery
        query={query}
        // nothingFound={query ? "К сожалению, ничего не найдено" : "Пожулайста, введите запрос"}
        onQueryChange={(q) => setQuery(q)}
      />
    </>
  );
};
