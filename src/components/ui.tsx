import type { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)} {...props} />;
}

export function Button({ className, variant = "primary", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" }) {
  return <button className={cn("inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", variant === "primary" && "bg-slate-950 text-white hover:bg-slate-800", variant === "secondary" && "border border-slate-300 bg-white text-slate-900 hover:border-slate-500", variant === "ghost" && "text-slate-700 hover:bg-slate-100", className)} {...props} />;
}

export function LinkButton({ href, children, variant = "primary", className }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost"; className?: string }) {
  return <Link href={href} className={cn("inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2", variant === "primary" && "bg-slate-950 text-white hover:bg-slate-800", variant === "secondary" && "border border-slate-300 bg-white text-slate-900 hover:border-slate-500", variant === "ghost" && "text-slate-700 hover:bg-slate-100", className)}>{children}</Link>;
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_-35px_rgba(15,23,42,0.35)]", className)} {...props} />;
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-800", className)}>{children}</span>;
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
    {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-sky-700">{eyebrow}</p> : null}
    <h2 className="font-display text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">{title}</h2>
    {description ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p> : null}
  </div>;
}

export function FieldLabel({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("mb-2 block text-sm font-semibold text-slate-800", className)} {...props} />;
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-4 focus:ring-sky-100", className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn("min-h-28 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-4 focus:ring-sky-100", className)} {...props} />;
}

export function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn("h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100", className)} {...props}>{children}</select>;
}
