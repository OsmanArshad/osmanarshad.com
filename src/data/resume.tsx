import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";

// NOTE: Only importing SVG icons that exist in the repo.
// AWS, Ansible, Prometheus, Terraform etc. don't have custom SVGs in this
// theme — add them to src/components/ui/svgs/ as you iterate on the site.

// Creates a skill icon from SimpleIcons CDN. Verify slugs at simpleicons.org
const si = (slug: string) => {
  const Icon = () => (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={slug}
      className="size-5"
    />
  );
  Icon.displayName = slug;
  return Icon;
};

const localIcon = (path: string) => {
  const Icon = () => (
    <img src={path} alt="" className="size-4 rounded overflow-hidden object-contain" />
  );
  Icon.displayName = path;
  return Icon;
};


export const DATA = {
  name: "Osman Arshad",
  initials: "OA",
  url: "https://osmanarshad.com",
  location: "San Francisco Bay Area",
  locationLink: "https://www.google.com/maps/place/san+francisco+bay+area",
  description:
    "Site Reliability Engineer",
  summary:
    "Site Reliability Engineer with experience processing billions in payments.",
  avatarUrl: "/avatar.jpg", // Replace with your actual photo in /public/avatar.jpg
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5,
      enabled: true,
      label: "Projects",
      heading: "",
      text: "A short list of relevant projects I've worked on in my personal time.",
    },
    hackathons: {
      order: 7,
      enabled: false,
      label: "Hackathons",
      heading: "Hackathons",
      text: "",
    },
    photos: {
      order: 6,
      enabled: false,
      heading: "Photos",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Open to Site Reliability Engineering, Platform Engineering, and DevOps roles.",
    },
  },
  photos: [],
  skills: [
    {
      category: "Infrastructure & Cloud",
      items: [
        { name: "AWS", icon: localIcon("/aws.ico") },
        { name: "Kubernetes", icon: Kubernetes },
        { name: "Docker", icon: Docker },
        { name: "Terraform", icon: si("terraform") },
        { name: "Ansible", icon: si("ansible") },
        { name: "Linux", icon: si("linux") },
        { name: "Kafka", icon: si("apachekafka") },
      ],
    },
    {
      category: "Observability",
      items: [
        { name: "Prometheus", icon: si("prometheus") },
        { name: "Grafana", icon: si("grafana") },
        { name: "Datadog", icon: si("datadog") },
        { name: "New Relic", icon: si("newrelic") },
        { name: "Splunk", icon: si("splunk") },
        { name: "CloudWatch", icon: localIcon("/cloudwatch.ico") },
        { name: "PagerDuty", icon: si("pagerduty") },
      ],
    },
    {
      category: "Languages & Scripting",
      items: [
        { name: "Python", icon: Python },
        { name: "Go", icon: Golang },
        { name: "Bash", icon: si("gnubash") },
        { name: "C#", icon: localIcon("/csharp.ico") },
        { name: "SQL", icon: si("postgresql") },
      ],
    },
    {
      category: "CI/CD",
      items: [
        { name: "Jenkins", icon: si("jenkins") },
        { name: "ArgoCD", icon: si("argo") },
        { name: "Git", icon: si("git") },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "osmanaarshad@gmail.com",
    tel: "", // Omitted — public site
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/OsmanArshad",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/osman-arshad",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:osmanaarshad@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Yapstone",
      href: "https://yapstone.com",
      badges: [],
      location: "Walnut Creek, CA",
      logoUrl: "https://www.google.com/s2/favicons?domain=yapstone.com&sz=128", // or keep the favicon URL
      roles: [
        {
          title: "Site Reliability Engineer III",
          start: "May 2022",
          end: "March 2024",
          bullets: [
            "Owned and developed an internal observability platform (Python, C#, MSSQL) providing SLI/SLO tracking and automation workflows — reducing MTTD and manual toil across the organization",
            "Administered AWS production infrastructure for 1500+ multi-region EC2/ECS hosts via CloudFormation for containerized microservices processing billions in annual payment volume",
            "Reduced cloud infrastructure spend by 20% within 6 months through rightsizing, autoscaling, and decommissioning unused resources",
            "Led release management and change control for all production changes, maintaining PCI DSS, SOC 2, and GDPR compliance across multiple daily deployments",
          ],
        },
        {
          title: "Site Reliability Engineer",
          start: "October 2018",
          end: "May 2022",
          bullets: [
            "Reduced alert fatigue by 90% — from 300+ alerts per shift to 5 — within three months through alert tuning and self-healing automation via Python and Lambda",
            "Designed SLA monitoring, distributed tracing, metrics-driven alerting, and dashboards across New Relic, Datadog, ELK, and Splunk — achieving 99.99% uptime SLO",
            "Primary incident commander for 80+ P1 incidents on a 24/7/365 on-call schedule",
            "Built Yapstone's incident on-call program, mentoring 10+ junior SRE/NOC engineers on operational best practices",
            "Engineered CI/CD pipelines using Jenkins, CodeDeploy, and Puppet — cutting manual deployment time by ~85% from 2 hours to 15 minutes",
            "Authored 300+ incident playbooks and runbooks across SRE, DevOps, and NOC teams",
          ],
        },
      ],
      // Keep these for TypeScript compatibility with other entries
      title: "Site Reliability Engineer → SRE III",
      start: "October 2018",
      end: "March 2024",
      description: "",
    },
    {
      company: "Santa Clara County Office of Education",
      href: "https://sccoe.org",
      badges: ["Internship"],
      location: "San Jose, CA",
      title: "Database Administrator Intern",
      logoUrl: "/santaclaracounty.jpg",
      start: "June 2016",
      end: "September 2016",
      bullets: [
        "Automated database maintenance tasks using PowerShell and SQL stored procedures, improving operational efficiency within 3 months",
        "Monitored database health across 15+ Microsoft SQL Server instances, identifying and escalating performance issues to senior DBAs",
      ],
    },
    {
      company: "Office of Congressman Pete Stark",
      href: "https://en.wikipedia.org/wiki/Pete_Stark",
      badges: ["Internship"],
      location: "Fremont, CA",
      title: "Congressional Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=house.gov&sz=128",
      start: "June 2011",
      end: "August 2011",
      bullets: [
        "Assisted constituent services and office operations for a 20-term U.S. Representative serving California's 15th congressional district",
      ],
    },

  ],
  education: [
    {
      school: "University of California, Riverside",
      href: "https://ucr.edu",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/ucr-logo.jpg",
      start: "2016",
      end: "2018",
      courses: [
        "CS100 Software Construction",
        "CS120A Logic Design",
        "CS120B Embedded Systems",
        "CS161 Computer Architecture",
        "CS141 Data Structures & Algorithms",
        "CS153 Operating Systems",
        "CS164 Computer Networks",
        "CS165 Computer Security",
        "CS170 Artificial Intelligence",
        "CS169 Mobile Wireless Networks",
        "CS152 Compiler Design",
      ],
    },
  ],
  projects: [
    {
      title: "Gielinor Homelab",
      href: "https://github.com/OsmanArshad/gielinor",
      dates: "2024 - Present",
      active: true,
      description:
        "Self-hosted Kubernetes cluster built on personal hardware. Multi-node k3s cluster with Calico CNI, MetalLB L2 load balancing, ArgoCD GitOps (app-of-apps pattern), Traefik ingress with internal PKI via cert-manager, and a full observability stack (Prometheus, Loki, Grafana, Alloy). LVM storage management across multiple NVMe drives and Ansible automation for node provisioning.",
      technologies: [
        "Kubernetes",
        "ArgoCD",
        "Calico BGP",
        "Prometheus",
        "Loki",
        "Grafana",
        "Ansible",
        "Traefik",
        "cert-manager",
        "MetalLB",
        "Helm",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/OsmanArshad/gielinor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // TODO: Add a screenshot — Grafana dashboard or architecture diagram
      video: "",
    },
    {
      title: "MPTCP Proxy",
      href: "https://github.com/OsmanArshad/MPTCP-Proxy",
      dates: "2018",
      active: false,
      description:
        "A proxy server that leverages Multi-Path TCP (MPTCP) to download data from a server simultaneously across multiple network interfaces.",
      technologies: [
        "C",
        "MPTCP",
        "Linux",
        "Networking",
        "Socket Programming",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/OsmanArshad/MPTCP-Proxy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Whack-A-Mole (ATmega Hardware)",
      href: "https://github.com/OsmanArshad/WhackAMole",
      dates: "2017",
      active: false,
      description:
        "Hardware implementation of Whack-A-Mole on a breadboard using ATmega microcontrollers programmed with finite state machine design. Built at the register level — timers, interrupts, GPIO — without an OS or framework.",
      technologies: [
        "C",
        "ATmega",
        "Embedded Systems",
        "Finite State Machines",
        "Hardware",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/OsmanArshad/WhackAMole",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Video",
          href: "https://www.youtube.com/watch?v=1SFMhlHLtAY",
          icon: <Icons.youtube className="size-3" />,
        }
      ],
      image: "",
      video: "https://www.youtube.com/embed/1SFMhlHLtAY",
    },
  ],
  hackathons: [],
};
