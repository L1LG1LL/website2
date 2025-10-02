import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>
        <Link href="/">website2</Link>
      </h1>
      <nav>
        <Link href="/products">Products</Link> |{' '}
        <Link href="/cart">Cart</Link>
      </nav>
      <p>Welcome to your new website!</p>
    </div>
  );
}
