import type { ServiceBlockContent } from "@/components/site/FeaturedSolutionsSection";

export type ServiceCategoryMeta = {
  id: string;
  label: string;
  description: string;
  services: ServiceBlockContent[];
};

export const serviceCategories: ServiceCategoryMeta[] = [
  {
    id: "platform",
    label: "Cloud Platform",
    description:
      "Optimize spend, migrate with confidence, and run production workloads with enterprise-grade managed operations.",
    services: [
      {
        title: "Cost & Performance Optimization",
        desc: "Maximize performance. Minimize cloud spend.",
        fullDesc:
          "We analyze your cloud infrastructure and eliminate inefficiencies to ensure you get the best value from your cloud investment.",
        bullets: [
          "Cloud cost audit & usage analysis",
          "Identify unused / underutilized resources",
          "Performance tuning for applications & workloads",
          "Continuous monitoring & optimization",
          "Multi-cloud optimization (AWS, Azure, GCP)",
        ],
        focus:
          "Balancing cost, performance, and reliability using data-driven insights and best practices.",
      },
      {
        title: "Cloud Managed Services",
        desc: "End-to-end management of your cloud infrastructure.",
        fullDesc:
          "Reduce operational overhead while ensuring your systems remain secure, scalable, and always available.",
        bullets: [
          "24/7 monitoring & alerting",
          "Infrastructure automation",
          "Security & compliance management",
          "Backup & disaster recovery",
          "Ongoing optimization",
        ],
        focus: "Secure, highly available, and fully managed environments.",
      },
      {
        title: "Cloud Migration",
        desc: "Seamlessly move to the cloud without risk or downtime.",
        fullDesc: "Includes:",
        bullets: [
          "Lift & shift migration",
          "Hybrid cloud setup",
          "Re-architecture for cost efficiency",
          "Application & database migration",
        ],
        focus: "Optimized migration outcomes with minimal disruption.",
      },
      {
        title: "Cloud Architecture Design",
        desc: "Build scalable and future-ready cloud infrastructure.",
        fullDesc: "Includes:",
        bullets: [
          "Infrastructure & platform strategy",
          "Secure and resilient architecture",
          "Scalability planning",
          "AWS best practices implementation",
        ],
        focus: "Security, resilience, and performance.",
      },
    ],
  },
  {
    id: "engineering",
    label: "Engineering & Governance",
    description:
      "Modern delivery practices, security at scale, and AWS Well-Architected excellence for teams building in the cloud.",
    services: [
      {
        title: "DevOps & Automation",
        desc: "Accelerate development with automated pipelines.",
        fullDesc: "Includes:",
        bullets: [
          "CI/CD pipeline setup",
          "Automated deployments",
          "Infrastructure as Code",
          "Testing & monitoring pipelines",
        ],
        focus: "Full lifecycle automation from code to production.",
      },
      {
        title: "Security & Compliance",
        desc: "Protect your cloud infrastructure and stay compliant.",
        fullDesc: "Includes:",
        bullets: [
          "Security audits & assessments",
          "Compliance frameworks (ISO, SOC2, etc.)",
          "Risk mitigation strategies",
          "Data protection",
        ],
        focus: "Securing sensitive data and ensuring compliance.",
      },
      {
        title: "AWS Well-Architected Review",
        desc: "Evaluate and improve your cloud setup using AWS best practices.",
        fullDesc: "Based on 6 pillars:",
        bullets: [
          "Operational Excellence",
          "Security",
          "Reliability",
          "Performance Efficiency",
          "Cost Optimization",
          "Sustainability",
        ],
        focus: "Secure, scalable, and efficient infrastructure.",
      },
    ],
  },
];
