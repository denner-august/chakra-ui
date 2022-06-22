import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  let isActive = false;
  const { asPath } = useRouter();

  if (asPath === rest.href || asPath === rest.as) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.500",
      })}
    </Link>
  );
}
