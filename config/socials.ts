import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@EliasP-MT",
    icon: Icons.gitHub,
    link: "https://github.com/EliasP-MT",
  },
  {
    name: "LinkedIn",
    username: "Elias Pajot",
    icon: Icons.linkedin,
    link: "https://linkedin.com/in/elias-pajot",
  },
  {
    name: "Gmail",
    username: "elias.pajot@gmail.com",
    icon: Icons.gmail,
    link: "mailto:elias.pajot@gmail.com",
  },
];
