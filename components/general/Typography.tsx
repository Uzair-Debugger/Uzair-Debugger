import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeClasses } from "../lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-bold md:text-5xl lg:text-6xl dark:text-white",
      h2: "text-3xl font-semibold md:text-4xl dark:text-white",
      h3: "text-2xl font-semibold dark:text-white",
      subtitle: "text-lg md:text-xl text-[var(--app-gray-300)]",
      body1: "text-base md:text-lg text-[var(--app-gray-700)]",
      body2: "text-base text-[var(--app-gray-700)]",
      body3: "text-sm text-[var(--app-gray-700)]",
    },
  },
  defaultVariants: {
    variant: "body2",
  },
});

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  component?: React.ElementType;
}

const elementMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  subtitle: "p",
  body1: "p",
  body2: "p",
  body3: "p",
};

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ component, className, variant, children, ...props }, ref) => {
    const Component = component
      ? component
      : variant
      ? elementMapping[variant]
      : "p";

    return (
      <Component
        ref={ref}
        className={mergeClasses(typographyVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;