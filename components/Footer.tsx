'use client';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        href="https://falak-gala.vercel.app/"
        target="_blank"
        rel="noreferrer nofollow noreferrer noopener external"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500">
        <span className="pr-2">Made with 💖 by</span>
        <span className="pl-1 font-medium text-slate-200">Falak Gala</span>
      </Link>
    </div>
  );
}

export default Footer;
