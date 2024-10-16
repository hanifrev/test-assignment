import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '@/styles/globals.css';
import StoreProvider from '@/lib/Provider/StoreProvider';
import LayoutClient from '@/common/components/templates/LayoutClient';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'frontend test faishal hanif',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={poppins.className}>
          <LayoutClient>{children}</LayoutClient>
        </body>
      </StoreProvider>
    </html>
  );
}
