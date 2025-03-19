import { DetailsHeader } from "@/widgets/detail-header/DetailHeader";
import classes from './instinctsDetails.module.css';
import { ReactNode } from "react";
import { BackNavigationButton } from "@/shared/ui/back-nav-button/BackNavigationButton";

export function InstinctsDatailsLayout({ children }: { children: ReactNode }) {

  return (
    <div className={classes.details_wrapper}>
      <DetailsHeader segment="instincts" />
      <div className={classes.details_grid}>
        <div className={classes.details_left_section}>
          <div className={classes.arrow_back}>
            <BackNavigationButton />
          </div>
        </div>
        <div className={classes.details_center_section}>{children}</div>
        <div className={classes.details_right_section}></div>
      </div>
    </div>
  )
}
