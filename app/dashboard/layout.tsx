'use client'

import { FC, useState } from 'react';

import '@/app/ui/global.css'
// import SideNav from '@/app/ui/dashboard/sidenav';
import Sidebar from '@/app/ui/dashboard/sidbar';
import RootLayoutProps from '@/app/lib/props/TypeProps';
import SideNav from '../ui/dashboard/sidenav';

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'>
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
      <SideNav/>
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{props.children}</div>
    </div>
  );
}

export default RootLayout
