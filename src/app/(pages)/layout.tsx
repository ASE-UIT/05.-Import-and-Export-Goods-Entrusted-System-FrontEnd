import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <div className="flex flex-1 flex-row mt-16">
          <Sidebar />
          <div className="ml-60 overflow-x-hidden flex flex-1 flex-col items-center">
            {children}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
