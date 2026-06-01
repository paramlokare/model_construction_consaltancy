const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-lg w-96">
        <h1 className="text-3xl text-yellow-500 mb-6">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-zinc-800 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 bg-zinc-800 rounded"
        />

        <button className="w-full bg-yellow-500 text-black p-3 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;