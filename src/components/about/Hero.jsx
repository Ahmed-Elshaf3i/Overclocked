
const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 items-center">
      <div>
        <h2 className="text-4xl font-extrabold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          Launched in 2015, Exclusive is South Asia’s premier online shopping
          marketplace with an active presence in Bangladesh. Supported by a wide
          range of tailored marketing, data and service solutions, we partner
          with thousands of sellers and brands to serve millions of customers
          across the region.
        </p>
        <p className="text-gray-600">
          Exclusive has more than 1 million products to offer and continues to
          grow rapidly, providing a diverse assortment across categories.
        </p>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1520975918221-8f2d0b8dd8d4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=5d0a4741b6f2a9a4d1e8bdb0a5e3c1e9"
          alt="Shopping"
          className="w-full rounded-lg shadow-lg object-cover h-72 md:h-96"
        />
      </div>
    </section>
  );
};

export default Hero;
