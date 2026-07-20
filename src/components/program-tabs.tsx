"use client";
import { useState } from "react";
import { Clock3, MapPin } from "lucide-react";
import { programDays } from "@/data/site";
import { Badge, Card } from "@/components/ui";
import { cn } from "@/lib/cn";

export function ProgramTabs() {
  const [active, setActive] = useState(programDays[0].id);
  const day = programDays.find((d) => d.id === active) ?? programDays[0];
  return <div>
    <div className="mb-8 inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">{programDays.map((item) => <button key={item.id} onClick={() => setActive(item.id)} className={cn("rounded-full px-5 py-3 text-sm font-semibold transition", active === item.id ? "bg-slate-950 text-white" : "text-slate-600 hover:text-slate-950")}>{item.label}</button>)}</div>
    <div className="mb-5"><p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">{day.eyebrow}</p></div>
    <Card className="overflow-hidden">
      <div className="divide-y divide-slate-200">{day.items.map((item, index) => <div key={`${item.time}-${index}`} className="grid gap-4 p-5 sm:grid-cols-[90px_1fr_auto] sm:items-start sm:p-7">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold text-slate-950"><Clock3 size={16} className="text-sky-700" />{item.time}</div>
        <div><div className="mb-2"><Badge className={item.type === "Pause" ? "border-slate-200 bg-slate-50 text-slate-600" : ""}>{item.type}</Badge></div><h3 className="text-base font-semibold text-slate-950 sm:text-lg">{item.title}</h3>{item.speakers ? <p className="mt-2 text-sm leading-6 text-slate-600">{item.speakers}</p> : null}</div>
        {item.room ? <div className="flex items-center gap-2 text-sm text-slate-500 sm:justify-end"><MapPin size={15} />{item.room}</div> : null}
      </div>)}</div>
    </Card>
  </div>;
}
