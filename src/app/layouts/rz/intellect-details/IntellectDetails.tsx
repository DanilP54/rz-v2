import { DetailsHeader } from "@/widgets/detail-header/DetailHeader";
import classes from './intellectDetails.module.css';
import { ReactNode } from "react";
import { BackNavigationButton } from "@/shared/ui/back-nav-button/BackNavigationButton";

export function IntellectDatailsLayout({ children }: { children: ReactNode }) {

  return (
    <div className={classes.details_wrapper}>
      <DetailsHeader segment="intellect" />
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
