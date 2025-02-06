import Image from 'next/image';

const images = [
  '/assests/Closet/clos4.JPG',
  '/assests/Closet/clos10.JPG',
  '/assests/Closet/clos14.JPG',
  '/assests/Closet/clos16.JPG',
  '/assests/Closet/clos18.JPG',
  '/assests/Closet/clos24.JPG',
  '/assests/Closet/clos30.JPG',
  '/assests/Closet/clos2.JPG',
];

export default function Gallery() {
  return (
    <>
      <div className="text-center my-10">
        <div className="flex items-center justify-center">
        </div>
        <h2 className="text-4xl font-bold font-serif mt-2">OUR WORK</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}
