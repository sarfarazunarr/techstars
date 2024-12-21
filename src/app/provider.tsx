"use client";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export function Providers({ children }:
    { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
    );
}