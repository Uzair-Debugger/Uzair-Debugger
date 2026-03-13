import {clsx, ClassValue} from "clsx";
import { twJoin, twMerge } from "tailwind-merge";

export const mergeClasses = (...input: ClassValue[]) =>{
    return twMerge(clsx(input));
}