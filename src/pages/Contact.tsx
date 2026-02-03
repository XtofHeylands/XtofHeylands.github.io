import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/i18n/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { firstName, lastName, email, subject, message } = formData;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Build mailto link
    const recipient = "yves.heylands@stcc.be";
    const fullName = `${firstName} ${lastName}`;
    const body = `From: ${fullName}\nEmail: ${email}\n\n${message}`;
    
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your email app should open with the message ready to send.",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-three-units py-five-units">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-bold text-3xl md:text-5xl mb-8 text-center">{t("contact", "title")}</h1>
          
          <p className="text-muted-foreground text-center mb-12">
            {t("contact", "subtitle")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t("contact", "firstName")}</Label>
                <Input 
                  id="firstName" 
                  placeholder="John" 
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{t("contact", "lastName")}</Label>
                <Input 
                  id="lastName" 
                  placeholder="Doe" 
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("contact", "email")}</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">{t("contact", "subject")}</Label>
              <Input 
                id="subject" 
                placeholder={t("contact", "subjectPlaceholder")} 
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t("contact", "message")}</Label>
              <Textarea
                id="message"
                placeholder={t("contact", "messagePlaceholder")}
                rows={6}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full">
              {t("contact", "sendMessage")}
            </Button>
          </form>

          <div className="mt-16 pt-12 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-semibold mb-2">{t("contact", "location")}</h3>
              <p className="text-muted-foreground">
                Belgium, Limburg
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t("contact", "email")}</h3>
              <p className="text-muted-foreground">
                yves.heylands@stcc.be
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
