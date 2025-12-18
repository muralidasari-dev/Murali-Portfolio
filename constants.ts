
import { Profile } from './types';

export const MURALI: Profile = {
  name: "Murali Dasari",
  title: "Principal AI Systems Architect | Distributed Infrastructure Engineer",
  tagline: "Architecting deterministic intelligence layers for hyperscale production environments.",
  bio: "I design and operate the digital nervous systems of modern enterprises. My focus is on sub-millisecond inference orchestration, self-healing multi-cloud mesh architectures, and high-concurrency data pipelines. I translate speculative AI research into stable, cost-efficient, and resilient production infrastructure.",
  github: "https://github.com/muralidasari-dev",
  linkedin: "https://linkedin.com/in/muralidasari-",
  email: "muralidasari.dev@gmail.com",
  location: "India | Global Remote",
  heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // High-end server hardware
  expertise: [
    {
      title: "LLMOps & Inference Control",
      iconName: "cpu",
      recruiterNotes: "Specialist in GPU virtualization and dynamic context-window management.",
      bullets: [
        "Distributed model serving using Kubernetes-based dynamic GPU slicing.",
        "Engineered multi-region LLM routing gateways with predictive load-balancing.",
        "Automated model drift monitoring with real-time semantic drift detection."
      ]
    },
    {
      title: "Cloud Autonomy Mesh",
      iconName: "layers",
      recruiterNotes: "Infrastructure-as-Code strategist focused on zero-trust and self-remediation.",
      bullets: [
        "Architected zero-trust networking layers for global-scale AI workloads.",
        "Self-healing multi-cloud environments using Terraform and custom Go governors.",
        "Cost-optimization engines saving $2.4M/year in compute overhead."
      ]
    },
    {
      title: "Distributed Systems Core",
      iconName: "code",
      recruiterNotes: "Expert in low-level memory optimization and high-frequency data ingestion.",
      bullets: [
        "Event-driven data mesh handling 5M+ concurrent state transitions.",
        "Sub-100μs processing latency using optimized Rust and Go-routines.",
        "Mission-critical observability with distributed tracing and eBPF monitoring."
      ]
    }
  ],
  skills: [
    { name: "Kubernetes", category: "Infra", level: 98, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "PyTorch", category: "AI", level: 95, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Terraform", category: "IaC", level: 96, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    { name: "GoLang", category: "Systems", level: 92, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
    { name: "AWS", category: "Cloud", level: 97, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Rust", category: "Systems", level: 88, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
    { name: "Next.js", category: "UI/UX", level: 99, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "PostgreSQL", category: "Data", level: 94, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
  ],
  projects: [
    {
      id: "sentinel-anomaly",
      title: "Sentinel Global Mesh",
      tagline: "Autonomous Infrastructure Self-Remediation",
      category: 'AI Platform',
      description: "A production AI governor that ingests telemetry from 10k+ nodes to predict cascading infrastructure failures. It uses an ensemble of LSTM and XGBoost models to trigger automated node recycling and traffic shifting protocols.",
      impact: "Eliminated 84% of Sev-1 incidents through proactive remediation.",
      stack: ["Go", "Rust", "TensorFlow", "Kubernetes", "Prometheus"],
      github: "https://github.com/muralidasari-dev/sentinel-mesh",
      demo: "#",
      date: "2025-02",
      metrics: [
        { label: "Predictive MTTR", value: "14s", trend: 'down' },
        { label: "Remediation Success", value: "99.2%", trend: 'up' },
        { label: "Cost Efficiency", value: "+42%", trend: 'up' }
      ],
      architecture: {
        description: "Decentralized agent-based architecture with an eBPF data collection layer and a centralized AI decisioning control plane.",
        tradeoffs: ["Chose consistency over availability during remediation state locks.", "Prioritized inference speed over deeper architectural complexity."],
        failureMitigation: "Triple-redundant control plane with mechanical fail-safe override protocols."
      }
    },
    {
      id: "lexicon-gateway",
      title: "Lexicon LLM Matrix",
      tagline: "Global Multi-Modal Inference Gateway",
      category: 'Systems',
      description: "A low-latency routing layer for LLMs across major providers and self-hosted GPU clusters. Features real-time token economics, semantic caching, and dynamic quantization routing to minimize p99 latency.",
      impact: "Reduced global inference spend by $1.2M annually while maintaining 99.9% uptime.",
      stack: ["Rust", "Redis", "Next.js", "gRPC", "Cloudflare"],
      github: "https://github.com/muralidasari-dev/lexicon-matrix",
      demo: "#",
      date: "2024-12",
      metrics: [
        { label: "P99 Routing", value: "8ms", trend: 'stable' },
        { label: "Semantic Cache", value: "34%", trend: 'up' },
        { label: "Token Savvy", value: "2.8B+", trend: 'up' }
      ],
      architecture: {
        description: "Global Edge deployment using Rust-WASM for edge-side decisioning and Redis for distributed semantic state.",
        tradeoffs: ["Sacrificed cache staleness for global consistency guarantees.", "Implemented optimistic concurrency for token tracking."],
        failureMitigation: "Graceful degradation to local model clusters with reduced context windows if external API health drops below 95%."
      }
    }
  ]
};
