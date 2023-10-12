import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import styles from "./button.module.css";

const button = cva(styles.base, {
  variants: {
    intent: {
      primary: [styles.button, styles.primary],
      secondary: [styles.button, styles.secondary],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  ...props
}) => <button className={button({ intent,  className })} {...props} />;
