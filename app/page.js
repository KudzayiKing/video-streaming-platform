'use client';
import Navigation from './navigation';
import Banner from './banner';
import ShowsCarousel from './showsCarousel';
import DocumentariesCarousel from './documentariesCarousel';
import MyListCarousel from './myListCarousel';
import HyperBanner from './hyperBanner';

const Home = () => {
  return (
    <div>
      <Navigation />
      <main className="pt-14">
        <Banner />
        <section>
          <ShowsCarousel />
          <DocumentariesCarousel />
          <HyperBanner />
          <MyListCarousel />
        </section>
      </main>
    </div>
  )
}

export default Home;
