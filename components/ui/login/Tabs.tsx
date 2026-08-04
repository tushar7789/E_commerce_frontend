'use client'

import { useState } from "react";
import ButtonComp from "@/components/common/button";

const style = "h-8 w-20 flex justify-center items-center bg-white hover:bg-blue-600 hover:text-white";

const Tabs = () => {
    const [active, setActive] = useState("login");
    return (
        <>
            <ButtonComp to="/auth/login" tailwindStyleString={style + ' rounded-tl-[5px]'}>Login</ButtonComp>
            <ButtonComp to="/auth/signup" tailwindStyleString={style + ' rounded-tr-[5px]'}>Sign Up</ButtonComp>
        </>
    );
}

export default Tabs;