import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout showFooter={false}>
      <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="text-center">
          <h3 className="text-lg font-medium text-muted-foreground mb-4">
            {t("notFound", "oops")}
          </h3>
          <h1 className="text-[180px] md:text-[252px] font-black leading-none -my-5 tracking-[-20px]">
            404
          </h1>
          <div className="max-w-md mx-auto mt-4 mb-8">
            <p className="text-muted-foreground">
              {t("notFound", "sorry")}
            </p>
          </div>
          <Button asChild>
            <Link to="/">{t("notFound", "goHome")}</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
