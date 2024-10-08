import type { Metadata } from 'next';

import { Header } from '@/shared/components/shared/header';

export const metadata: Metadata = {
  title: 'Next Fullstack',
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main className="min-h-screen">
        <Header />
        {children}
        {modal}
      </main>
    </html>
  );
}
