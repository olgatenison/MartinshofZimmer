import BenefitsSection from "@/components/BenefitsSection";
import ConditionsSection from "@/components/ConditionsSection";
import ContactSection from "@/components/ContactSection";
import First from "@/components/First";
import Footer from "@/components/Footer";
import Funktional from "@/components/Funktional";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TargetGroups from "@/components/TargetGroups";
import WhyMartinshof from "@/components/WhyMartinshof";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <main className=" pt-10 bg-(--bezel) text-[#14231c]">
      {/* <h1>{messages.test}</h1>
      <p>Current locale: {locale}</p> */}

      <Header />
      <Hero />
      <First />
      <BenefitsSection />
      <Funktional />
      <TargetGroups />
      <ConditionsSection />
      <WhyMartinshof />
      <ContactSection />
      <Footer />
    </main>
  );
}
