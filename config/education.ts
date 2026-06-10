export interface CourseInterface {
  name: string;
  description?: string;
}

export interface EducationInterface {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  specialization?: string;
  description: string;
  logo: string;
  schoolUrl?: string;
  courses: CourseInterface[];
}

export const educations: EducationInterface[] = [
  {
    id: "epfl-master",
    degree: "Master's degree in Microengineering",
    school: "EPFL",
    location: "Lausanne, Switzerland",
    startDate: new Date("2025-09-01"),
    endDate: "Present",
    specialization: "Minor in Biomedical Technologies",
    description: "Master's degree in Microengineering with a minor in Biomedical Technologies.",
    logo: "/education/epfl.png",
    schoolUrl: "https://www.epfl.ch",
    courses: [
  { name: "Machine Learning I" },
  { name: "Products Design & Systems Engineering" },
  { name: "Microengineering Project I" },
  { name: "Industrial Design" },
  { name: "Advanced MEMS & Microsystems" },
  { name: "Introduction to Additive Manufacturing" },
  { name: "Materials Processing with Intelligent Systems" },
  { name: "Nanotechnology" },
  { name: "Machine Learning Programming" },
  { name: "Bioelectronics and Biomedical Microelectronics" },
  { name: "Biomechanics of the Musculoskeletal System" },
  { name: "Cellular Biology and Biochemistry for Engineers" },
  { name: "New Tools & Research Strategies in Personalized Health" },
  { name: "Regulatory, Quality and Clinical Affairs" },
],
  },
  {
    id: "epfl-bridging",
    degree: "Bridging year to Master",
    school: "EPFL",
    location: "Lausanne, Switzerland",
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-06-30"),
    description: "Bridging year preparing for the Master's program in Microengineering.",
    logo: "/education/epfl.png",
    schoolUrl: "https://www.epfl.ch",
    courses: [
  { name: "Analysis III" },
  { name: "Analysis IV" },
  { name: "Automatique et commande numérique" },
  { name: "Eléments de statistiques pour les datasciences" },
  { name: "Ingénierie optique" },
  { name: "Physique générale : électromagnétisme" },
  { name: "Signaux et systèmes I" },
  { name: "Signaux et systèmes II" },
  { name: "Actionneurs et systèmes électromagnétiques I" },
  { name: "Actionneurs et systèmes électromagnétiques II" },
  { name: "Capteurs" },
  { name: "Microfabrication practicals" },
  { name: "Systèmes embarqués et robotique" },
],
  },
  {
    id: "laval-exchange",
    degree: "Exchange Program: Mechanical Engineering",
    school: "Laval University",
    location: "Québec, Canada",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-06-30"),
    description: "Practical fabrication experience using CNC machining and robotic arm programming, applied through multiple mechanical design and manufacturing projects.",
    logo: "/education/laval.png",
    schoolUrl: "https://www.ulaval.ca",
    courses: [
  { "name": "Entrepreneuriat technologique" },
  { "name": "Ingénierie et conception I" },
  { "name": "Investigation expérimentale en génie mécanique" },
  { "name": "Procédés et développement de produits" },
  { "name": "Ingénierie et conception II" },
  { "name": "Introduction à la mesure et à la mécatronique" },
  { "name": "Fabrication assistée par ordinateur" },
  { "name": "Introduction à l'ergonomie" }
],
    },
  {
    id: "hearc-bachelor",
    degree: "BSc. Industrial Design Engineering",
    school: "HE-Arc Ingénierie",
    location: "Neuchâtel, Switzerland",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2024-06-30"),
    specialization: "Ergonomics and Design",
    description: "Focus on integrating user experience (UX/UI) with technical conception and development.",
    logo: "/education/hearc.png",
    schoolUrl: "https://www.he-arc.ch",
    courses: [
  { "name": "Electricite et Informatique TIN" },
  { "name": "Conception I" },
  { "name": "Communication" },
  { "name": "Sciences IA" },
  { "name": "Sciences IB" },
  { "name": "Chimie et Materiaux" },
  { "name": "Langue - Anglais" },
  { "name": "Sciences II IDE" },
  { "name": "Matériaux IDE" },
  { "name": "Anthropotechnologie et Ergonomie I" },
  { "name": "Conception II" },
  { "name": "Electronique et procédés de fabrication" },
  { "name": "Conception de produit" }
],
  },
  {
    id: "cpnv-bridging",
    degree: "Bridging year to Bachelor of Applied Science",
    school: "CPNV",
    location: "Yverdon-sur-les-Bains, Switzerland",
    startDate: new Date("2020-09-01"),
    endDate: new Date("2021-06-30"),
    description: "Engineering foundation in mechanics, electronics, automation and robotics, with hands-on projects.",
    logo: "/education/cpnv.png",
    schoolUrl: "https://www.cpnv.ch",
    courses: [],
  },
];