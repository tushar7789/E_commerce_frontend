'use client'

import { usePathname } from "next/navigation";
import ButtonComp from "@/components/common/button";

const normalLoginStyle = "h-8 w-20 flex justify-center items-center border-2 border-b-0 border-blue-600 rounded-tl-[5px] bg-white hover:bg-blue-600 hover:text-white";
const selectedLoginStyle = "h-8 w-20 flex justify-center items-center rounded-tl-[5px] bg-blue-600 text-white";
const normalSignupStyle = "h-8 w-20 flex justify-center items-center border-2 border-b-0 border-blue-600 rounded-tr-[5px] bg-white  hover:bg-blue-600 hover:text-white";
const selectedSignupStyle = "h-8 w-20 flex justify-center items-center rounded-tr-[5px] bg-blue-600 text-white";

const Tabs = () => {
    const activePath = usePathname().split("/")[2];
    // console.log(activePath)

    return (
        <>
            <ButtonComp to="/auth/login" tailwindStyleString={activePath === "login" ? selectedLoginStyle : normalLoginStyle}>Login</ButtonComp>
            <ButtonComp to="/auth/signup" tailwindStyleString={activePath === "signup" ? selectedSignupStyle : normalSignupStyle}>Sign Up</ButtonComp>
        </>
    );
}

export default Tabs;