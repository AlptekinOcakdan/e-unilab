import {ReactNode} from "react";
import {HomeNavbar} from "@/modules/home/ui/components/home-navbar";

interface HomeLayoutProps {
    children: ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <div className="w-full">
            <HomeNavbar/>
            <div className="flex min-h-screen pt-[4rem]">
                <main className="flex-1 flex items-center justify-center">
                    {children}
                </main>
            </div>
        </div>
    );
}