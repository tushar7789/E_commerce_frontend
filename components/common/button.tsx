import React, { ReactNode } from 'react'
import Link from 'next/link';


interface ButtonCompInterface {
    children: ReactNode,
    to: string,
    tailwindStyleString: string
}

const ButtonComp = ({ children, to, tailwindStyleString }: ButtonCompInterface) => {
    return (
        <Link href={to} className={tailwindStyleString}>
            {children}
        </Link>
    )
}

export default ButtonComp;
