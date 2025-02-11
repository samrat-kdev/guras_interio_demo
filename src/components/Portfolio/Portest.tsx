import Image from "next/image";

export default function FoodMenu() {
  return (
    <>

      <div className="text-center my-10">
        <div className="flex items-center justify-center">
          <div className="w-16 border-t-2 border-[#6b1b55]"></div>
          <span className="mx-4 text-[#6b1b55] tracking-widest uppercase text-m">GURAS INTERIO</span>
          <div className="w-16 border-t-2 border-[#6b1b55]"></div>
        </div>
        <h2 className="text-4xl font-bold font-serif mt-2">Portfolio</h2>
      </div>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-white p-6">
        {/* First Section */}
        <div className="relative flex items-center mb-10">
          <div className="absolute bg-gray-200 w-[450px] h-[180px] rounded-lg -z-10"></div>
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg w-[300px]">
            <h3 className="text-sm text-gray-600 font-semibold">CATEGORY</h3>
            <h2 className="text-2xl font-bold">TV CABINET</h2>
            <p className="text-gray-500 text-sm mt-2">
              lLorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae at placeat repellat
            </p>
          </div>
          <Image
            src="/assests/T.jpg"
            alt="Wine and Brie"
            width={500}
            height={350}
            className="rounded-lg ml-4 shadow-lg"
          />
        </div>

        {/* Second Section */}
        <div className="relative flex items-center">
          <div className="absolute bg-gray-100 w-[450px] h-[180px] rounded-lg -z-10"></div>
          <Image
            src="/assests/T.jpg"
            alt="Beef Steak"
            width={500}
            height={350}
            className="rounded-lg mr-4 shadow-lg"
          />
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg w-[300px]">
            <h3 className="text-sm text-gray-600 font-semibold">Railing</h3>
            <h2 className="text-2xl font-bold">Wooden and Steel</h2>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione voluptas quos excepturi ipsa, animi placeat cupiditate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
