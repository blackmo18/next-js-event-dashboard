import { inter } from '@/app/ui/fonts';
import { FC } from 'react';

import '@/app/ui/global.css';
import SideNav from '@/app/ui/dashboard/sidenav';
import RootLayoutProps from './lib/props/TypeProps';

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
};

export default RootLayout;
