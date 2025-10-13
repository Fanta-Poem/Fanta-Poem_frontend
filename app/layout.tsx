import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "./providers/query-provider";
import AuthSessionProvider from "./providers/session-provider";
import EmotionRegistry from "./lib/emotion";

export const metadata: Metadata = {
  title: "판타시",
  description: "A Reading Platform to Chronicle Books with Poetry",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <EmotionRegistry>
          <AuthSessionProvider>
            <QueryProvider>{children}</QueryProvider>
          </AuthSessionProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
