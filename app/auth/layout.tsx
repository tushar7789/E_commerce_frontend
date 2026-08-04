import Tabs from '@/components/ui/login/Tabs'

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='w-full bg-gray-100'>
            <div className="w-95 h-100 my-5 mx-auto flex flex-col justify-center items-center bg-white shadow-xl">
                <div className="h-8 w-80 flex justify-start box-content border-b-2 border-blue-600">
                    <Tabs />
                </div>
                <div className="h-80 w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;