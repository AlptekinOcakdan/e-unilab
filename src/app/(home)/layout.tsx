import {ReactNode} from "react";
import {HomeLayout} from "@/modules/home/ui/layouts/home-layout";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <HomeLayout>
                {children}
            </HomeLayout>
        </div>
    );
}

export default Layout;