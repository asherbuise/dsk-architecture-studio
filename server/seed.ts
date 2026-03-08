import { db } from "./db";
import { projects } from "@shared/schema";

const seedProjects = [
  {
    title: "Kloof Street Residence",
    description: "A contemporary residential home that embraces Cape Town's mountainous terrain. Raw concrete meets floor-to-ceiling glass, creating a dialogue between interior warmth and the rugged landscape beyond.",
    category: "Residential",
    imageUrl: "/images/project-1.png",
    year: 2024,
    location: "Cape Town, South Africa",
    featured: true,
  },
  {
    title: "Foreshore Commerce Tower",
    description: "An angular commercial complex defined by its exposed concrete facade and geometric precision. The building responds to Cape Town's coastal winds with calculated apertures and shaded corridors.",
    category: "Commercial",
    imageUrl: "/images/project-2.png",
    year: 2023,
    location: "Cape Town, South Africa",
    featured: true,
  },
  {
    title: "Sea Point Penthouse",
    description: "Elevated living distilled to its essence. Polished concrete floors reflect the Atlantic light while minimal interventions frame panoramic ocean views across every axis.",
    category: "Interior",
    imageUrl: "/images/project-3.png",
    year: 2024,
    location: "Sea Point, Cape Town",
    featured: true,
  },
  {
    title: "District Six Cultural Centre",
    description: "A cantilever of memory and material. This cultural institution uses raw concrete and weathering steel to honor the district's history while projecting a bold architectural future.",
    category: "Cultural",
    imageUrl: "/images/project-4.png",
    year: 2022,
    location: "District Six, Cape Town",
    featured: false,
  },
  {
    title: "Green Point Sustainability Hub",
    description: "An office building where living walls and timber louvers soften the urban edge. Passive cooling systems and natural ventilation reduce energy consumption by sixty percent.",
    category: "Commercial",
    imageUrl: "/images/project-5.png",
    year: 2023,
    location: "Green Point, Cape Town",
    featured: false,
  },
  {
    title: "Stellenbosch Memorial Chapel",
    description: "Sacred geometry rendered in concrete. A single cross-shaped void cuts through the mass, drawing a blade of light across the interior that shifts with the hours.",
    category: "Cultural",
    imageUrl: "/images/project-6.png",
    year: 2021,
    location: "Stellenbosch, South Africa",
    featured: false,
  },
];

export async function seedDatabase() {
  const existing = await db.select().from(projects);
  if (existing.length === 0) {
    await db.insert(projects).values(seedProjects);
    console.log("Seeded database with project data");
  }
}
