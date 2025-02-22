import {ReactNode} from "react";
import {PreparatLayout} from "@/modules/preparat/ui/layouts/preparat-layout";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <PreparatLayout>
                {children}
            </PreparatLayout>
        </div>
    );
}

export default Layout;