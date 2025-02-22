import {ReactNode} from "react";
import {PreparatNavbar} from "@/modules/preparat/components/preparat-navbar";

interface PreparatLayoutProps {
    children: ReactNode;
}

export const PreparatLayout = ({ children }: PreparatLayoutProps) => {
    return (
        <div className="w-full">
            <PreparatNavbar/>
            <div className="flex min-h-screen pt-[4rem]">
                <main className="flex-1 flex items-center justify-center">
                    {children}
                </main>
            </div>
        </div>
    );
}