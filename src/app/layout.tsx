import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { MenuContextProvider } from '@/context/menuContext';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'url-shortening-api-landing-page',
  description: 'Using api to short urls',
  icons: '/vercel.ico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth ease-in-out">
      <MenuContextProvider>
        <body className={poppins.className}>{children}</body>
      </MenuContextProvider>
    </html>
  );
}
