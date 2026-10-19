import "./globals.css";
import { preload } from "react-dom";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: {
    default: "Hitesh Thakur — Full-Stack Developer & Designer",
    template: "%s · Hitesh Thakur",
  },
  description:
    "Portfolio of Hitesh Thakur, full-stack developer at Xansr Media who also designs: web apps, UI/UX case studies, games and 2D art.",
  openGraph: {
    title: "Hitesh Thakur — Full-Stack Developer & Designer",
    description: "Web apps, UI/UX case studies, games and 2D art by Hitesh Thakur.",
    type: "website",
  },
  icons: {
    icon: "/BottomLogo.svg",
    shortcut: "/BottomLogo.svg",
    apple: "/BottomLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Body font: fetch it with the HTML instead of after CSS parsing, so it is usually ready before
  // first paint and text doesn't reflow (the late swap caused ~0.1 CLS on /work on mobile)
  preload("/fonts/RedditSans.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });

  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
