"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBG from "@/components/AnimatedBG";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const isSubmittingRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmittingRef.current || loading) return;
    isSubmittingRef.current = true;
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        let friendly = res.status === 409 ? "Email already registered" : `Sign up failed (${res.status})`;
        try {
          const errBody = await res.json();
          if (typeof errBody === "string") friendly = errBody;
          else if (errBody?.detail) friendly = String(errBody.detail);
          else if (errBody?.message) friendly = String(errBody.message);
          else if (errBody?.error) friendly = String(errBody.error);
          else if (Array.isArray(errBody?.errors) && errBody.errors.length) {
            const first = errBody.errors[0];
            friendly = first?.msg || first?.message || JSON.stringify(first);
          }
        } catch (_) {
          const text = await res.text();
          if (text) friendly = text;
        }
        throw new Error(friendly);
      }

      const data = await res.json().catch(() => ({}));
      setSuccess("Account created successfully.");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setError(err?.message || "Failed to create account");
    } finally {
      setLoading(false);
      isSubmittingRef.current = false;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="relative isolate flex-1 py-16 sm:py-24 overflow-hidden">
        <AnimatedBG />
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-semibold tracking-tight"
            >
              Create your account
            </motion.h1>
            <p className="mt-3 text-neutral-300 text-sm">
              Join CrowmanCloud to analyze readiness, automate infra, and estimate costs—locally.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm text-neutral-300">Full name</label>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md bg-neutral-900 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500"
                placeholder="Jane Doe"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm text-neutral-300">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md bg-neutral-900 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500"
                placeholder="you@example.com"
                required
              />
            </div>
            {/* Password */}
            <div>
              <label className="block text-sm text-neutral-300">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-md bg-neutral-900 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm" role="alert" aria-live="polite">{error}</p>
            )}
            {success && (
              <p className="text-green-400 text-sm">{success}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-brand-500 hover:bg-brand-400 disabled:opacity-60 disabled:cursor-not-allowed text-white transition"
            >
              {loading ? "Creating..." : "Create account"}
            </button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
              <div className="relative flex justify-center"><span className="bg-neutral-950 px-3 text-xs text-neutral-400">or</span></div>
            </div>

            {/* OAuth */}
            <a href="#" className="flex items-center justify-center gap-2 rounded-md px-4 py-2 bg-white/10 hover:bg-white/20 transition">
              <Github className="h-4 w-4" />
              <span>Sign up with GitHub</span>
            </a>
            <a href="#" className="flex items-center justify-center gap-2 rounded-md px-4 py-2 bg-white/10 hover:bg-white/20 transition">
              <img src="/logos/tech/google.svg" alt="Google" className="h-4 w-4" />
              <span>Sign up with Google</span>
            </a>
          </form>

          <div className="mt-6 text-center text-sm text-neutral-400">
            Already have an account? <Link href="/signin" className="underline underline-offset-4">Sign in</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
