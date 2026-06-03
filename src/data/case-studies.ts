export type CaseStudy = {
  industry: string;
  title: string;
  challenge: string;
  solution: string[];
  results: string[];
};

/** Aggregate metrics — exact values from specification */
export const AGGREGATE_METRICS = [
  { value: "42%", label: "AWS savings" },
  { value: "$1.36M", label: "annual savings" },
  { value: "79%", label: "lower CDN costs" },
  { value: "69%", label: "GPU cost reduction" },
  { value: "53%", label: "AWS spend reduction" },
] as const;

export const CASE_STUDIES: CaseStudy[] = [
  {
    industry: "B2B SaaS",
    title: "Partner Revenue SaaS Platform",
    challenge:
      "Rising EC2, RDS, and S3 costs due to overprovisioned infrastructure and 100% on-demand usage.",
    solution: [
      "RI & Savings Plan group buying",
      "EC2 right-sizing",
      "S3 lifecycle optimization",
      "Spot Instances for rendering workloads",
      "Automated database scheduling",
    ],
    results: [
      "42% reduction in AWS spend",
      "48% lower EC2 costs",
      "61% reduction in S3 storage costs",
      "$185K annual savings",
    ],
  },
  {
    industry: "Data Engineering & AI Services",
    title: "Enterprise Data & AI Platform",
    challenge:
      "Exploding AWS costs from Spark clusters, SageMaker GPUs, and unmanaged dev environments.",
    solution: [
      "Unified AWS visibility across 14 accounts",
      "Transient EMR clusters",
      "SageMaker auto-shutdown policies",
      "Tag-based governance automation",
      "Discounted Compute Savings Plans",
    ],
    results: [
      "AWS bill reduced from $210K to $97K/month",
      "67% reduction in SageMaker spend",
      "54% lower Spark & EMR costs",
      "$1.36M annual savings",
    ],
  },
  {
    industry: "Analytics & AI Consulting",
    title: "Multi-Cloud BI & Analytics Firm",
    challenge:
      "Wasteful Redshift usage, always-on RPA infrastructure, and inefficient ML retraining.",
    solution: [
      "Savings Plans for Redshift & EC2",
      "Redshift pause/resume automation",
      "Business-hours scheduling",
      "Intelligent ML retraining triggers",
      "Dashboard query optimization",
    ],
    results: [
      "46% reduction in AWS spend",
      "58% lower Redshift costs",
      "71% lower RPA infrastructure costs",
      "$290K annual savings",
    ],
  },
  {
    industry: "AdTech / API Platform",
    title: "Creator Economy API Platform",
    challenge:
      "AWS costs growing faster than API revenue due to inefficient polling and storage usage.",
    solution: [
      "Savings Plans for ECS & EC2",
      "Frequency-tiered polling architecture",
      "Lambda memory optimization",
      "S3 Intelligent-Tiering",
      "NAT Gateway optimization",
    ],
    results: [
      "51% reduction in AWS costs",
      "68% lower ingestion compute costs",
      "55% lower cost per million API calls",
      "44% lower S3 storage costs",
    ],
  },
  {
    industry: "Consumer Marketplace",
    title: "Global Event Ticketing Platform",
    challenge: "Massive idle infrastructure between ticket-launch traffic spikes.",
    solution: [
      "Hybrid RI + Spot strategy",
      "Aggressive auto-scaling optimization",
      "CloudFront caching improvements",
      "Aurora Serverless v2 adoption",
      "OpenSearch scheduling",
    ],
    results: [
      "48% reduction in AWS spend",
      "79% lower CDN & S3 costs",
      "70% lower burst compute costs",
      "$430K annual savings",
    ],
  },
  {
    industry: "IT Services & AI",
    title: "IT Services & Product Engineering Company",
    challenge:
      "Hundreds of always-on dev/staging environments across client AWS accounts.",
    solution: [
      "Centralized multi-account governance",
      "Automated environment scheduling",
      "RDS right-sizing",
      "GPU idle auto-termination",
      "Unified client cost dashboards",
    ],
    results: [
      "57% reduction in non-production costs",
      "44% lower AWS cost per client",
      "69% reduction in GPU development costs",
      "Improved EBITDA by 9%",
    ],
  },
  {
    industry: "Enterprise SaaS / AI",
    title: "AI-Powered Sales Execution Platform",
    challenge:
      "High GPU inference, video delivery, and notification infrastructure costs at massive scale.",
    solution: [
      "RI & Savings Plan coverage",
      "Time-zone-aware GPU scaling",
      "Lambda-based notification architecture",
      "Video compression optimization",
      "Aurora Serverless consolidation",
    ],
    results: [
      "53% reduction in AWS spend",
      "61% lower GPU inference costs",
      "89% lower notification costs",
      "$780K annual savings",
    ],
  },
];
