import { Layout } from "@/components/Layout";
import { Wrench, Hammer, Car, Warehouse } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Wrench,
      title: t("services", "maintenance"),
      description: t("services", "maintenanceDesc"),
    },
    {
      icon: Warehouse,
      title: t("services", "storage"),
      description: t("services", "storageDesc"),
    },
    {
      icon: Car,
      title: t("services", "transport"),
      description: t("services", "transportDesc"),
    },
    {
      icon: Hammer,
      title: t("services", "engineering"),
      description: t("services", "engineeringDesc"),
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-three-units py-five-units">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-bold text-3xl md:text-5xl mb-6">{t("services", "title")}</h1>
          <p className="text-muted-foreground text-lg">
            {t("services", "subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-8 border border-border rounded-lg hover:border-foreground transition-colors group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="h-10 w-10 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
