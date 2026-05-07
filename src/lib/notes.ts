export interface NoteSource {
  label: string;
  href: string;
}

export interface Note {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  metadata: {
    title: string;
    description: string;
  };
  body: string[];
  sources?: NoteSource[];
}

export const notes: Note[] = [
  {
    slug: "what-i-automated-for-my-own-business",
    title:
      "What I Automated for My Own Business (and What It Taught Me About AI Consulting)",
    excerpt:
      "The useful automation was not the clever AI layer. It was removing the handoffs where orders, updates, and context kept getting lost.",
    publishedAt: "May 2026",
    readingTime: "4 min read",
    metadata: {
      title:
        "What I Automated for My Own Business — MonPro-AI Notes",
      description:
        "What building automation for a real sourcing operation taught Paramveer Marwah about workflow design, handoffs, and practical AI consulting.",
    },
    body: [
      "Before MonPro-AI, I helped run Navelie, a sourcing operation between Delhi and Europe. My mother handles the supplier side in India. I handle everything that touches a screen.",
      "For a long time, \"everything that touches a screen\" meant a mess of WhatsApp threads, Google Sheets, and screenshots forwarded between two countries and three time zones. Orders got lost. Status updates were verbal. I was the bottleneck.",
      "So I built systems for it. Not because it was a portfolio piece. Because I was tired.",
      "Order intake moved into a structured form that auto-creates a row in a sheet, tags the supplier, and pings my mother on WhatsApp. Status updates flow back the same way: she replies to a message, n8n parses it, the sheet updates, and the customer hears back. Inventory snapshots get pulled from supplier WhatsApp messages and dropped into a single dashboard I can check from anywhere.",
      "It is not glamorous. It is not \"AI-first.\" Most of it is glue code, a few LLM calls, and a lot of n8n.",
      "But here is what it taught me, and why I am building MonPro-AI the way I am.",
      "The wins did not come from clever AI. They came from removing handoffs. Every place a human had to copy something from one tool to another was a place orders died. AI helped at three specific points: parsing messy WhatsApp text, summarizing daily activity for me, and flagging anomalies. Maybe twenty percent of the system. The other eighty percent was workflow design.",
      "Most \"AI consultants\" sell the twenty percent and ignore the eighty. They drop in a chatbot, call it transformation, and move on. The chatbot fails because the workflow underneath it was broken to begin with.",
      "I would rather be the person who looks at the whole flow, finds the handoffs that are bleeding time and money, and then decides where AI actually earns its place.",
      "That is what I am offering when I ask founders for twenty minutes. Not a pitch. A look at where the leaks are.",
      "If you run a small business and you are the bottleneck, I have been there. I would like to hear about it.",
    ],
  },
  {
    slug: "why-i-am-not-selling-ai-agents-yet",
    title: "Why I Am Not Selling AI Agents Yet",
    excerpt:
      "Agents are the visible layer. The work that makes them reliable is underneath: workflow, data, integrations, and edge cases.",
    publishedAt: "May 2026",
    readingTime: "3 min read",
    metadata: {
      title: "Why I Am Not Selling AI Agents Yet — MonPro-AI Notes",
      description:
        "Why MonPro-AI starts with operations and workflow questions before recommending AI agents or automation tools.",
    },
    body: [
      "Every second post on my LinkedIn feed right now is someone selling AI agents. Custom GPTs. Auto-replying inboxes. Voice agents that \"do the work of three SDRs.\"",
      "I am a developer. I have built these things. They mostly do not work the way the demos suggest.",
      "Not because the technology is bad. The technology is genuinely good. They do not work because they are being sold one layer too high. The agent is the visible part. Underneath it is a workflow, a data model, an integration surface, and a set of edge cases that the seller has not thought about and the buyer cannot evaluate.",
      "You buy the agent. Three weeks in, it is calling the wrong customers, replying with hallucinated order numbers, or quietly doing nothing because an API key expired. You blame the AI. The AI was never the problem.",
      "This is why I am not putting agents on my website yet.",
      "I would rather sit with a founder for twenty minutes and ask: Where in your day do you copy something from one place to another? What does your team do that you wish was already done by the time you woke up? What breaks when you go on holiday?",
      "Those questions tell me where automation is worth building. Some of the answers will involve AI. Some will not. A well-designed n8n workflow with no AI in it can save more hours than a poorly deployed agent ever will.",
      "I am building MonPro-AI as a consulting practice that thinks operations first and tools second. The tools are the easy part. I have shipped enough of them to know that.",
      "The hard part is asking the right questions before anyone writes a single line of code. That is what I want to be paid for. Eventually.",
      "For now, I am asking those questions for free. If you are running a small team and feel held together by spreadsheets and goodwill, that is the conversation I want to have.",
      "No agents. No pitch. Just a look at what is actually broken.",
    ],
  },
  {
    slug: "ai-in-ecommerce-is-becoming-a-customer",
    title:
      "AI in E-Commerce Is About to Stop Being a Channel and Start Being a Customer",
    excerpt:
      "Agentic commerce will reward stores that are legible to machines: clean product data, clear policies, and dependable operational APIs.",
    publishedAt: "May 2026",
    readingTime: "4 min read",
    metadata: {
      title:
        "AI in E-Commerce Is Becoming a Customer — MonPro-AI Notes",
      description:
        "A practical note for Shopify merchants on agentic checkout, AI shopping agents, and the backend hygiene that makes stores machine-readable.",
    },
    body: [
      "I have been reading everything I can on agentic commerce for the last month. Some of what is happening could change how Shopify merchants operate over the next eighteen months. Most merchants I have spoken to have not registered it yet.",
      "Three things are converging.",
      "First, agentic checkout. OpenAI launched Instant Checkout in ChatGPT in September 2025, starting with Etsy sellers and Shopify merchants to follow. Shopify also announced the Universal Commerce Protocol, co-developed with Google, as a way to bring commerce into agent-driven channels. McKinsey estimates that AI agents could mediate $3 trillion to $5 trillion of global consumer commerce by 2030.",
      "What this actually means: your customer is increasingly not only a human browsing your site. It may be an AI agent comparing your product feed against others in machine-readable form. If your product data is messy, your delivery terms are unclear, or your returns policy is buried somewhere hard to parse, the agent may skip you. The human may never see the choice.",
      "Second, voice. Voice shopping still looks strongest around research, reorders, and order tracking, not complex first-time purchases. But for any merchant whose customers come back regularly, it is another place where repeat business can be captured or lost.",
      "Third, visual search. For categories where shoppers point at something they saw and want to find it, such as fashion, home, and accessories, visual discovery is moving from a novelty toward a more normal expectation.",
      "Here is the part most merchants are not thinking about.",
      "You do not win this by adding features. You win it by making your store legible to machines. Clean structured data. Consistent product attributes. Real-time inventory APIs. Delivery and returns terms that an agent can parse without ambiguity.",
      "This is not glamorous work. It is backend hygiene. But the merchants who do it now are more likely to be the ones AI agents can understand and recommend later. The ones who do not may quietly disappear from a channel they did not know they were competing in.",
      "I am paying close attention to this. If you run a Shopify store and you want to think out loud about where this lands for your category, that is exactly the kind of conversation I am having right now.",
    ],
    sources: [
      {
        label: "OpenAI: Instant Checkout and Agentic Commerce Protocol",
        href: "https://openai.com/index/buy-it-in-chatgpt/",
      },
      {
        label: "Shopify: Universal Commerce Protocol",
        href: "https://www.shopify.com/news/ai-commerce-at-scale",
      },
      {
        label: "McKinsey: The automation curve in agentic commerce",
        href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-automation-curve-in-agentic-commerce",
      },
    ],
  },
];

export function getNoteBySlug(slug: string) {
  return notes.find((note) => note.slug === slug);
}
