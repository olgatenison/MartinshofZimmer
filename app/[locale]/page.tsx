import BenefitsSection from "@/components/BenefitsSection";
import First from "@/components/First";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import MartinshofLandingPage from "@/components/MartinshofLandingPage";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <main style={{ padding: "40px" }} className="bg-(--bezel) text-[#14231c]">
      {/* <h1>{messages.test}</h1>
      <p>Current locale: {locale}</p> */}
      {/* <MartinshofHeroSection /> */}
      <Header />
      <Hero />
      <First />
      <BenefitsSection />
      <MartinshofLandingPage />
    </main>
  );
}
