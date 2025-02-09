'use client'

import classes from "./searchBar.module.css";

export const ResultList = ({ state }: { state: string }) => {
  return (
    <>
      {
        state.length > 0 &&
        <div className={classes.result_box}>
        </div>
      }
    </>
  );
};
