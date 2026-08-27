import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';
import Footer from '../../components/footer/Footer';

export default async function Home({ params }) {
  const { lng } = await params;

  return (
    <>
      <Header lng={lng} />
      <section className="container mx-auto px-4 pt-28">
        <Intro lng={lng} />
      </section>
      <Footer lng={lng} />
    </>
  );
}
