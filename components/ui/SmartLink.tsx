import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  external?: boolean;
  children: ReactNode;
};

// Hash links, mail/tel links, and static files bypass next/link.
const PLAIN_ANCHOR = /^(#|mailto:|tel:)|\.[a-z0-9]{2,5}$/i;

export default function SmartLink({
  href,
  external,
  children,
  ...rest
}: Props) {
  const isExternal = external ?? /^https?:\/\//i.test(href);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  if (PLAIN_ANCHOR.test(href) || rest.download !== undefined) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
