'use client';
import { useState, useEffect, useRef, ReactNode, CSSProperties } from 'react';
import './Image.css';

export interface ImageProps {
  /** Image URL (required) */
  src: string;

  /** Alt text for accessibility (required) */
  alt: string;

  /** Optional caption displayed below the image using `<figcaption>` */
  caption?: ReactNode;

  /**
   * When provided, wraps the image in an `<a>` that opens the full-size image
   * in a new tab. Commonly set to the same value as `src` to enable a lightbox
   * pattern. Combine with `linkTarget` to navigate to a related page instead.
   */
  href?: string;

  /**
   * Override the link destination URL. When both `href` and `linkTarget` are
   * set, clicking the image navigates to `linkTarget` (useful for linking to a
   * related doc page rather than the raw image).
   */
  linkTarget?: string;

  /**
   * Apply rounded corners to the image.
   * - `true` or `'md'` — medium radius (0.5 rem)
   * - `'sm'` — small radius (0.25 rem)
   * - `'lg'` — large radius (0.75 rem)
   */
  rounded?: boolean | 'sm' | 'md' | 'lg';

  /**
   * Add a border and background padding around the image ("matted" appearance).
   * Useful for screenshots or diagrams that need visual separation from the
   * surrounding page content.
   */
  framed?: boolean;

  /**
   * Reduce the image opacity in dark mode so that overly bright screenshots
   * don't blow out the page. Has no effect in light mode.
   */
  dimInDarkMode?: boolean;

  /**
   * Constrain the image to a maximum width. Accepts any CSS `max-width` value
   * (e.g. `'320px'`, `'50%'`) or a plain number treated as pixels.
   * Useful when the image's native resolution is smaller than the column width.
   */
  maxWidth?: string | number;

  /** Additional CSS classes to apply to the `<figure>` element */
  className?: string;
}

export function Image({
  src,
  alt,
  caption,
  href,
  linkTarget,
  rounded,
  framed,
  dimInDarkMode,
  maxWidth,
  className = '',
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  /* Handle images that are already in the browser cache when the component
     mounts — the `onLoad` event won't fire for cached images in some browsers. */
  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  const roundedClass =
    rounded === 'sm'
      ? 'dds-image-rounded-sm'
      : rounded === 'lg'
        ? 'dds-image-rounded-lg'
        : rounded
          ? 'dds-image-rounded-md'
          : '';

  const classNames = [
    'dds-image',
    roundedClass,
    framed ? 'dds-image-framed' : '',
    dimInDarkMode ? 'dds-image-dim-dark' : '',
    loaded ? 'dds-image-loaded' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const figureStyle: CSSProperties = maxWidth
    ? { maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth }
    : {};

  const imgEl = (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className="dds-image-img"
      onLoad={() => setLoaded(true)}
    />
  );

  const content = href ? (
    <a
      href={linkTarget ?? href}
      target="_blank"
      rel="noopener noreferrer"
      className="dds-image-link"
    >
      {imgEl}
    </a>
  ) : (
    imgEl
  );

  return (
    <figure className={classNames} style={figureStyle}>
      <div className="dds-image-wrapper">
        <div className="dds-image-skeleton" aria-hidden="true" />
        {content}
      </div>
      {caption && (
        <figcaption className="dds-image-caption">{caption}</figcaption>
      )}
    </figure>
  );
}
