import {ReactNode} from "react";
import {PreparatInformedLayout} from "@/modules/preparat/ui/layouts/preparat-informed-layout";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div>
            <PreparatInformedLayout>
                {children}
            </PreparatInformedLayout>
        </div>
    );
}

export default Layout;