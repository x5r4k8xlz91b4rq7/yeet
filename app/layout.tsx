import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Ai Thumbs Solutions - Advanced AI Technology Services',
  description: 'Transform your business with cutting-edge AI solutions. Expert consulting, custom development, and enterprise AI integration services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>
              <Suspense fallback={<div>Loading...</div>}>
                {children}
              </Suspense>
            </main>
            <Footer />
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}