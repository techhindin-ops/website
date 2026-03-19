"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Play, Sparkles, TrendingDown, TrendingUp } from "lucide-react";
import { siteData } from "../data/siteData";

const Hero3DScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
});

export default function Hero() {
  const { hero } = siteData;
  const { headline, subheadline, ctaButtons, featureHighlights, kpis, pipelinePreview, badges, energyHighlights } = hero;
  const [isDesktop, setIsDesktop] = useState(false);
  const [afterPaint, setAfterPaint] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      setAfterPaint(true);
    });
    return () => window.cancelAnimationFrame(raf);
  }, []);

  const handleCTAClick = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-cinematic-bg">
      {isDesktop && afterPaint ? <Hero3DScene /> : <div className="absolute inset-0 hero-color-mesh-fallback z-[1]" />}
      <div className="absolute inset-0 hero-horizon-glow z-[1]" />
      <div className="absolute inset-0 hero-color-mesh z-[1]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px] z-[1]" />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(7,15,24,0.88)_0%,rgba(7,15,24,0.70)_34%,rgba(7,15,24,0.24)_62%,rgba(7,15,24,0.50)_100%)]" />
      <div className="absolute inset-0 z-[2] hero-panel-fog" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00823b]/18 border border-[#6be09e]/30">
              <Sparkles className="h-4 w-4 text-[#00823b]" />
              <span className="text-sm font-semibold text-[#78e2ac]">{hero.banner.text}</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                <span className="block">{headline.prefix}</span>
                <span className="block">
                  <span className="gradient-text">{headline.crm}</span> {headline.middle}
                </span>
                <span className="block">{headline.industry} {headline.suffix}</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200/90 leading-relaxed max-w-xl">
                {subheadline}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {featureHighlights.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-100 bg-white/10 border border-white/15 shadow-sm backdrop-blur-sm"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                onClick={handleCTAClick}
                className="group px-7 py-3.5 bg-[#00823b] hover:bg-[#00662e] text-white rounded-xl font-semibold text-base transition-colors shadow-[0_10px_30px_-15px_rgba(0,130,59,0.6)]"
              >
                <span className="flex items-center justify-center gap-2">
                  {ctaButtons.primary}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={handleCTAClick}
                className="px-7 py-3.5 bg-white/10 border border-white/35 text-white rounded-xl font-semibold text-base hover:border-white/55 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Play className="h-4 w-4" />
                {ctaButtons.secondary}
              </button>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-white/10 border border-white/20 text-slate-100 backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl p-5 lg:p-6 border border-white/25 bg-[#0f1d2d]/72 backdrop-blur-md shadow-[0_30px_55px_-25px_rgba(0,0,0,0.72)]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-100">Operations Snapshot</h3>
                <span className="text-xs text-[#00823b] font-semibold">Last 7 days</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                {kpis.map((kpi) => {
                  const TrendIcon = kpi.trend === "down" ? TrendingDown : TrendingUp;
                  const trendColor =
                    kpi.trend === "down" ? "text-amber-600" : kpi.trend === "neutral" ? "text-slate-500" : "text-[#00823b]";
                  const statusBg =
                    kpi.status === "amber"
                      ? "from-amber-50 to-amber-100/70 border-amber-200/70"
                      : kpi.status === "blue"
                      ? "from-blue-50 to-slate-50 border-blue-200/60"
                      : kpi.status === "teal"
                      ? "from-emerald-50 to-cyan-50 border-emerald-200/70"
                      : "from-green-50 to-emerald-50 border-green-200/70";
                  return (
                    <div key={kpi.label} className={`rounded-xl border bg-gradient-to-br p-3 ${statusBg} shadow-[0_8px_24px_-20px_rgba(0,0,0,0.8)]`}>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[11px] text-gray-600 font-medium">{kpi.label}</p>
                        <TrendIcon className={`h-3.5 w-3.5 ${trendColor}`} />
                      </div>
                      <p className="text-xl font-bold text-slate-900 leading-none">{kpi.value}</p>
                      <p className="text-[11px] text-gray-500 mt-1">{kpi.helper}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {energyHighlights.map((item) => {
                  const toneClass =
                    item.tone === "amber"
                      ? "bg-amber-50 text-amber-700 border-amber-200/70"
                      : item.tone === "blue"
                      ? "bg-blue-50 text-blue-700 border-blue-200/70"
                      : "bg-green-50 text-green-700 border-green-200/70";
                  return (
                    <div key={item.label} className={`rounded-lg border px-2.5 py-2 ${toneClass}`}>
                      <p className="text-[10px] font-semibold">{item.label}</p>
                      <p className="text-sm font-bold">{item.value}</p>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-xl border border-white/20 bg-[#13253a]/70 p-3">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-slate-100">Stage Pipeline</p>
                  <p className="text-[11px] text-slate-300/70">Static preview</p>
                </div>
                <div className="space-y-2">
                  {pipelinePreview.map((stage) => {
                    const width = Math.max(8, Math.min(100, stage.value));
                    const barTone =
                      stage.tone === "warning" ? "bg-amber-500" : stage.tone === "info" ? "bg-[#1b365d]" : "bg-[#00823b]";
                    return (
                      <div key={stage.stage}>
                        <div className="flex justify-between text-[11px] text-slate-200/85 mb-1">
                          <span>{stage.stage}</span>
                          <span>{stage.value}</span>
                        </div>
                        <div className="h-1.5 bg-slate-700/65 rounded-full overflow-hidden">
                          <div className={`h-full ${barTone} rounded-full`} style={{ width: `${width}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
