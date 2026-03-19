"use client";

import { Check, X } from "lucide-react";
import { siteData } from "../data/siteData";

export default function WhyTechHind() {
  const { whyTechHind } = siteData;

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(20,184,166,0.06),transparent_60%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 mb-6">
            <span className="text-sm font-bold text-teal-600">
              🏆 The techHind Advantage
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            {whyTechHind.title.split("vs.")[0]}
            <span className="gradient-text">vs.</span>
            {whyTechHind.title.split("vs.")[1]}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {whyTechHind.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-1" />
            <div className="col-span-1 text-center">
              <div className="bg-gradient-to-br from-teal-500 to-indigo-600 text-white rounded-2xl py-4 px-6 shadow-lg">
                <div className="text-2xl mb-1">✓</div>
                <div className="font-bold text-lg">techHind</div>
                <div className="text-teal-100 text-xs">Solar-specific CRM</div>
              </div>
            </div>
            <div className="col-span-1 text-center">
              <div className="bg-slate-100 border border-slate-200 rounded-2xl py-4 px-6">
                <div className="text-2xl mb-1">⚠️</div>
                <div className="font-bold text-lg text-slate-600">Generic CRM</div>
                <div className="text-slate-400 text-xs">Not solar-specific</div>
              </div>
            </div>
          </div>

          {/* Feature rows */}
          <div className="space-y-2">
            {whyTechHind.features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 px-6 py-4 rounded-2xl transition-all duration-200 hover:bg-teal-50/60 ${
                  index % 2 === 0 ? "bg-white border border-gray-100" : "bg-slate-50/60"
                }`}
              >
                <div className="col-span-1 flex items-center">
                  <span className="text-slate-700 font-medium text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-teal-600 stroke-[2.5]" />
                  </div>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                    <X className="h-5 w-5 text-red-400 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Ready to switch to a CRM built for your solar business?
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-10 py-4 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-600 text-white rounded-2xl hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 font-bold text-lg transform hover:scale-105"
            >
              Get Started Free →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
