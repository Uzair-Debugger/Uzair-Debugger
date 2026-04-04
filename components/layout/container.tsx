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
            "max-w-7xl mx-auto p-4 lg:px-5 ",
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