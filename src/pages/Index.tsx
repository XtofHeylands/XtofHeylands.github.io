import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Wrench, Car, Users } from "lucide-react";
import garageIllustration from "@/assets/garage-illustration.svg";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout showFooter={true} transparentNavbar={true}>
      {/* Hero Section */}
      <section className="bg-background min-h-screen flex items-center pt-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                {t("home", "heroTitle")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in" style={{ animationDelay: "100ms" }}>
                {t("home", "heroSubtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Button size="lg" asChild>
                  <Link to="/services">{t("home", "ourServices")}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent border-foreground hover:bg-foreground/10">
                  <Link to="/contact">{t("home", "getInTouch")}</Link>
                </Button>
              </div>
            </div>
            
            {/* Image with blur effect on all edges */}
            <div className="relative animate-fade-in" style={{ animationDelay: "150ms" }}>
              <div 
                className="relative"
                style={{
                  maskImage: 
                   `linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%),
                    linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)`,
                  maskComposite: "intersect",

                  WebkitMaskImage: 
                   `linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%),
                    linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)`,
                  WebkitMaskComposite: "destination-in",
                }}
              >
                <img 
                  src={garageIllustration} 
                  alt="Classic cars in garage" 
                  className="w-full h-auto dark:invert"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
