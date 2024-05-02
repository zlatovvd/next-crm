import { ReactNode } from 'react';

export interface ServerComponentProps {
  children?: ReactNode;
}

export default function ServerComponentCopy({ children }: ServerComponentProps) {
    
    console.log("Server Component Copy");
  
    return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  );
}
