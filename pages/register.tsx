export default function Register() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {/* Registration form goes here */}
      <form>
        <input type="email" placeholder="Email" className="block border mb-2 p-2"/>
        <input type="password" placeholder="Password" className="block border mb-2 p-2"/>
        <input type="text" placeholder="Name" className="block border mb-2 p-2"/>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
}
