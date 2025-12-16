"use client";

import { useState, useEffect } from "react";
import { 
  Play, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Zap, 
  BarChart3,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { siteData } from "../data/siteData";

export default function Hero() {
  const { hero } = siteData;
  const { headline, subheadline, ctaButtons, featureHighlights } = hero;
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % featureHighlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [featureHighlights.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleCTAClick = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50/20">
      {/* Dynamic Animated Background */}
      <div 
        className="absolute inset-0 opacity-30 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(20,184,166,0.15), transparent 50%),
                      radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(139,92,246,0.1), transparent 50%)`,
        }}
      />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(20,184,166,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(20,184,166,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary-teal/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary-teal animate-pulse" />
              <span className="text-sm font-bold text-primary-teal">
                Built for Solar EPC Companies
              </span>
            </div>

            {/* Main Headline - Modern Typography */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1]">
                <span className="block text-dark-900">Transform Your</span>
                <span className="block gradient-text">Solar Business</span>
                <span className="block text-dark-900">Operations</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-xl">
                {subheadline}
              </p>
            </div>

            {/* Interactive Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {featureHighlights.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`group relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-gradient-primary text-white shadow-glow scale-105"
                      : "bg-white/80 text-gray-700 hover:bg-white border border-gray-200/50 backdrop-blur-sm"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {feature}
                    {activeFeature === index && (
                      <CheckCircle2 className="h-4 w-4 animate-in fade-in" />
                    )}
                  </span>
                </button>
              ))}
            </div>

            {/* CTA Buttons - Modern Design */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleCTAClick}
                className="group relative px-8 py-4 bg-gradient-primary text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-glow transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {ctaButtons.primary}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-teal via-primary-indigo to-primary-purple opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={handleCTAClick}
                className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-primary-teal/30 text-primary-teal rounded-2xl font-bold text-lg hover:border-primary-teal hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="h-5 w-5" />
                {ctaButtons.secondary}
              </button>
            </div>

            {/* Trust Indicators - Modern Layout */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" />
                <span className="font-semibold">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" />
                <span className="font-semibold">No credit card</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" />
                <span className="font-semibold">Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Dashboard Preview */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="relative glass rounded-3xl p-8 border border-gray-200/50 bg-white/90 backdrop-blur-sm shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs font-semibold text-gray-500">techHind Dashboard</div>
                </div>

                {/* Interactive Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: TrendingUp, value: "₹2.5M", label: "Revenue", color: "from-primary-teal to-primary-cyan" },
                    { icon: Users, value: "127", label: "Projects", color: "from-primary-indigo to-primary-purple" },
                    { icon: BarChart3, value: "94%", label: "Efficiency", color: "from-primary-cyan to-primary-teal" },
                    { icon: Zap, value: "48h", label: "Avg Time", color: "from-primary-purple to-primary-indigo" },
                  ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="group p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/50 hover:border-primary-teal/50 transition-all duration-300 hover:shadow-lg"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-dark-900 mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Project Timeline Preview */}
                <div className="space-y-3">
                  <div className="text-sm font-bold text-gray-700 mb-3">Active Projects</div>
                  {[75, 60, 45].map((progress, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Project {index + 1}</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-primary rounded-full transition-all duration-1000 ${
                            index === 0 ? "animate-pulse" : ""
                          }`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Cards - Animated */}
              <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 border border-gray-200/50 bg-white/90 backdrop-blur-sm shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-700">New Lead</div>
                    <div className="text-xs text-gray-500">2 min ago</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 border border-gray-200/50 bg-white/90 backdrop-blur-sm shadow-xl animate-bounce-slow-delayed">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-700">+12% Growth</div>
                    <div className="text-xs text-gray-500">This month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Dashboard Preview */}
          <div className="lg:hidden relative mt-8">
            <div className="glass rounded-3xl p-6 border border-gray-200/50 bg-white/90 backdrop-blur-sm shadow-2xl">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: TrendingUp, value: "₹2.5M", label: "Revenue" },
                  { icon: Users, value: "127", label: "Projects" },
                  { icon: BarChart3, value: "94%", label: "Efficiency" },
                  { icon: Zap, value: "48h", label: "Avg Time" },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/50"
                    >
                      <Icon className="h-6 w-6 text-primary-teal mb-2" />
                      <div className="text-lg font-bold text-dark-900">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-teal/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary-teal rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
