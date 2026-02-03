import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone } from "lucide-react";
import Profile_Yves from "@/assets/About_Profile_Yves.png"
import Profile_Christophe from "@/assets/About_Profile_Christophe.png"

const teamMembers = [
  {
    name: "Yves Heylands",
    initials: "YH",
    email: "yves.heylands@stcc.be",
    phone: "+32 475 73 39 90",
    image: Profile_Yves,
  },
  {
    name: "Christophe Heylands",
    initials: "CH",
    email: "christophe.heylands@stcc.be",
    phone: "+32 477 35 92 44",
    image: Profile_Christophe,
  },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container mx-auto px-three-units py-five-units">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold text-3xl md:text-5xl mb-12 text-center">{t("about", "title")}</h1>
          
          {/* Our Story Section */}
          <section className="mb-16">
            <h2 className="font-bold text-2xl md:text-3xl mb-6">{t("about", "storyTitle")}</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8 text-justify">
              {t("about", "storyText")}
            </p>
            
            {/* Team Profiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.name} className="bg-card">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-xl bg-muted">{member.initials}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-xl mb-3">{member.name}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 hover:text-foreground transition-colors">
                        <Mail className="h-4 w-4" />
                        <span>{member.email}</span>
                      </a>
                      <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 hover:text-foreground transition-colors">
                        <Phone className="h-4 w-4" />
                        <span>{member.phone}</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* What We Do Section */}
          <section className="mb-16">
            <h2 className="font-bold text-2xl md:text-3xl mb-6">{t("about", "whatWeDoTitle")}</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4 text-justify">
              {t("about", "whatWeDoText")}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground text-justify">
              {t("about", "uponRequest")}
            </p>
          </section>

          {/* Growing Expertise Section */}
          <section className="mb-16">
            <h2 className="font-bold text-2xl md:text-3xl mb-6">{t("about", "expertiseTitle")}</h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-justify">
              {t("about", "expertiseText")}
            </p>
          </section>

          {/* More Than a Service Section */}
          <section className="mb-12">
            <h2 className="font-bold text-2xl md:text-3xl mb-6">{t("about", "moreTitle")}</h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-justify">
              {t("about", "moreText")}
            </p>
          </section>

          {/* Welcome Message */}
          <div className="border-t border-border pt-8 text-center">
            <p className="text-xl italic text-muted-foreground">{t("about", "welcome")}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
