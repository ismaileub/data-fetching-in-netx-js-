"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
    const pathName = usePathname();

    if (!pathName.includes("dashboard")) {
        return (
            <nav className='flex justify-center'>
                <ul className='flex justify-center space-x-4'>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/posts"> <li>Posts</li></Link>
                    <Link href="/meals"><li>Meals</li></Link>
                </ul>
            </nav>
        );
    } else {
        <></>
    }
}


export default NavBar;