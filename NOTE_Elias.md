

## À faire
- [ ] Changer mon nom dans config/site.ts
- [ ] Remplacer la photo dans public/profile-img.jpg

## Commandes utiles
- Lancer le site : `npm run dev`
- Voir le site : http://localhost:3000

cd C:\Users\Elias\Desktop\minimal-next-portfolio
npm run dev

- Pour modifier les section qui apparaissent sur le site c'est dans : C:\Users\Elias\Desktop\Folio\minimal-next-portfolio\config\routes.ts



## Fichiers importants
- Mon contenu : `config/`
- Mes images : `public/`
- La navigation : `config/routes.ts`


pour rajouter des SKILLS : 
- rajouter le svg dans public/skill/
- layout.tsx et rajouter une ligne : 
  autocad: () => <img src="/skills/autocad.svg" alt="Autocad" width={64} height={64} />,

- puis dans skills.ts rajouter
    {
    name: "AutoCAD",
    description: "2D and 3D technical drawing.",
    rating: 3,
    icon: Icons.autocad,
  },