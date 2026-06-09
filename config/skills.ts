import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Fusion 360",
    description: "3D modeling and mechanical design.",
    rating: 5,
    icon: Icons.fusion360,
  },
  {
    name: "SolidWorks",
    description: "Computer-aided design and simulation.",
    rating: 5,
    icon: Icons.solidworks,
  },
  {
    name: "3D Printing",
    description: "Rapid prototyping and additive manufacturing.",
    rating: 5,
    icon: Icons.print3d,
  },
  {
    name: "PowerPoint",
    description: "Professional presentation design and storytelling.",
    rating: 5,
    icon: Icons.powerpoint,
  },
  {
    name: "Word",
    description: "Document writing and formatting.",
    rating: 5,
    icon: Icons.word,
  },
  {
    name: "Arduino",
    description: "Microcontroller programming and electronic prototyping.",
    rating: 4,
    icon: Icons.arduino,
  },
  {
    name: "Excel",
    description: "Data analysis, spreadsheets and automation.",
    rating: 4,
    icon: Icons.excel,
  },
  {
    name: "PalmSens",
    description: "Electrochemistry and analytical instrumentation.",
    rating: 4,
    icon: Icons.palmsens,
  },
  {
    name: "Matlab",
    description: "Numerical computing, simulation and data processing.",
    rating: 3,
    icon: Icons.matlab,
  },
  {
    name: "NX CAD",
    description: "Advanced modeling and industrial design.",
    rating: 3,
    icon: Icons.nxcad,
  },
  {
    name: "AutoCAD",
    description: "2D and 3D technical drawing.",
    rating: 3,
    icon: Icons.autocad,
  },
  {
    name: "Python",
    description: "Programming and data processing.",
    rating: 3,
    icon: Icons.python,
  },
  {
    name: "LabVIEW",
    description: "Data acquisition and measurement automation.",
    rating: 3,
    icon: Icons.labview,
  },
  {
    name: "CNC Machine",
    description: "Numerical machining and mechanical part manufacturing.",
    rating: 3,
    icon: Icons.machineCNC,
  },
  {
    name: "Cleanroom",
    description: "Microfabrication and cleanroom processes.",
    rating: 3,
    icon: Icons.wafer,
  },
  {
    name: "Adobe Illustrator",
    description: "Vector graphics and design.",
    rating: 3,
    icon: Icons.illustrator,
  },
  {
    name: "Blender",
    description: "3D modeling and rendering.",
    rating: 2,
    icon: Icons.blender,
  },
  {
    name: "Adobe Photoshop",
    description: "Photo editing and image creation.",
    rating: 2,
    icon: Icons.photoshop,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);