import React from 'react';

export interface IconProps {
  /**
   * SVG to render. Accepts a React SVG component (e.g. imported with SVGR or
   * defined inline) or a raw SVG string.
   *
   * **Accessibility note:** when passing a React SVG component, do not include
   * `aria-hidden`, `role`, or `aria-label` attributes in the component itself.
   * The `Icon` component applies the correct accessibility attributes based on
   * whether an `aria-label` prop is provided.
   *
   * **Security note:** when passing a raw SVG string, ensure the content is
   * from a trusted source. The string is injected via `dangerouslySetInnerHTML`
   * without sanitization.
   */
  svg: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;

  /**
   * Width and height in pixels.
   * @default 16
   */
  size?: number;

  /** Additional CSS class names to apply to the icon element. */
  className?: string;

  /**
   * Accessible label for the icon. When provided the icon is announced by
   * screen readers with `role="img"`. When omitted the icon is treated as
   * decorative and hidden from assistive technology (`aria-hidden="true"`).
   */
  'aria-label'?: string;
}

/**
 * Renders an SVG icon. Accepts either a React SVG component (e.g. imported
 * with SVGR) or a raw SVG string, making it easy to use your own icon library
 * without being tied to a specific icon set.
 *
 * @example
 * // React SVG component
 * import { ReactComponent as ChevronIcon } from './chevron.svg';
 * <Icon svg={ChevronIcon} size={20} aria-label="Expand" />
 *
 * @example
 * // Inline SVG function
 * const StarIcon = () => <svg viewBox="0 0 24 24">...</svg>;
 * <Icon svg={StarIcon} size={16} />
 *
 * @example
 * // Raw SVG string
 * <Icon svg='<svg viewBox="0 0 24 24">...</svg>' size={24} />
 */
export function Icon({
  svg,
  size = 16,
  className = '',
  'aria-label': ariaLabel,
}: IconProps) {
  const isDecorative = !ariaLabel;
  const classNames = ['dds-icon', className].filter(Boolean).join(' ');

  if (typeof svg === 'string') {
    return (
      <span
        className={classNames}
        style={{ width: size, height: size }}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: svg }}
        {...(isDecorative
          ? { 'aria-hidden': true }
          : { role: 'img', 'aria-label': ariaLabel })}
      />
    );
  }

  const SvgComponent = svg;
  return (
    <SvgComponent
      className={classNames}
      width={size}
      height={size}
      {...(isDecorative
        ? { 'aria-hidden': true }
        : { role: 'img', 'aria-label': ariaLabel })}
    />
  );
}
