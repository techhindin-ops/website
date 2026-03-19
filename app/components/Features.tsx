"use client";

import {
  Users,
  FolderKanban,
  Package,
  FileText,
  BarChart3,
  Shield,
  Smartphone,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { siteData } from "../data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Users,
  FolderKanban,
  Package,
  FileText,
  BarChart3,
  Shield,
  Smartphone,
  Headphones,
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            {siteData.features.title.split(siteData.features.titleHighlight)[0]}
            <span className="gradient-text">{siteData.features.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteData.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.features.items.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Users;
            return (
              <div
                key={index}
                className="group relative p-7 rounded-2xl glass border border-gray-200/50 hover:border-[#00823b]/30 hover:shadow-xl hover:shadow-[#00823b]/10 transition-all duration-500 bg-white/80 backdrop-blur-sm transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#00823b]/3 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00823b] to-[#1b365d] rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#00823b] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  {/* Sub-features */}
                  <ul className="space-y-1.5">
                    {feature.subFeatures.map((sub, subIndex) => (
                      <li key={subIndex} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#00823b] flex-shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your solar business operations?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 bg-[#00823b] hover:bg-[#00662e] text-white rounded-2xl hover:shadow-glow transition-all duration-200 font-bold text-lg transform hover:scale-105"
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
