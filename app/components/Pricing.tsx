"use client";

import { Check, X } from "lucide-react";
import { siteData } from "../data/siteData";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹9,999",
    period: "per month",
    description: "Perfect for small solar EPC companies getting started",
    features: [
      "Up to 50 projects",
      "Basic lead management",
      "Project tracking",
      "Email support",
      "Mobile app access",
      "Basic reporting",
    ],
    limitations: [
      "Limited integrations",
      "No API access",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "₹19,999",
    period: "per month",
    description: "Ideal for growing solar businesses",
    features: [
      "Unlimited projects",
      "Advanced lead management",
      "Full project tracking",
      "Priority email support",
      "Mobile app access",
      "Advanced reporting & analytics",
      "Custom integrations",
      "API access",
      "Team collaboration tools",
    ],
    limitations: [],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large solar EPC companies with specific needs",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom feature development",
      "On-premise deployment option",
      "Advanced security & compliance",
      "Training & onboarding",
      "SLA guarantee",
    ],
    limitations: [],
    popular: false,
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const getPrice = (plan: typeof pricingPlans[0]) => {
    if (plan.name === "Enterprise") return plan.price;
    if (billingPeriod === "yearly") {
      const monthlyPrice = parseInt(plan.price.replace(/[₹,]/g, ""));
      const yearlyPrice = monthlyPrice * 12 * 0.8; // 20% discount
      return `₹${yearlyPrice.toLocaleString("en-IN")}`;
    }
    return plan.price;
  };

  return (
    <section className="pt-20 pb-24 bg-gradient-to-b from-slate-50 via-white to-cyan-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(20,184,166,0.08),transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-dark-900 mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Choose the perfect plan for your solar EPC business. All plans include
            our core features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span
              className={`text-base font-semibold ${
                billingPeriod === "monthly" ? "text-dark-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")
              }
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-gradient-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-offset-2 shadow-soft"
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${
                  billingPeriod === "yearly" ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-base font-semibold ${
                billingPeriod === "yearly" ? "text-dark-900" : "text-gray-500"
              }`}
            >
              Yearly
            </span>
            {billingPeriod === "yearly" && (
              <span className="text-sm text-accent-emerald font-bold bg-emerald-100 px-3 py-1.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative glass rounded-3xl shadow-soft p-10 ${
                plan.popular
                  ? "border-2 border-primary-purple/50 transform scale-105 hover:shadow-glow-purple"
                  : "border border-gray-200/50 hover:border-primary-teal/50"
              } transition-all duration-500 bg-white/90 backdrop-blur-sm hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-glow">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className="text-3xl font-extrabold text-dark-900 mb-3">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold gradient-text">
                    {getPrice(plan)}
                  </span>
                  {plan.name !== "Enterprise" && (
                    <span className="text-gray-600 ml-2 text-lg">/{billingPeriod === "monthly" ? "month" : "year"}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-6 w-6 text-accent-emerald mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, limitIndex) => (
                  <li key={limitIndex} className="flex items-start opacity-50">
                    <X className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 line-through">{limitation}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-primary text-white hover:shadow-glow"
                    : "bg-gradient-primary text-white hover:shadow-glow"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-dark-900 text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 shadow-soft border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:border-primary-teal/50 transition-all">
              <h3 className="text-xl font-bold text-dark-900 mb-3">
                Can I change plans later?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 shadow-soft border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:border-primary-teal/50 transition-all">
              <h3 className="text-xl font-bold text-dark-900 mb-3">
                Is there a free trial?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, all plans come with a 14-day free trial. No credit card
                required to start.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 shadow-soft border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:border-primary-teal/50 transition-all">
              <h3 className="text-xl font-bold text-dark-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We accept all major credit cards, UPI, and bank transfers for
                enterprise plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

