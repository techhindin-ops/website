"use client";

import {
  Users,
  FolderKanban,
  Package,
  FileText,
  BarChart3,
  Shield,
} from "lucide-react";
import { siteData } from "../data/siteData";

const features = [
  {
    icon: Users,
    title: "Lead Management",
    description:
      "Capture, track, and nurture leads from multiple sources with automated workflows and intelligent scoring.",
  },
  {
    icon: FolderKanban,
    title: "Project Tracking",
    description:
      "Monitor project progress in real-time with visual dashboards, timelines, and milestone tracking.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Keep track of solar panels, inverters, and components with real-time inventory updates and alerts.",
  },
  {
    icon: FileText,
    title: "Document Management",
    description:
      "Centralized document storage for contracts, permits, designs, and compliance documents.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Comprehensive insights into sales performance, project profitability, and business metrics.",
  },
  {
    icon: Shield,
    title: "Compliance & Quality",
    description:
      "Ensure regulatory compliance and maintain quality standards throughout your projects.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-900 mb-6">
            {siteData.features.title.split(siteData.features.titleHighlight)[0]}
            <span className="gradient-text">{siteData.features.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteData.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl glass border border-gray-200/50 hover:border-primary-teal/50 hover:shadow-glow transition-all duration-500 bg-white/80 backdrop-blur-sm transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-3 group-hover:text-primary-teal transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
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
            className="px-10 py-4 bg-gradient-primary text-white rounded-2xl hover:shadow-glow transition-all duration-300 font-bold text-lg transform hover:scale-105"
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}

