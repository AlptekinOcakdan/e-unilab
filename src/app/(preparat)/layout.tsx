"use client";

import {ReactNode} from "react";
import {PreparatLayout} from "@/modules/preparat/ui/layouts/preparat-layout";
import {usePathname} from "next/navigation";
import {SidebarProvider} from "@/components/ui/sidebar";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    const pathname = usePathname();

    const isInformedPage = pathname.includes("/informed");

    return (
        <>
            {isInformedPage ? (
                <SidebarProvider>
                    <PreparatLayout>{children}</PreparatLayout>
                </SidebarProvider>
            ) : (
                <PreparatLayout>{children}</PreparatLayout>
            )}
        </>
    );
}

export default Layout;