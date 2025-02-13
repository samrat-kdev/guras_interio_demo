import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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
        {[{
          title: "TV CABINET",
          subtitle: "Process",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae at placeat repellat...",
          imgSrc: "/assests/tvCabinet.jpg",
          alt: "TV Cabinet",
        }, {
          title: "Wooden and Steel",
          subtitle: "Railing",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione voluptas quos excepturi...",
          imgSrc: "/assests/woo.jpg",
          alt: "Wooden and Steel Railing",
        }, {
          title: "PARQUET FLOOR",
          subtitle: "FLOORING",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae at placeat repellat...",
          imgSrc: "/assests/parq.jpg",
          alt: "Parquet Floor",
        }].map((item, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col md:flex-row items-center w-full max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute bg-gray-200 w-full md:w-[450px] h-[180px] rounded-lg -z-10"></div>
            {index % 2 === 0 ? (
              <>
                <motion.div className="bg-gray-100 p-6 shadow-lg rounded-lg w-full sm:w-[300px] text-center md:text-left" variants={fadeInUp}>
                  <h3 className="text-sm text-gray-600 font-semibold">{item.subtitle}</h3>
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="text-gray-500 text-sm mt-2">{item.text}</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Image
                    src={item.imgSrc}
                    alt={item.alt}
                    width={500}
                    height={350}
                    className="rounded-lg mt-4 md:mt-0 md:ml-4 shadow-lg w-full sm:w-auto"
                  />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div variants={fadeInUp}>
                  <Image
                    src={item.imgSrc}
                    alt={item.alt}
                    width={500}
                    height={350}
                    className="rounded-lg mb-4 md:mb-0 md:mr-4 shadow-lg w-full sm:w-auto"
                  />
                </motion.div>
                <motion.div className="bg-gray-100 p-6 shadow-lg rounded-lg w-full sm:w-[300px] text-center md:text-left" variants={fadeInUp}>
                  <h3 className="text-sm text-gray-600 font-semibold">{item.subtitle}</h3>
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="text-gray-500 text-sm mt-2">{item.text}</p>
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
}