import { ReactNode } from "react";

interface ListProps {
  /** List items */
  children: ReactNode;

  /** Additional CSS classes */
  className?: string;
}

interface ListItemProps {
  /** List item content */
  children: ReactNode;

  /** Additional CSS classes */
  className?: string;
}

export function List({ children, className = "" }: ListProps) {
  const listClasses = ["dds-list", className].filter(Boolean).join(" ");

  return <ol className={listClasses}>{children}</ol>;
}

export function ListItem({ children, className = "" }: ListItemProps) {
  const itemClasses = ["dds-list-item", className].filter(Boolean).join(" ");

  return <li className={itemClasses}>{children}</li>;
}

List.Item = ListItem;
