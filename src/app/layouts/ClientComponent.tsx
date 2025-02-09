'use client'
import { ReactNode } from "react";
import { useParams,  } from "next/navigation";

export function ClientComponent({children}: {children: ReactNode}) {
    
    const { id } = useParams() as {id?: string} 
    
    return <>{!id ? children : null}</>
}