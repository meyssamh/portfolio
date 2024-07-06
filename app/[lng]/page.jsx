import { Header } from '../../components/header/client';
import Intro from '../../components/intro/Intro';
import Projects from '../../components/projects/Projects';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

export default async function Home({ params: { lng } }) {

  return (
    <>
      <Header lng={lng} />
      <main className='container mx-auto px-4'>
        <Intro lng={lng} />
        <Projects lng={lng} />
        <About lng={lng} />
        <Contact lng={lng} />
      </main>
      <Footer lng={lng} />
    </>
  );
}
