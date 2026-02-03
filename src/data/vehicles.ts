// Helper to load all images from a vehicle folder using Vite's glob import
function loadVehicleImages(folderName: string): string[] {
  const allImages = import.meta.glob<{ default: string }>(
    "@/assets/vehicles/**/*.{jpg,jpeg,png,webp}",
    { eager: true }
  );

  // Filter images by folder and sort numerically
  const folderImages = Object.entries(allImages)
    .filter(([path]) => path.includes(`/${folderName}/`))
    .sort(([a], [b]) => {
      // Extract numbers from filenames for natural sorting
      const numA = parseInt(a.match(/(\d+)\.[^.]+$/)?.[1] || "0");
      const numB = parseInt(b.match(/(\d+)\.[^.]+$/)?.[1] || "0");
      return numA - numB;
    })
    .map(([, module]) => module.default);

  return folderImages;
}

// Load images for each vehicle folder - just specify the folder name
const cortinaImages = loadVehicleImages("Ford_Cortina");

export interface Vehicle {
  id: string;
  name: string;
  year: number;
  mileage: string;
  price: number;
  images: string[];
  features: {
    NL: string[];
    EN: string[];
    FR: string[];
    DE: string[];
  };
  description: {
    NL: string;
    EN: string;
    FR: string;
    DE: string;
  };
}

export const vehicles: Vehicle[] = [
  {
    id: "Ford Cortina",
    name: "Ford Cortina Estate",
    year: 1966,
    mileage: "8.630 km",
    price: 8900,
    images: cortinaImages,
    features: {
      NL: [
        "Originele 1.2L, 4 cilinder motor",
        "4-versnellingen handgeschakeld",
        "Achterwielaandrijving",
        "Licht groen exterieur",
        "Groen interieur",
        "Originele handleiding in Nederlands en Engels",
      ],
      EN: [
        "Original 1.2L, 4-cylinder engine",
        "4-speed manual transmission",
        "Rear-wheel drive",
        "Light green exterior",
        "Green interior",
        "Original owner's manual in Dutch and English",
      ],

      FR: [
        "Moteur d'origine 1,2 L à 4 cylindres",
        "Boîte manuelle à 4 vitesses",
        "Propulsion arrière",
        "Extérieur vert clair",
        "Intérieur vert",
        "Manuel d'origine en néerlandais et en anglais",
      ],

      DE: [
        "Originaler 1,2-Liter-4-Zylinder-Motor",
        "4-Gang-Schaltgetriebe",
        "Hinterradantrieb",
        "Hellgrünes Exterieur",
        "Grünes Interieur",
        "Originales Handbuch auf Niederländisch und Englisch",
      ],
    },
    description: {
      NL: "Wagen start, rijdt, remt en schakelt zeer goed. Mechanische en elektrische conditie ok. Chassis in zeer goede staat. Carrosserie ook in goede staat (originele lak met lichte gebruikssporen). Interieur in zeer goede staat. In het algemeen zeer goed onderhouden wagen. Uiterst zeldzame uitvoering.",
      EN: "The car starts, drives, brakes, and shifts very well. Mechanical and electrical condition is OK. Chassis is in very good condition. Bodywork is also in good condition (original paint with light signs of use). Interior is in very good condition. Overall, a very well-maintained car. Extremely rare version.",
      FR: "La voiture démarre, roule, freine et passe les vitesses très bien. L'état mécanique et électrique est correct. Le châssis est en très bon état. La carrosserie est également en bon état (peinture d'origine avec de légères traces d'utilisation). L'intérieur est en très bon état. Dans l'ensemble, voiture très bien entretenue. Version extrêmement rare.",
      DE: "Das Fahrzeug startet, fährt, bremst und schaltet sehr gut. Mechanischer und elektrischer Zustand in Ordnung. Das Fahrgestell ist in sehr gutem Zustand. Die Karosserie ist ebenfalls in gutem Zustand (Originallack mit leichten Gebrauchsspuren). Der Innenraum ist in sehr gutem Zustand. Insgesamt ein sehr gut gepflegtes Fahrzeug. Äußerst seltene Ausführung.",
    },
  },
];
