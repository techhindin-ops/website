"use client";

import { siteData } from "../data/siteData";

export default function SocialProof() {
  const { socialProof } = siteData;

  return (
    <section className="py-16 bg-white border-y border-gray-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {socialProof.title}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
          {socialProof.logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-20 glass rounded-xl border border-gray-200/50 hover:border-primary-teal/50 transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm">{logo.placeholder}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

