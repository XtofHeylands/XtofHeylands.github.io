import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

const Terms = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container mx-auto px-three-units py-five-units">
        <h1 className="text-4xl font-bold mb-8">{t("legal", "terms")}</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("legal", "generalProvisions")}</h2>
            <p className="text-muted-foreground">
              {t("legal", "generalProvisionsText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("legal", "servicesDescription")}</h2>
            <p className="text-muted-foreground">
              {t("legal", "servicesDescriptionText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("legal", "liability")}</h2>
            <p className="text-muted-foreground">
              {t("legal", "liabilityText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("legal", "applicableLaw")}</h2>
            <p className="text-muted-foreground">
              {t("legal", "applicableLawText")}
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
