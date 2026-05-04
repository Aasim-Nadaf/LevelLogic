import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "LevelLogic | Master Your Logic",
  description: "The premium assessment platform designed to sharpen cognitive abilities and elevate professional performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans selection:bg-surface-strong">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}

