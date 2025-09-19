"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBG from "@/components/AnimatedBG";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { isAuthenticated, user, signOut, ready } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (ready && !isAuthenticated) {
      router.push("/signin");
    }
  }, [isAuthenticated, ready, router]);

  const avatarText = (user?.name || user?.email || "").slice(0, 1).toUpperCase();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="relative isolate flex-1 py-16 sm:py-24 overflow-hidden">
        <AnimatedBG />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {!ready ? (
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 animate-pulse">
              <div className="h-6 w-32 bg-white/10 rounded" />
              <div className="mt-3 h-4 w-56 bg-white/10 rounded" />
            </div>
          ) : (
          <>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight"
            >
              Profile
            </motion.h1>
            <p className="mt-3 text-neutral-300">Manage your account details</p>
          </div>

          <div className="mt-10 grid gap-6">
            <section className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center rounded-full h-12 w-12 bg-white/10">
                  {avatarText ? (
                    <span className="text-sm font-medium">{avatarText}</span>
                  ) : (
                    <span className="text-sm">👤</span>
                  )}
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Signed in as</p>
                  <p className="font-medium">{user?.name || user?.email || "User"}</p>
                  {user?.email && <p className="text-sm text-neutral-300">{user.email}</p>}
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold">Security</h2>
              <p className="mt-2 text-sm text-neutral-300">Update your password or sign out of your account.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-md px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20">Change password</Link>
                <button onClick={signOut} className="rounded-md px-3 py-1.5 text-sm bg-red-500 hover:bg-red-400 text-white">Sign out</button>
              </div>
            </section>
          </div>
          </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
