import localFont from "next/font/local";
import "./globals.css";
import { FileProvider } from "./toolkit/fileprovider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ayush's Portfolio",
  description: "Generated by create next app",
  icons: {
    icon: "/vscode.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FileProvider>{children}</FileProvider>
        
      </body>
    </html>
  );
}
