"use client"
import i18n from "./i18n";
import React from "react";
import { UserProvider } from "./userContext";
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <UserProvider>{children}</UserProvider>
    );
}