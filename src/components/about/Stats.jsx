
const Stats = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border rounded-lg p-6 text-center shadow-sm">
          <div className="text-2xl font-bold">10.5k</div>
          <div className="text-sm text-gray-500">Sellers across the site</div>
        </div>

        <div className="bg-white border rounded-lg p-6 text-center shadow-sm">
          <div className="text-2xl font-bold text-rose-500">33k</div>
          <div className="text-sm text-gray-500">Monthly products sale</div>
        </div>

        <div className="bg-white border rounded-lg p-6 text-center shadow-sm">
          <div className="text-2xl font-bold">45.5k</div>
          <div className="text-sm text-gray-500">
            Customers active this year
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 text-center shadow-sm">
          <div className="text-2xl font-bold">25k</div>
          <div className="text-sm text-gray-500">
            Repeat purchases this year
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
