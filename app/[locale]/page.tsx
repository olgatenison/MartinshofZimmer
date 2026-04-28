export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <main style={{ padding: "40px" }}>
      <h1>{messages.test}</h1>
      <p>Current locale: {locale}</p>
    </main>
  );
}