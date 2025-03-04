'use client'
import { Input } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react";
import classes from '../searchBar.module.css';
import { useState } from "react";
import { SearchResult } from "./SearchResult";



export const SearchBar = () => {

  const [state, setState] = useState('')

  return (
    <div className={classes.wrapper}>
      <Input value={state} onChange={(e) => setState(e.target.value)} classNames={{
        wrapper: classes.input_wrapper,
        input: classes.input
      }} placeholder="Поиск" leftSection={<IconSearch size={16} />} w={250} />
      <SearchResult state={state} />
    </div>
  )
}
