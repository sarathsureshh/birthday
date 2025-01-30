import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Gallery() {
  const images = [
    { src: "/images/photo1.jpg", caption: "Vekkamaaaaaaa" },
    { src: "/images/photo2.jpg", caption: "Phone ah etti paakathaaa" },
    { src: "/images/photo3.jpg", caption: "Pudichukoooo thangooo" },
    { src: "/images/photo4.jpg", caption: "Sirika Vekkathaaa daa" },
    { src: "/images/photo5.jpg", caption: "Podaw Gundusssss" },
    { src: "/images/photo6.jpg", caption: "Azhaga iruken laaa" },
    { src: "/images/photo7.jpg", caption: "Fav pic togeatherr" },
    { src: "/images/photo8.jpg", caption: "😘" },
    { src: "/images/photo9.jpg", caption: "Love youuuu 😘" },
    {
      src: "/images/photo10.jpg",
      caption: "Our picture after one month, remember?",
    },
    { src: "/images/photo11.jpg", caption: "Adadaaaa enna jodi da" },
    { src: "/images/photo12.jpg", caption: "Katti pudichukooo" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewedAllImages, setViewedAllImages] = useState(false);

  const prevImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1;
      setViewedAllImages(newIndex === images.length - 1);
      return newIndex;
    });
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === images.length - 1 ? 0 : prev + 1;
      setViewedAllImages(newIndex === images.length - 1);
      return newIndex;
    });
  };

  useEffect(() => {
    // If the user starts at the last image, mark it as viewed all.
    if (currentIndex === images.length - 1) {
      setViewedAllImages(true);
    }
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center overflow-hidden py-10">
      <h1 className="text-4xl font-bold mb-6 z-10 bg-gray-900 px-4 py-2 rounded-lg">
        Look at us! We have greaaaat pics 📸
      </h1>
      <div className="relative flex items-center justify-center w-full max-w-lg">
        <button
          onClick={prevImage}
          className="absolute left-0 p-2 bg-white text-gray-900 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          <FaArrowLeft size={30} />
        </button>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Image
            src={images[currentIndex].src}
            alt={`Memory ${currentIndex + 1}`}
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
          <p className="mt-4 text-lg italic">{images[currentIndex].caption}</p>
        </motion.div>
        <button
          onClick={nextImage}
          className="absolute right-0 p-2 bg-white text-gray-900 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          <FaArrowRight size={30} />
        </button>
      </div>
      {viewedAllImages && (
        <div className="relative z-10 mt-6">
          <Link
            href="/movie"
            className="bg-white text-gray-900 px-6 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-gray-100"
          >
            Lets click moreee?
          </Link>
        </div>
      )}
    </div>
  );
}
