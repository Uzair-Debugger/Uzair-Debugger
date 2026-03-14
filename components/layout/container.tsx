import React from "react";
import { mergeClasses } from "../lib/utils";
interface ContainerProps extends React.HTMLAttributes<HTMLElement>{}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
    ({className, children, ...props}: ContainerProps, refs)=>{
        return(
            <section 
                className={mergeClasses('w-full dark:bg-[rgb(var(--app-gray-50))] ', className)}
                ref={refs}
                {...props}
            >
                <div className="w-full flex flex-col py-20 m-auto">
                    {children}
                </div>
            </section>
        )
    }
)
export default Container;