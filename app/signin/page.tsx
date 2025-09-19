"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBG from "@/components/AnimatedBG";
import { motion } from "framer-motion";
import { Github, Mail, ShieldCheck } from "lucide-react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [showEmail, setShowEmail] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isSubmittingRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmittingRef.current || loading) return; // guard against duplicate submits
    isSubmittingRef.current = true;
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        // Try to parse JSON error and extract a friendly message
        let friendly = res.status === 400 || res.status === 401 ? "Invalid email or password" : `Login failed (${res.status})`;
        try {
          const errBody = await res.json();
          // Common API error shapes: {detail}, {message}, {error}, {errors: [{msg}]}
          if (typeof errBody === "string") friendly = errBody;
          else if (errBody?.detail) friendly = String(errBody.detail);
          else if (errBody?.message) friendly = String(errBody.message);
          else if (errBody?.error) friendly = String(errBody.error);
          else if (Array.isArray(errBody?.errors) && errBody.errors.length) {
            const first = errBody.errors[0];
            friendly = first?.msg || first?.message || JSON.stringify(first);
          }
        } catch (_) {
          // Fallback to text if not JSON
          const text = await res.text();
          if (text) friendly = text;
        }
        throw new Error(friendly);
      }

      const data: { access_token?: string; token_type?: string } = await res.json();
      if (data?.access_token) {
        // store token for subsequent requests
        if (typeof window !== "undefined") {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("token_type", data.token_type || "bearer");
        }
        router.push("/crowmantool");
      } else {
        throw new Error("No access token returned");
      }
    } catch (err: any) {
      const msg = err?.message || "Unable to sign in";
      setError(msg);
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
              Sign in
            </motion.h1>
            <p className="mt-3 text-neutral-300 text-sm">
              Continue with one of the providers below. We never store your code; authentication is used only for your account.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 space-y-3">
            {/* GitHub */}
            <a
              href="#" // replace with /api/auth/signin/github when wiring NextAuth
              className="flex items-center justify-center gap-2 rounded-md px-4 py-2 bg-white/10 hover:bg-white/20 transition"
            >
              <Github className="h-4 w-4" />
              <span>Continue with GitHub</span>
            </a>

            {/* Google */}
            <a
              href="#" // replace with /api/auth/signin/google when wiring NextAuth
              className="flex items-center justify-center gap-2 rounded-md px-4 py-2 bg-white/10 hover:bg-white/20 transition"
            >
              <img src="/logos/tech/google.svg" alt="Google" className="h-4 w-4" />
              <span>Continue with Google</span>
            </a>

            {/* Email */}
            {!showEmail ? (
              <button
                onClick={() => setShowEmail(true)}
                className="w-full flex items-center justify-center gap-2 rounded-md px-4 py-2 bg-white/10 hover:bg-white/20 transition"
              >
                <Mail className="h-4 w-4" />
                <span>Continue with email</span>
              </button>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-md border border-white/10 bg-neutral-900 p-4 space-y-3">
                <div>
                  <label className="block text-xs text-neutral-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="mt-1 w-full rounded-md bg-neutral-950 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="mt-1 w-full rounded-md bg-neutral-950 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-xs" role="alert">{error}</p>
                )}
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-brand-500 hover:bg-brand-400 disabled:opacity-60 disabled:cursor-not-allowed text-white transition ${loading ? 'pointer-events-none' : ''}`}
                  >
                    {loading ? "Signing in..." : "Sign in"}
                  </button>
                  <button type="button" onClick={() => setShowEmail(false)} className="text-xs text-neutral-400 hover:text-neutral-200">Use providers instead</button>
                </div>
              </form>
            )}

            <p className="mt-4 text-xs text-neutral-400 flex items-center justify-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span>By signing in, you agree to our Terms and Privacy Policy.</span>
            </p>
          </div>

          <div className="mt-6 text-center text-sm text-neutral-400">
            Need an account? <a href="/signup" className="underline underline-offset-4">Create one</a>
          </div>

          <div className="mt-8 text-xs text-neutral-500">
            <p>
              To enable real OAuth in production, integrate NextAuth (or your provider of choice) and set the GitHub and Google client credentials. I can wire this up when you are ready.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
