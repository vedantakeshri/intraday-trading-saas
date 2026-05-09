"use client";

import { useState } from "react";
import Sidebar from "../componets/dashboard/Sidebar";
import Topbar from "../componets/dashboard/Topbar";

export default function BillingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Pro Trader");

  const plans = [
    {
      name: "Starter",
      price: "₹499",
      duration: "/month",
      description: "Best for beginners testing intraday strategies",
      trial: "3 Days Free Trial",
      features: [
        "Real-time market dashboard",
        "1 Strategy backtest/day",
        "Basic risk management tools",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Pro Trader",
      price: "₹1,499",
      duration: "/month",
      description: "For active traders who want consistency",
      trial: "7 Days Free Trial",
      features: [
        "Unlimited backtesting",
        "Advanced risk control system",
        "Live trade signals",
        "Portfolio analytics",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "₹2,999",
      duration: "/month",
      description: "For serious traders and fund managers",
      trial: "14 Days Free Trial",
      features: [
        "AI-powered trade suggestions",
        "Custom strategy builder",
        "API access",
        "Multi-account tracking",
        "1 to 1 mentorship support"
      ],
      popular: false
    }
  ];

  const selectedPlanData = plans.find(p => p.name === selectedPlan);

  const handlePayment = () => {
    alert(`Redirecting to payment gateway for ${selectedPlan}`);
  };

  const recommendedPlan = "Pro Trader";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0d1320] to-[#05070d] text-white">

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="md:ml-64 transition-all duration-300">

        <Topbar 
          onLogout={() => {}}
         onMenuClick={() => setSidebarOpen(p => !p)} />

        <main className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Billing & Subscription</h1>
            <p className="text-gray-400 text-sm">Upgrade your trading experience with powerful tools</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPlan(plan.name)}
                className={`border rounded-xl p-5 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${plan.popular ? "border-green-500" : "border-white/10"} ${selectedPlan === plan.name ? "bg-[#13182A]" : "bg-black/30"}`}
              >

                {plan.popular && (
                  <span className="text-xs bg-green-500 text-black px-2 py-1 rounded-full">Most Popular</span>
                )}

                {plan.name === recommendedPlan && (
                  <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full ml-2">Recommended</span>
                )}

                <h2 className="text-xl font-bold mt-2">{plan.name}</h2>
                <p className="text-gray-400 text-sm mt-1">{plan.description}</p>

                {plan.trial && (
                  <p className="text-xs text-yellow-400 mt-1">{plan.trial}</p>
                )}

                <div className="mt-3">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.duration}</span>
                </div>

                <ul className="mt-4 space-y-1 text-sm text-gray-300">
                  {plan.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                <button
                  disabled={selectedPlan === plan.name}
                  className={`w-full mt-4 py-2 rounded-lg ${selectedPlan === plan.name ? "bg-gray-600 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
                >
                  {selectedPlan === plan.name ? "Selected" : "Choose Plan"}
                </button>

              </div>
            ))}
          </div>

          <div className="bg-[#13182A]/70 border border-white/10 rounded-xl p-5">
            <h2 className="text-lg mb-3">Billing Summary</h2>

            <p className="text-sm">
              Selected Plan: <span className="text-green-400 font-semibold">{selectedPlan}</span>
            </p>

            <p className="text-sm text-gray-300 mt-1">
              Price: <span className="text-white">{selectedPlanData?.price}</span>
            </p>

            <p className="text-gray-400 text-sm mt-2">Secure payment via Razorpay or Stripe</p>
            <p className="text-gray-500 text-sm">Instant activation after payment. Cancel anytime.</p>

            <button
              onClick={handlePayment}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
            >
              Proceed to Payment
            </button>

          </div>

        </main>
      </div>
    </div>
  );
}