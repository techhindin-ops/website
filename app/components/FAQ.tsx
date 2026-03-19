"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { siteData } from "../data/siteData";

export default function FAQ() {
  const { faq } = siteData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/40 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(99,102,241,0.06),transparent_60%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 mb-6">
            <HelpCircle className="h-4 w-4 text-indigo-500" />
            <span className="text-sm font-bold text-indigo-600">Got Questions?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            {faq.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {faq.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faq.items.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-indigo-200 bg-indigo-50/60 shadow-lg shadow-indigo-100"
                  : "border-gray-200/70 bg-white hover:border-indigo-200 hover:shadow-md"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span
                  className={`font-semibold text-base sm:text-lg transition-colors ${
                    openIndex === index ? "text-indigo-700" : "text-slate-800"
                  }`}
                >
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-indigo-500"
                      : "text-slate-400"
                  }`}
                />
              </button>

              {/* Answer — animated height */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-indigo-200/60 mb-4" />
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-teal-50 to-indigo-50 border border-indigo-200/60 rounded-3xl px-8 py-6">
            <div className="text-left">
              <p className="font-bold text-slate-800 text-lg">Still have questions?</p>
              <p className="text-gray-500 text-sm">Our team is happy to help. Reach out anytime.</p>
            </div>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
