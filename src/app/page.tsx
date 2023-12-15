import { Actions, Contact, Features, Footer, Header, Hero } from '@/sections';

export default function Home() {
  return (
    <main className="max-w-[1440px] grid grid-cols-mobile sm:grid-cols-custom	 my-0 mx-auto overflow-hidden lg:overflow-visible">
      <Header />
      <Hero />
      <Actions />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
