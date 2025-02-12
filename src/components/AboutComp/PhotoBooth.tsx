"use client";

export default function WorkOverview() {
  return (
    <section className="pt-5 pb-5 bg-white">
      <div className="text-center mb-4">

        <h1 className="text-3xl font-bold text-[#6b1b55]">WORK OVERVIEW</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
        {/* Album */}
        <div className="relative group">
          <img
            src="/assests/about1.JPG"
            alt="Album"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">Under Ladder Cabinet</h3>
          </div>
        </div>

        {/* Blog */}
        <div className="relative group">
          <img
            src="/assests/about2.JPG"
            alt="Blog"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">Study Desk</h3>
          </div>
        </div>

        {/* Contact */}
        <div className="relative group">
          <img
            src="/assests/about3.JPG"
            alt="Contact"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">Wardrobe</h3>
          </div>
        </div>

        {/* Investment */}
        <div className="relative group sm:col-span-2 md:col-span-3 lg:col-span-2">
          <img
            src="/assests/about4.JPG"
            alt="Investment"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">TV Cabinet</h3>
          </div>
        </div>

        {/* Prints */}
        <div className="relative group">
          <img
            src="/assests/about5.JPG"
            alt="Prints"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">TV Cabinet</h3>
          </div>
        </div>
      </div>
    </section>
  );
}