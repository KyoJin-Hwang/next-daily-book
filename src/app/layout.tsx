import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Book from '@/components/Common/Book/Book';
import '@styles/globals.css';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

export const metadata: Metadata = {
  title: { template: '오늘의 책님 | %s', default: '오늘의 책님' },
  description:
    '“오늘의 책님”은 당신의 궁금증을 해결해 줄 재미있는 랜덤 답변 사이트입니다!',
  icons: {
    icon: 'images/favicon.ico',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Book>{children}</Book>
        </ThemeProvider>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  );
}
