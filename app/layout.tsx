import { Nunito } from 'next/font/google';

import './globals.css';
import { Providers } from '@/shared/components/shared/providers';
import {Metadata} from "next";

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'NextJS Pizza App',
  description: 'NextJS Pizza App for spicy lover!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
