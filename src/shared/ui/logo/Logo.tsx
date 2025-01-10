import classes from "./logo.module.css";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

type SizePoints = "md" | "sm" | "xs";

type Size = {
  [T in SizePoints]: number;
};

const width: Size = {
  md: 300,
  sm: 100,
  xs: 50,
};

export function Logo({
  size = "md",
  link,
}: {
  size?: SizePoints;
  link?: boolean;
}) {
  if (link) {
    return (
      <>
        <Link href={'/'}>
          <Image
            className={clsx(classes.logo, classes.dark)}
            src={"/logo/logo-dark.png"}
            width={width[size]}
            height={width[size]}
            alt="logo"
            priority
          />
          <Image
            className={clsx(classes.logo, classes.light)}
            src={"/logo/logo-light.png"}
            width={width[size]}
            height={width[size]}
            alt="logo"
            priority
          />
        </Link>
      </>
    );
  }

  return (
    <>
        <Image
          className={clsx(classes.logo, classes.dark)}
          src={"/logo/logo-dark.png"}
          width={width[size]}
          height={width[size]}
          alt="logo"
          priority
        />
        <Image
          className={clsx(classes.logo, classes.light)}
          src={"/logo/logo-light.png"}
          width={width[size]}
          height={width[size]}
          alt="logo"
          priority
        />
    </>
  );
}
