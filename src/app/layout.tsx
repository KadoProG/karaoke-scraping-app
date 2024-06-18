import type { Metadata } from 'next';
import '@/app/globals.scss';
import { CommonLayout } from '@/components/common/layout/CommonLayout';

export const metadata: Metadata = {
  title: 'DAM Karaoke Converter',
  description: 'DAMのカラオケデータを変換するサイトです',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => (
  <html lang="ja">
    <body>
      <CommonLayout>{props.children}</CommonLayout>
    </body>
  </html>
);

export default RootLayout;
