import { ReactNode } from 'react';
import Sidebar from '../components/sidebar';

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </div>
  );
}
