"use client"

import { NavigationSegments } from "../config";
import clsx from "clsx";
import Link from "next/link";
import classes from '../navogation.module.css'

type NavLinkProps = {
  label: string;
  path: string;
  segment: NavigationSegments;
  navLinkIsActive: boolean
}

export const NavLink = ({
  label,
  path,
  navLinkIsActive,
}: NavLinkProps) => {

  return (
    <Link
      className={clsx(classes.link, { [classes.active]: navLinkIsActive })}
      href={path}
      replace
    >
      {label}
    </Link>
  );
}
