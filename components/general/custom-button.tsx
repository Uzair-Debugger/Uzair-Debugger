'use client';

import React from "react";
import { mergeClasses } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: 'download' | 'submit' | 'preview' | 'link';
}

export default function CustomButton({
    btnType = 'submit',
    children,
    className,
    ...props
}:ButtonProps){ 
    // You can add size-based classes
    const btnTypeClasses = {
        download: 'bg-blue-500 hover:bg-blue-600',
        submit: 'bg-green-500 hover:bg-green-600',
        preview: 'bg-yellow-500 hover:bg-yellow-600',
        link: 'bg-transparent hover:bg-gray-200'
    }
    // what is type of btnTypeClasses? it is an object with keys of type string and values of type string. so we can define it as Record<string, string>
    return(
        <button 
            className={mergeClasses(
                'text-gray-600 w-50 p-3 rounded-sm hover:bg-amber-400 cursor-pointer',
                btnTypeClasses[btnType],
                className
            )} 
            {...props}
        >
            {children}
        </button>
    );
}
