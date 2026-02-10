import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant of the button
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "outline";

  /**
   * Size of the button
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

  /** Button content */
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const classNames =
    `dds-button dds-button-${variant} dds-button-${size} ${className}`.trim();

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
