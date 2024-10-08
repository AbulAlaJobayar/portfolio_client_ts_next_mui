import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Provider from "@/lib/provider/Provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "portfolio || jobayar",
  description: "jobayar portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
    <html lang="en">
      <body>
      <>
        <AppRouterCacheProvider>
          <Toaster position="top-center"/>
          {children}
        </AppRouterCacheProvider>
        </>
      </body>
    </html>
    </Provider>
  );
}
