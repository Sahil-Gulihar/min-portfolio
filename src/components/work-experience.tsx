"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;
const DEFAULT_VISIBLE = 4;

export function WorkExperience() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? DATA.work : DATA.work.slice(0, DEFAULT_VISIBLE);

  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <h2 className="text-xl font-bold">Work Experience</h2>
      </BlurFade>
      {visible.map((work, id) => (
        <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
          <ResumeCard
            key={work.company}
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={work.title}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? "Present"}`}
            description={work.description}
          />
        </BlurFade>
      ))}
      {DATA.work.length > DEFAULT_VISIBLE && (
        <button
          onClick={() => setShowAll((v) => !v)}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors self-start"
        >
          {showAll
            ? "Show less"
            : `Show ${DATA.work.length - DEFAULT_VISIBLE} more`}
        </button>
      )}
    </div>
  );
}
