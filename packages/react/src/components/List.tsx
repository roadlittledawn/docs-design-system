import React, { ReactNode } from "react";

interface ListProps {
  /** List items */
  children: ReactNode;

  /** Additional CSS classes */
  className?: string;

  /** Whether the list is ordered (numbered) or unordered (bullets). Default: true */
  ordered?: boolean;

  /** Custom bullet character for unordered lists (emoji or text). Only applies when ordered=false */
  bullet?: string;

  /** Custom bullet icon (React node, e.g., SVG) for unordered lists. Takes precedence over bullet prop */
  bulletIcon?: ReactNode;
}

interface ListItemProps {
  /** List item content */
  children: ReactNode;

  /** Additional CSS classes */
  className?: string;
}

export function List({ children, className = "", ordered = true, bullet, bulletIcon }: ListProps) {
  const listClasses = ["dds-list", className].filter(Boolean).join(" ");
  const Element = ordered ? "ol" : "ul";

  return (
    <Element
      className={listClasses}
      data-ordered={ordered}
      data-has-icon={!!bulletIcon}
      style={bullet && !bulletIcon ? ({ "--dds-list-bullet": `"${bullet}"` } as React.CSSProperties) : undefined}
    >
      {bulletIcon && !ordered
        ? React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === ListItem) {
              return React.cloneElement(child as React.ReactElement<ListItemProps>, {
                ...child.props,
                // @ts-ignore - passing internal prop
                bulletIcon,
              });
            }
            return child;
          })
        : children}
    </Element>
  );
}

export function ListItem({ children, className = "", ...props }: ListItemProps & { bulletIcon?: ReactNode }) {
  const itemClasses = ["dds-list-item", className].filter(Boolean).join(" ");
  const { bulletIcon } = props;

  return (
    <li className={itemClasses}>
      {bulletIcon && <span className="dds-list-item-icon">{bulletIcon}</span>}
      {children}
    </li>
  );
}

List.Item = ListItem;
