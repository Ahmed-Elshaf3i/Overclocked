
const Features = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <div className="text-3xl mb-2">🚚</div>
          <div className="font-semibold">Free and Fast Delivery</div>
          <div className="text-sm text-gray-500">On selected products</div>
        </div>

        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <div className="text-3xl mb-2">📞</div>
          <div className="font-semibold">24/7 Customer Service</div>
          <div className="text-sm text-gray-500">Friendly support team</div>
        </div>

        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <div className="text-3xl mb-2">💰</div>
          <div className="font-semibold">Money Back Guarantee</div>
          <div className="text-sm text-gray-500">30-day refund policy</div>
        </div>
      </div>
    </section>
  );
};

export default Features;
