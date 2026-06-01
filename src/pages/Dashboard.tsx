const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl text-yellow-500 mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-zinc-900 p-6 rounded">
          Add Project
        </div>

        <div className="bg-zinc-900 p-6 rounded">
          Manage Projects
        </div>

        <div className="bg-zinc-900 p-6 rounded">
          Contact Leads
        </div>

      </div>

    </div>
  );
};

export default Dashboard;