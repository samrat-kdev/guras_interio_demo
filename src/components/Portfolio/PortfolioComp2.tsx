import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <div className="text-center my-10 px-4">
        <div className="flex items-center justify-center">
          <div className="w-16 border-t-2 border-[#6b1b55]"></div>
          <span className="mx-4 text-[#6b1b55] tracking-widest uppercase text-sm sm:text-base">GURAS INTERIO</span>
          <div className="w-16 border-t-2 border-[#6b1b55]"></div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-2">Portfolio</h2>
      </div>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-white p-6 space-y-10">
        {/* First Section */}
        <div className="relative flex flex-col md:flex-row items-center w-full max-w-4xl">
          <div className="absolute bg-gray-200 w-full md:w-[450px] h-[180px] rounded-lg -z-10"></div>
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg w-full sm:w-[300px] text-center md:text-left">
            <h3 className="text-sm text-gray-600 font-semibold">Process</h3>
            <h2 className="text-2xl font-bold">TV CABINET</h2>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae at placeat repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, suscipit ut? Modi quibusdam exercitationem, tempore beatae a quaerat, reprehenderit sunt quod iure, illo corporis unde autem nam natus. Esse, exercitationem!
            </p>
          </div>
          <Image
            src="/assests/tvCabinet.jpg"
            alt="TV Cabinet"
            width={500}
            height={550}
            className="rounded-lg mt-4 md:mt-0 md:ml-4 shadow-lg w-full sm:w-auto"
          />
        </div>

        {/* Second Section */}
        <div className="relative flex flex-col md:flex-row items-center w-full max-w-4xl">
          <div className="absolute bg-gray-100 w-full md:w-[450px] h-[180px] rounded-lg -z-10"></div>
          <Image
            src="/assests/woo.jpg"
            alt="Wooden and Steel Railing"
            width={500}
            height={350}
            className="rounded-lg mb-4 md:mb-0 md:mr-4 shadow-lg w-full sm:w-auto"
          />
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg w-full sm:w-[300px] text-center md:text-left">
            <h3 className="text-sm text-gray-600 font-semibold">Railing</h3>
            <h2 className="text-2xl font-bold">Wooden and Steel</h2>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione voluptas quos excepturi ipsa, animi placeat cupiditate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi consequuntur provident sed vitae veniam rem deserunt tempora, nostrum aliquid? Ratione ipsa et ad, non ipsum necessitatibus explicabo consequuntur ea.
            </p>
          </div>
        </div>

        {/* Third Section */}
        <div className="relative flex flex-col md:flex-row items-center w-full max-w-4xl">
          <div className="absolute bg-gray-200 w-full md:w-[450px] h-[180px] rounded-lg -z-10"></div>
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg w-full sm:w-[300px] text-center md:text-left">
            <h3 className="text-sm text-gray-600 font-semibold">FLOORING</h3>
            <h2 className="text-2xl font-bold">PARQUET FLOOR</h2>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae at placeat repellat.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae at placeat repellat.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae at placeat repellat.
            </p>
          </div>
          <Image
            src="/assests/parq.jpg"
            alt="TV Cabinet"
            width={500}
            height={350}
            className="rounded-lg mt-4 md:mt-0 md:ml-4 shadow-lg w-full sm:w-auto"
          />
        </div>
      </div>
    </>
  );
}
