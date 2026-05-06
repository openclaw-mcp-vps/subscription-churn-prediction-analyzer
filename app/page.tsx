export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          SaaS Churn Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Predict Which Customers Will{" "}
          <span className="text-[#58a6ff]">Cancel Next Month</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Stripe, your support system, and usage analytics. Our scoring engine surfaces at-risk subscribers before they churn — so you can act first.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $19 / mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required to explore. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📊", title: "Usage Pattern Analysis", desc: "Detect login drops, feature abandonment, and engagement decay automatically." },
            { icon: "🎫", title: "Support Ticket Signals", desc: "Negative sentiment and unresolved tickets are weighted in the churn score." },
            { icon: "💳", title: "Billing Risk Flags", desc: "Failed payments, downgrades, and refund requests trigger instant alerts." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-bold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <p className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited customer profiles",
              "Stripe + support + analytics integrations",
              "Real-time churn risk dashboard",
              "Configurable scoring weights",
              "Automated email alerts",
              "CSV export & API access"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the churn score work?",
              a: "We combine usage frequency, support sentiment, billing events, and login recency into a weighted risk score (0–100). You can tune the weights to match your business model."
            },
            {
              q: "Which integrations are supported?",
              a: "Out of the box: Stripe for billing, Intercom/Zendesk for support tickets, and a JavaScript snippet or REST API for usage events. More integrations ship monthly."
            },
            {
              q: "Is my customer data secure?",
              a: "All data is encrypted in transit and at rest. We never sell or share your data. You can delete your account and all associated data at any time."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} Churn Prediction Analyzer. All rights reserved.
      </footer>
    </main>
  );
}
