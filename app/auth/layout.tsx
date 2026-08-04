import ButtonComp from "@/components/common/button";

const style = "h-8 w-20 flex justify-center items-center bg-white hover:bg-blue-500 hover:text-white";

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="w-100 h-100 my-5 mx-auto flex flex-col justify-center items-center rounded-[10px] bg-gray-300">
            <div className="h-8 w-80 flex justify-start box-content border-b-2 border-blue-500">
                <ButtonComp to="/auth/login" tailwindStyleString={style}>Login</ButtonComp>
                <ButtonComp to="/auth/signup" tailwindStyleString={style}>Signup</ButtonComp>
            </div>
            <div className="h-80 w-full">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;