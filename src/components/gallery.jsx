
import bm1 from "../assets/bm1.jpg";
import bm2 from "../assets/bm11.jpg";
import bm3 from "../assets/bm3.jpg";
import bm4 from "../assets/bm4.jpg";
import bm5 from "../assets/bm5.jpg";
import bm6 from "../assets/bm10.jpg";
import { motion } from "framer-motion";
const photos = [
  { src: bm1, caption: "With Cute Mam" },
  { src: bm2, caption: "With Best Friend in College" },
  { src: bm3, caption: "Biology Lab" },
  { src: bm4, caption: "Fresh Time" },
  { src: bm5, caption: "In Front Campus" },
  { src: bm6, caption: "Cultural rag Day" },
];

export default function GalleryDivHSC() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 lg:px-15 mt-10">
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative overflow-hidden rounded-3xl shadow-lg group"
        >
          <img
            src={photo.src}
            alt={photo.caption}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <p className="text-white font-semibold text-lg">{photo.caption}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
