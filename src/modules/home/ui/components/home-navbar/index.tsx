import Link from "next/link";
import Image from "next/image";
import {AuthButton} from "@/modules/auth/ui/components/auth-button";

export const HomeNavbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50 border-b shadow-md">
            <div className="flex items-center justify-between gap-4 w-full">
                <div className="flex items-center flex-shrink-0">
                    <Link href="/">
                        <div className="p-4 flex items-center gap-1">
                            <Image src="/logo.png" alt="logo" width={45} height={30}/>
                            <p className="text-xl font-semibold tracking-tight">E-Unilab</p>
                        </div>
                    </Link>
                </div>
                <div className="flex-shrink-0 items-center flex gap-4">
                    <AuthButton/>
                </div>
            </div>
        </nav>
    )
}