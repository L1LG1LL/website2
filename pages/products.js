import Link from 'next/link';

const products = [
  { id: 1, name: 'Product A', price: '$10' },
  { id: 2, name: 'Product B', price: '$15' },
  { id: 3, name: 'Product C', price: '$20' },
];

export default function Products() {
  return (
    <div>
      <h1>
        <Link href="/">website2</Link>
      </h1>
      <nav>
        <Link href="/products">Products</Link> |{' '}
        <Link href="/cart">Cart</Link>
      </nav>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price}
            {/* Later: Add "Add to Cart" button here */}
          </li>
        ))}
      </ul>
    </div>
  );
}