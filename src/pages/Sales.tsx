import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { vehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/VehicleCard";

const Sales = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container mx-auto px-three-units py-five-units">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-bold text-3xl md:text-5xl mb-6">{t("sales", "title")}</h1>
          <p className="text-muted-foreground text-lg">
            {t("sales", "subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Sales;
