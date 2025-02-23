"use client";

import {ReactNode} from "react";
import {useParams, usePathname} from "next/navigation";
import {PreparatNavbar} from "@/modules/preparat/ui/components/preparat-navbar";

interface PreparatLayoutProps {
    children: ReactNode;
}

export const PreparatLayout = ({ children }: PreparatLayoutProps) => {
    const params = useParams();
    const pathname = usePathname();
    const preparatId = params.preparatId as string;
    return (
        <div className="w-full">
            <PreparatNavbar preparatId={preparatId} pathname={pathname}/>
            <div className="flex min-h-screen pt-[4rem]">
                <main className="flex-1 flex items-center justify-center">
                    {children}
                </main>
            </div>
        </div>
    );
}