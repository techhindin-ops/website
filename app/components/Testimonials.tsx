"use client";

import { Star, Quote } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Testimonials() {
  const { testimonials } = siteData;

  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-900 mb-6">
            {testimonials.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {testimonials.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-8 border border-gray-200/50 hover:border-primary-purple/50 hover:shadow-glow-purple transition-all duration-500 bg-white/80 backdrop-blur-sm transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center mb-6">
                <Quote className="h-10 w-10 text-primary-purple opacity-30 group-hover:opacity-50 transition-opacity" />
              </div>
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="border-t border-gray-200/50 pt-6">
                <p className="font-bold text-dark-900 text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-600 mt-1">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

