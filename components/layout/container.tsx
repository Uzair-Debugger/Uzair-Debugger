import React from "react";
import { mergeClasses } from "../lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section className="w-full" {...props}>
        <div
          ref={ref}
          className={mergeClasses(
            "max-w-7xl mx-auto px-6 lg:px-8 ",
            className
          )}
        >
          {children}
        </div>
      </section>
    );
  }
);

Container.displayName = "Container";

export default Container;