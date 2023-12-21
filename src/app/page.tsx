import { Actions, Contact, Footer, Header, Hero } from '@/sections';

export default function Home() {
  return (
    <main className="max-w-[1440px] grid grid-cols-mobile md:grid-cols-desktop my-0 mx-auto overflow-hidden lg:overflow-visible">
      <Header />
      <Hero />
      <Actions />
      <Contact />
      <Footer />
    </main>
  );
}
