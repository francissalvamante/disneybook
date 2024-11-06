import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const latoSans = localFont({
  src: [
    {
      path: './fonts/Lato-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: './fonts/Lato-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/Lato-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Lato-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: './fonts/Lato-Light.ttf',
      weight: '300',
      style: 'normal'
    }
  ],
  variable: '--font-lato-sans'
});

export const metadata: Metadata = {
  title: "DisneyBook",
  description: "A slambook for your favorite Disney Characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${latoSans.variable} flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
