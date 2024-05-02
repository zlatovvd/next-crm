"use client";

import { ReactNode } from 'react';
import ServerComponentCopy from './server-component copy';

export interface ClientComponentProps {
  children?: ReactNode;
}

export default function ClientComponent({ children }: ClientComponentProps) {
    
    console.log("Client Component");
  
    return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  );
}
