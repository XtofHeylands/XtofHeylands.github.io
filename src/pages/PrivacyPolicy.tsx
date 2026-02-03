import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container mx-auto px-three-units py-five-units">
        <h1 className="text-4xl font-bold mb-8">{t("legal", "privacyPolicy")}</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("legal", "dataCollection")}</h2>
            <p className="text-muted-foreground">
              {t("legal", "dataCollectionText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("legal", "dataUsage")}</h2>
            <p className="text-muted-foreground">
              {t("legal", "dataUsageText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("legal", "dataProtection")}</h2>
            <p className="text-muted-foreground">
              {t("legal", "dataProtectionText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("legal", "yourRights")}</h2>
            <p className="text-muted-foreground">
              {t("legal", "yourRightsText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("legal", "contact")}</h2>
            <p className="text-muted-foreground">
              {t("legal", "contactText")}
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
