import Tabs from '@/components/ui/login/Tabs'

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="w-95 h-100 my-5 mx-auto flex flex-col justify-center items-center rounded-[10px] bg-gray-300">
            <div className="h-8 w-80 flex justify-start box-content border-b-2 border-blue-600">
                <Tabs />
            </div>
            <div className="h-80 w-full">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;