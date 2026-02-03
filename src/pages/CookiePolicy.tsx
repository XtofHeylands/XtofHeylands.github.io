import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

const CookiePolicy = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container mx-auto px-three-units py-five-units">
        <h1 className="text-4xl font-bold mb-8">{t("legal", "cookiePolicy")}</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("legal", "whatAreCookies")}</h2>
            <p className="text-muted-foreground">
              {t("legal", "whatAreCookiesText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("legal", "cookiesWeUse")}</h2>
            <p className="text-muted-foreground">
              {t("legal", "cookiesWeUseText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("legal", "manageCookies")}</h2>
            <p className="text-muted-foreground">
              {t("legal", "manageCookiesText")}
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicy;
