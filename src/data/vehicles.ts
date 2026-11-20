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
const galionImages = loadVehicleImages("Renault_Galion");

export interface Vehicle {
  id: string;
  name: string;
  year: number;
  mileage: string;
  price: number;
  discountPrice?: number;
  sold: boolean;
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
    sold: true,
    images: cortinaImages,
    features: {
      NL: [
        "Originele 1.2L, 4 cilinder motor",
        "4-versnellingen handgeschakeld",
        "Achterwielaandrijving",
        "Licht groen exterieur",
        "Groen interieur",
        "Originele handleiding EN en NL",
      ],
      EN: [
        "Original 1.2L, 4-cylinder engine",
        "4-speed manual transmission",
        "Rear-wheel drive",
        "Light green exterior",
        "Green interior",
        "Original owner's manual EN and NL",
      ],

      FR: [
        "Moteur d'origine 1,2 L à 4 cylindres",
        "Boîte manuelle à 4 vitesses",
        "Propulsion arrière",
        "Extérieur vert clair",
        "Intérieur vert",
        "Manuel d'origine en EN et NL",
      ],

      DE: [
        "Originaler 1,2-Liter-4-Zylinder-Motor",
        "4-Gang-Schaltgetriebe",
        "Hinterradantrieb",
        "Hellgrünes Exterieur",
        "Grünes Interieur",
        "Originales Handbuch auf EN und NL",
      ],
    },
    description: {
      NL: "Wagen start, rijdt, remt en schakelt zeer goed. Mechanische en elektrische conditie ok. Chassis in zeer goede staat. Carrosserie ook in goede staat (originele lak met lichte gebruikssporen). Interieur in zeer goede staat. In het algemeen zeer goed onderhouden wagen. Uiterst zeldzame uitvoering.",
      EN: "The car starts, drives, brakes, and shifts very well. Mechanical and electrical condition is OK. Chassis is in very good condition. Bodywork is also in good condition (original paint with light signs of use). Interior is in very good condition. Overall, a very well-maintained car. Extremely rare version.",
      FR: "La voiture démarre, roule, freine et passe les vitesses très bien. L'état mécanique et électrique est correct. Le châssis est en très bon état. La carrosserie est également en bon état (peinture d'origine avec de légères traces d'utilisation). L'intérieur est en très bon état. Dans l'ensemble, voiture très bien entretenue. Version extrêmement rare.",
      DE: "Das Fahrzeug startet, fährt, bremst und schaltet sehr gut. Mechanischer und elektrischer Zustand in Ordnung. Das Fahrgestell ist in sehr gutem Zustand. Die Karosserie ist ebenfalls in gutem Zustand (Originallack mit leichten Gebrauchsspuren). Der Innenraum ist in sehr gutem Zustand. Insgesamt ein sehr gut gepflegtes Fahrzeug. Äußerst seltene Ausführung.",
    },
  },
  {
    id: "Renault Galion",
    name: "Renault Galion R2167",
    year: 1960,
    mileage: "20.320 km",
    price: 12500,
    discountPrice: 10500,
    sold: false,
    images: galionImages,
    features: {
      NL: [
        "Datum eerste inschrijving: 10/03/1960",
        "Kilometerstand: 20.320 km",
        "2141cc, 4-cilinder benzinemotor (80pk)",
        "4 versnellingen handgeschakeld",
        "2 zitplaatsen",
        "Grijs exterieur",
        "Grijs/beige interieur",
        "Originele Franse handleiding",
        "Origineel onderhoudsboekje & factuur",
        "Gekeurd tot 05/05/2031"
      ],
      EN: [
        "Date of first registration: 10/03/1960",
        "Mileage: 20.320 km",
        "2141cc, 4-cylinder petrol engine (80hp)",
        "4-speed manual transmission",
        "2 seats",
        "Grey exterior",
        "Grey/Beige interior",
        "Original maintenance booklet & invoice",
        "Original owner's manual in French",
        "MOT valid until 05/05/2031",
      ],

      FR: [
        "Date de première immatriculation: 10/03/1960",
        "Kilométrage: 20.320 km",
        "Moteur essence 4 cylindres 2141cc (80ch)",
        "Boîte manuelle à 4 vitesses",
        "2 places assises",
        "Extérieur gris",
        "Intérieur gris/beige",
        "Carnet d'entretien d'origine & facture",
        "Manuel d'origine en français",
        "Contrôle technique valable jusqu'au 05/05/2031",
      ],

      DE: [
        "Datum der ersten Zulassung: 10/03/1960",
        "Kilometerstand: 20.320 km",
        "2141ccm 4-Zylinder-Benzinmotor (80PS)",
        "4-Gang-Schaltgetriebe",
        "2 Sitzplätze",
        "Graues Exterieur",
        "Grau/Beiges Interieur",
        "Originales Wartungsheft & Rechnung",
        "Originales Handbuch auf Französisch",
        "HU gültig bis 05/05/2031",
      ],
    },
    description: {
      NL: "Renault Galion type R2167 van 1960 te koop. Volledig origineel voertuig uit Frankrijk. Kleine vrachtwagen met totaalgewicht 4.9 ton, leeggewicht 2.1 ton, laadvermogen 2.8 ton. Start, rijdt, remt en schakelt zeer goed. Mechanische en elektrische toestand volledig ok. Chassis in perfecte staat. Carrosserie in perfecte staat (originele lak met lichte gebruikssporen). Interieur in zeer goede staat. Perfect onderhouden. Uiterst zeldzame oldtimer.",
      EN: "1960 Renault Galion type R2167 for sale. Fully original vehicle from France. Small truck with a gross weight of 4.9 tonnes, kerb weight 2.1 tonnes, payload 2.8 tonnes. Starts, drives, brakes, and shifts very well. Mechanical and electrical condition fully OK. Chassis in perfect condition. Bodywork in perfect condition (original paint with light signs of use). Interior in very good condition. Perfectly maintained. Extremely rare classic vehicle.",
      FR: "Renault Galion type R2167 de 1960 à vendre. Véhicule entièrement d'origine, provenant de France. Petit camion avec un poids total de 4,9 tonnes, poids à vide de 2,1 tonnes, charge utile de 2,8 tonnes. Démarre, roule, freine et passe les vitesses très bien. État mécanique et électrique parfaitement correct. Châssis en parfait état. Carrosserie en parfait état (peinture d'origine avec de légères traces d'utilisation). Intérieur en très bon état. Parfaitement entretenu. Véhicule de collection extrêmement rare.",
      DE: "Renault Galion Typ R2167 von 1960 zu verkaufen. Vollständig originales Fahrzeug aus Frankreich. Kleiner Lastwagen mit einem Gesamtgewicht von 4,9 Tonnen, Leergewicht 2,1 Tonnen, Nutzlast 2,8 Tonnen. Startet, fährt, bremst und schaltet sehr gut. Mechanischer und elektrischer Zustand vollständig in Ordnung. Fahrgestell in perfektem Zustand. Karosserie in perfektem Zustand (Originallack mit leichten Gebrauchsspuren). Innenraum in sehr gutem Zustand. Perfekt gepflegt. Äußerst seltenes Oldtimer-Fahrzeug.",
    },
  },
];
