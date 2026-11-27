// frontend/lib/glossary.ts  (M2)
// Static jargon dictionary used by <ELI5Text/>. Add terms freely.
// Keys are matched case-insensitively as whole words / phrases.

export interface GlossaryEntry {
  eli5: string;
  formal?: string;
  icon?: string;
}

export const GLOSSARY: Record<string, GlossaryEntry> = {
  // ---------- Medical / Insurance ----------
  deductible: {
    icon: "🏥",
    eli5: "The amount you pay yourself first before insurance starts helping, like a cover charge at the door.",
    formal: "The amount a policyholder pays out of pocket before the insurer begins to pay covered costs.",
  },
  copay: {
    icon: "💳",
    eli5: "A small fixed fee you pay each time you visit a doctor or pick up medicine.",
    formal: "A fixed payment made by the insured for a covered service at the time of care.",
  },
  "prior authorization": {
    icon: "📝",
    eli5: "Asking the insurance company 'is this okay?' before you get a treatment, so they agree to pay.",
    formal: "A requirement that the insurer approve a service or medication before it is delivered.",
  },
  "explanation of benefits": {
    icon: "🧾",
    eli5: "A statement from your insurer showing what the doctor charged and what they paid. It is not a bill.",
    formal: "A document summarizing charges, payments and patient responsibility for a claim.",
  },
  "pre-existing condition": {
    icon: "🩺",
    eli5: "A health problem you already had before your insurance plan started.",
  },
  "out-of-pocket maximum": {
    icon: "🛡️",
    eli5: "The most you will ever have to pay in a year. After that, insurance covers the rest.",
  },
  adjuster: {
    icon: "🕵️",
    eli5: "The person at the insurance company who decides whether your claim gets paid.",
  },
  appeal: {
    icon: "📣",
    eli5: "Asking the company to take a second look because you think they got it wrong.",
  },

  // ---------- Tax ----------
  "standard deduction": {
    icon: "🧮",
    eli5: "A fixed amount the government lets you subtract from your income so you pay less tax, no receipts needed.",
  },
  "adjusted gross income": {
    icon: "📊",
    eli5: "Your total income minus a few special allowed subtractions. Many tax rules start from this number.",
  },
  "tax lien": {
    icon: "⚠️",
    eli5: "A legal claim on your property because of unpaid taxes, like a sticky note saying 'we're owed money'.",
  },

  // ---------- Tech / Contracts ----------
  SLA: {
    icon: "⏱️",
    eli5: "A written promise about how reliable a service will be, and what you get if they break it.",
    formal: "Service Level Agreement.",
  },
  indemnification: {
    icon: "🤝",
    eli5: "One side promises to cover the other side's losses if something specific goes wrong.",
  },
  "force majeure": {
    icon: "🌪️",
    eli5: "A clause that says 'we are not to blame' when something huge and uncontrollable happens, like a flood.",
  },
};