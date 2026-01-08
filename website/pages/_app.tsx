import type { AppProps } from 'next/app';
import { Geist, Geist_Mono } from "next/font/google";
import { DocsLayout } from '../layout/DocsLayout';
import { navigationConfig } from '../nav.config';
import "../globals.css";
import '../../packages/ui/dist/styles.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <DocsLayout navigationConfig={navigationConfig}>
        <Component {...pageProps} />
      </DocsLayout>
    </div>
  );
}
