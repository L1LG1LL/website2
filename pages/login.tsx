export default function Login() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {/* Login form goes here */}
      <form>
        <input type="email" placeholder="Email" className="block border mb-2 p-2"/>
        <input type="password" placeholder="Password" className="block border mb-2 p-2"/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
}
