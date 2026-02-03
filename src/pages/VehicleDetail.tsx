import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { vehicles } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <Layout>
        <div className="container mx-auto px-three-units py-five-units text-center">
          <h1 className="text-2xl font-bold mb-4">{t("sales", "vehicleNotFound")}</h1>
          <Button asChild>
            <Link to="/sales">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("sales", "backToSales")}
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  const features = vehicle.features[language];
  const description = vehicle.description[language];

  return (
    <Layout>
      <div className="container mx-auto px-three-units py-five-units">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/sales">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("sales", "backToSales")}
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Carousel */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src={vehicle.images[currentImageIndex]}
                alt={`${vehicle.name} - ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {vehicle.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-3 right-3 bg-background/80 px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {vehicle.images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {vehicle.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex
                        ? "border-primary"
                        : "border-transparent hover:border-muted-foreground/50"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${vehicle.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Vehicle Details */}
          <div className="space-y-6">
            <div>
              <h1 className="font-bold text-3xl md:text-4xl mb-2">{vehicle.name}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>{vehicle.mileage}</span>
                <span>•</span>
                <span>{vehicle.year}</span>
              </div>
            </div>

            <div className="text-3xl md:text-4xl font-bold text-primary">
              € {vehicle.price.toLocaleString("nl-BE")}
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="text-xl font-semibold mb-4">{t("sales", "description")}</h2>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="text-xl font-semibold mb-4">{t("sales", "features")}</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/contact">{t("sales", "inquireNow")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VehicleDetail;
