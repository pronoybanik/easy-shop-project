"use client";
import React from "react";
import Link from "next/link";
import classNames from "@/utils/classNames";
import { usePathname } from "next/navigation";

const NavBarLink = ({
  children,
  href,
  activeClassName,
  exact = false,
  ...props
}) => {

  const path = usePathname();
  const active = exact ? path === href : path.startsWith(href);
  const classes = classNames(props.className, active && activeClassName);

  if (classes) {
    props.className = classes;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavBarLink;
