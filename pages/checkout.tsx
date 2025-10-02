export default function Checkout() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {/* Stripe payment flow will be implemented here */}
      <button className="bg-purple-600 text-white px-4 py-2 rounded">Pay Now</button>
    </div>
  );
}
