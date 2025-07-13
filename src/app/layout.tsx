import { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Provider from "@/lib/provider/Provider";
import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata = {
  title: "Abul Ala Jobayar | Full-Stack Developer",
  description: "My professional portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en" className={sora.className}>
        <body>
          <>
            <AppRouterCacheProvider>
              <Toaster position="top-center" />
              {children}
            </AppRouterCacheProvider>
          </>
        </body>
      </html>
    </Provider>
  );
}
