"use client";

import { TrendingUp, Users, Award, Zap } from "lucide-react";
import { siteData } from "../data/siteData";

const icons = [TrendingUp, Users, Award, Zap];

export default function Stats() {
  const { stats } = siteData;

  return (
    <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.15),transparent_70%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            {stats.title}
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.items.map((stat, index) => {
            const Icon = icons[index] || TrendingUp;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-5xl font-extrabold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-semibold text-lg">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

