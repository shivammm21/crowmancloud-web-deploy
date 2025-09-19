"use client";
import Link from 'next/link';
import type { Route } from 'next';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [canPortal, setCanPortal] = useState(false);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const isTool = pathname?.startsWith('/crowmantool');
  const { isAuthenticated, user, signOut } = useAuth();
  const avatarText = useMemo(() => {
    const n = user?.name || user?.email || '';
    return n ? n.charAt(0).toUpperCase() : '';
  }, [user]);

  useEffect(() => {
    if (!profileOpen) return;
    const onClick = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    window.addEventListener('mousedown', onClick);
    return () => window.removeEventListener('mousedown', onClick);
  }, [profileOpen]);

  useEffect(() => {
    // Enable portals only on client to avoid SSR hydration issues
    setCanPortal(true);
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="crowmancloud" className="h-6 w-6" />
          <span className="font-semibold tracking-tight">CrowmanCloud</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <Link href={"/features" as Route} className="hover:text-white">Features</Link>
          <Link href={"/showcase" as Route} className="hover:text-white">Showcase</Link>
          <Link href={"/docs" as Route} className="hover:text-white">Docs</Link>
          <Link href={"/about" as Route} className="hover:text-white">About</Link>
          <Link href={"/community" as const} className="hover:text-white">Community</Link>
          <Link href={"/pricing" as const} className="hover:text-white">Pricing</Link>
          <Link href={"/faq" as const} className="hover:text-white">FAQ</Link>
          <Link href={"/contact" as Route} className="hover:text-white">Contact</Link>
        </nav>
        <div className="flex items-center gap-2 relative">
          {!isAuthenticated ? (
            <>
              <Link href={"/signin" as Route} className="hidden sm:inline-flex rounded-md px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20 transition">Sign in</Link>
              <Link href={"/signup" as Route} className="hidden sm:inline-flex rounded-md px-3 py-1.5 text-sm bg-brand-500 hover:bg-brand-400 text-white transition">Get started</Link>
            </>
          ) : (
            <div ref={profileRef} className="relative">
              <button onClick={() => setProfileOpen((v)=>!v)} aria-label="Profile" title={user?.email || user?.name || 'Profile'} className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/10 hover:bg-white/20">
                {avatarText ? <span className="text-xs font-medium">{avatarText}</span> : <User className="h-4 w-4" />}
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md border border-white/10 bg-neutral-900 shadow-lg py-1 text-sm">
                  <Link href={"/profile" as Route} className="block w-full text-left px-3 py-2 hover:bg-white/10">Profile</Link>
                  <button onClick={() => { setProfileOpen(false); setConfirmOpen(true); }} className="block w-full text-left px-3 py-2 hover:bg-white/10 text-red-400 hover:text-red-300">Logout</button>
                </div>
              )}
            </div>
          )}
          <button aria-label="Open menu" className="md:hidden inline-flex rounded-md p-2 hover:bg-white/10" onClick={() => setOpen((v)=>!v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-neutral-950/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid gap-3 text-sm">
            <Link onClick={()=>setOpen(false)} href={"/features" as Route} className="hover:text-white">Features</Link>
            <Link onClick={()=>setOpen(false)} href={"/showcase" as Route} className="hover:text-white">Showcase</Link>
            <Link onClick={()=>setOpen(false)} href={"/about" as Route} className="hover:text-white">About</Link>
            <Link onClick={()=>setOpen(false)} href={"/docs" as Route} className="hover:text-white">Docs</Link>
            <Link onClick={()=>setOpen(false)} href={"/community" as const} className="hover:text-white">Community</Link>
            <Link onClick={()=>setOpen(false)} href={"/pricing" as const} className="hover:text-white">Pricing</Link>
            <Link onClick={()=>setOpen(false)} href={"/faq" as const} className="hover:text-white">FAQ</Link>
            <Link onClick={()=>setOpen(false)} href={"/contact" as Route} className="hover:text-white">Contact</Link>
            {!isAuthenticated ? (
              <div className="pt-2 flex items-center gap-2">
                <Link onClick={()=>setOpen(false)} href={"/signin" as Route} className="inline-flex rounded-md px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20 transition">Sign in</Link>
                <Link onClick={()=>setOpen(false)} href={"/signup" as Route} className="inline-flex rounded-md px-3 py-1.5 text-sm bg-brand-500 hover:bg-brand-400 text-white transition">Get started</Link>
              </div>
            ) : (
              <div className="pt-2 flex items-center">
                <button onClick={()=>setOpen(false)} aria-label="Profile" className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/10 hover:bg-white/20 mr-2">
                  {avatarText ? <span className="text-xs font-medium">{avatarText}</span> : <User className="h-4 w-4" />}
                </button>
                <button onClick={() => { setConfirmOpen(true); setOpen(false); }} className="inline-flex rounded-md px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20 text-red-400 hover:text-red-300 transition">Sign out</button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Logout confirm modal (portal to body to avoid header stacking/positioning) */}
      {confirmOpen && canPortal && createPortal(
        <div className="fixed inset-0 z-[80]">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setConfirmOpen(false)} />
          <div
            role="dialog"
            aria-modal="true"
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[81] w-full max-w-sm rounded-lg border border-white/10 bg-neutral-900 p-5 shadow-2xl"
          >
            <h3 className="text-lg font-medium">Sign out?</h3>
            <p className="mt-1 text-sm text-neutral-300">Are you sure you want to log out?</p>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setConfirmOpen(false)} className="rounded-md px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20">Cancel</button>
              <button onClick={() => { setConfirmOpen(false); signOut(); }} className="rounded-md px-3 py-1.5 text-sm bg-red-500 hover:bg-red-400 text-white">Logout</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
