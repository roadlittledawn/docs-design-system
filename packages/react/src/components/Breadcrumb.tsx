'use client';

import { ReactNode, useState } from "react";

export interface BreadcrumbItem {
  /** Display text for the breadcrumb segment */
  label: string;
  /** Optional URL for the segment; omit for the current (last) page */
  href?: string;
}

export interface BreadcrumbProps {
  /** Ordered list of path segments, root first */
  items: BreadcrumbItem[];

  /**
   * Separator between segments. Accepts a string or any ReactNode (e.g. an SVG chevron icon).
   * @default "/"
   */
  delimiter?: ReactNode;

  /**
   * Size variant controlling font size.
   * @default "md"
   */
  size?: "sm" | "md";

  /**
   * On narrow viewports, collapse middle segments behind an expandable ellipsis (…).
   * The first and last segments are always visible. Click/tap the ellipsis to reveal all.
   * @default false
   */
  collapseOnMobile?: boolean;

  /**
   * On narrow viewports, let the full breadcrumb trail scroll horizontally instead of
   * wrapping to multiple lines. Can be combined with `collapseOnMobile`.
   * @default false
   */
  scrollOnMobile?: boolean;

  /** Additional CSS classes for consumer extensibility */
  className?: string;
}

/**
 * Breadcrumb navigation component. Renders a `<nav aria-label="Breadcrumb">` with an ordered
 * list of segments. The last (current) item receives `aria-current="page"`. Delimiter characters
 * are marked `aria-hidden` so screen readers skip them.
 */
export function Breadcrumb({
  items,
  delimiter = "/",
  size = "md",
  collapseOnMobile = false,
  scrollOnMobile = false,
  className = "",
}: BreadcrumbProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (items.length === 0) return null;

  const isCollapsible = collapseOnMobile && items.length > 2;

  const navClasses = [
    "dds-breadcrumb",
    `dds-breadcrumb--${size}`,
    isCollapsible ? "dds-breadcrumb--collapsible" : "",
    scrollOnMobile ? "dds-breadcrumb--scroll" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const firstItem = items[0];
  const lastItem = items[items.length - 1];
  const middleItems = items.length > 1 ? items.slice(1, -1) : [];
  const hasMiddle = middleItems.length > 0;

  return (
    <nav
      className={navClasses}
      aria-label="Breadcrumb"
      {...(isCollapsible ? { "data-expanded": String(isExpanded) } : {})}
    >
      <ol className="dds-breadcrumb-list">
        {/* First item — always visible */}
        <li className="dds-breadcrumb-item">
          {items.length === 1 ? (
            <span className="dds-breadcrumb-current" aria-current="page">
              {firstItem.label}
            </span>
          ) : firstItem.href ? (
            <a href={firstItem.href} className="dds-breadcrumb-link">
              {firstItem.label}
            </a>
          ) : (
            <span className="dds-breadcrumb-link">{firstItem.label}</span>
          )}
          {items.length > 1 && (
            <span className="dds-breadcrumb-delimiter" aria-hidden="true">
              {delimiter}
            </span>
          )}
        </li>

        {/* Ellipsis placeholder — only present in the DOM when collapsible */}
        {isCollapsible && hasMiddle && (
          <li className="dds-breadcrumb-item dds-breadcrumb-item--ellipsis">
            <button
              type="button"
              className="dds-breadcrumb-ellipsis"
              aria-label="Show all breadcrumb items"
              onClick={() => setIsExpanded(true)}
            >
              &hellip;
            </button>
            <span className="dds-breadcrumb-delimiter" aria-hidden="true">
              {delimiter}
            </span>
          </li>
        )}

        {/* Middle items */}
        {hasMiddle &&
          middleItems.map((item, relIndex) => (
            <li
              key={`${item.href ?? ''}-${item.label}-${relIndex}`}
              className={[
                "dds-breadcrumb-item",
                isCollapsible ? "dds-breadcrumb-item--middle" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {item.href ? (
                <a href={item.href} className="dds-breadcrumb-link">
                  {item.label}
                </a>
              ) : (
                <span className="dds-breadcrumb-link">{item.label}</span>
              )}
              <span className="dds-breadcrumb-delimiter" aria-hidden="true">
                {delimiter}
              </span>
            </li>
          ))}

        {/* Last item — current page */}
        {items.length > 1 && (
          <li className="dds-breadcrumb-item">
            {lastItem.href ? (
              <a
                href={lastItem.href}
                className="dds-breadcrumb-link dds-breadcrumb-current"
                aria-current="page"
              >
                {lastItem.label}
              </a>
            ) : (
              <span className="dds-breadcrumb-current" aria-current="page">
                {lastItem.label}
              </span>
            )}
          </li>
        )}
      </ol>
    </nav>
  );
}
