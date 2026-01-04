import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
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
