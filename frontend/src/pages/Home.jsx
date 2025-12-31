import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="rounded-lg bg-white shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900">
                Organize your thoughts with Note-App ✨
              </h1>
              <p className="mt-4 text-gray-600">
                Capture quick thoughts, structure tasks, and keep everything in
                one place. Fast, simple, and delightful.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#notes"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
                >
                  View my notes
                </a>

                <a
                  href="#new"
                  className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  New note
                </a>
              </div>

              <p className="mt-6 text-sm text-gray-500">
                Signed in as{" "}
                <span className="font-medium text-gray-800">
                  {user?.email || "you@domain.com"}
                </span>
              </p>
            </div>

            <div className="p-4">
              <div className="border rounded-lg h-80 bg-gray-100 p-4 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="h-3 w-24 bg-gray-200 rounded" />
                  <div className="h-3 w-12 bg-gray-200 rounded" />
                </div>

                <div className="flex-1 overflow-y-auto space-y-3">
                  <div className="bg-white p-3 rounded shadow-sm">
                    <h3 className="font-semibold">Project ideas</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Brainstorm the next app feature.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded shadow-sm">
                    <h3 className="font-semibold">Grocery list</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Milk, Eggs, Coffee, Bread
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded shadow-sm">
                    <h3 className="font-semibold">Meeting notes</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Key takeaways and action items.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="notes" className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Your Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-sm">Sample note 1</div>
            <div className="bg-white p-4 rounded shadow-sm">Sample note 2</div>
            <div className="bg-white p-4 rounded shadow-sm">Sample note 3</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
