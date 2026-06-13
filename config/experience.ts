export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: string[];
  type: "Professional" | "Academic";
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "cobalt-project",
    position: "Activity Leader and Technician",
    company: "Cobalt Project",
    location: "La Croix-sur-Lutry, Switzerland",
    startDate: new Date("2020-01-01"),
    endDate: new Date("2023-12-31"),
    description: [
      "Organized and managed game sessions, provided active coaching for adult players, and supervised children's parties.",
    ],
    achievements: [],
    skills: ["Team Leadership", "Customer Service", "Event Coordination", "Safety Management", "Coaching"],
    type: "Professional",
    companyUrl: "https://cobaltproject.com/en/",
    logo: "/experience/cobalt.png",
  },
  {
    id: "denner",
    position: "Cashier & All-Rounder",
    company: "Denner Satellite",
    location: "Belmont-sur-Lausanne, Switzerland",
    startDate: new Date("2020-01-01"),
    endDate: new Date("2023-12-31"),
    description: [
      "Managed cash operations, stock replenishment, and provided customer service every Sunday morning.",
    ],
    achievements: [],
    skills: ["Cash Handling", "Stock Management", "Customer Service", "Retail Operations"],
    type: "Professional",
    logo: "/experience/denner.png",
  },
  {
    id: "migros",
    position: "Cashier",
    company: "Migros",
    location: "Pully, Switzerland",
    startDate: new Date("june 2021"),
    endDate: new Date("2021-06-30"),
    description: [
      "Managed cash operations, stock replenishment, and provided customer service.",
    ],
    achievements: [],
    skills: ["Cash Handling", "Stock Management", "Customer Service"],
    type: "Professional",
    logo: "/experience/migros.png",
  },
];

export const featuredExperiences = experiences.slice(0, 3);