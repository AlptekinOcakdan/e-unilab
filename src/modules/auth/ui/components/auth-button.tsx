"use client";

import React from 'react';
import {Button} from "@/components/ui/button";
import { UserCircleIcon} from "lucide-react";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

export const AuthButton = () => {
    return (
        <>
            <SignedIn>
                <UserButton>
                    <UserButton.MenuItems>
                        {/* TODO:Add User Profile Button */}
                        {/*<UserButton.Link href="/studio" label="Studio" labelIcon={<ClapperboardIcon className="size-4"/>}/>*/}
                        <UserButton.Action label="manageAccount"/>
                    </UserButton.MenuItems>
                </UserButton>
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">
                    <Button variant="outline" className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500
                    border-blue-500/20 rounded-full shadow-none">
                        <UserCircleIcon/>
                        Sign in
                    </Button>
                </SignInButton>
            </SignedOut>
        </>
    );
};