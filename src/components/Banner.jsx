import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { img } from "../utils/imagePath";


export default function Banner() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* ===== Carousel Section ===== */}
        <div className="relative mb-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <SwiperSlide>
              <div className="relative w-full  overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dxbpf3dge/image/upload/v1770554297/IMG-20260113-WA0126_pkhvs7.jpg"
                  alt="Helping hands reaching out to people in need"
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Together for a Leprosy-Free Future
                  </h2>
                  <p className="mt-4 text-lg max-w-2xl">
                    Empowering lives through care, awareness, and rehabilitation.
                  </p>
                  <Link
                    to="/about"
                    className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg text-white font-medium transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={img("bannerImages/great.jpg")}
                alt="Healthcare support for patients"
                className="w-full h-[420px] object-cover rounded-2xl"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={img("bannerImages/home.jpg")}
                alt="Community awareness programs"
                className="w-full h-[420px] object-cover rounded-2xl"
              />
            </SwiperSlide>

          </Swiper>
        </div>


        <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-md mb-10">
          <img
            src="https://res.cloudinary.com/dxbpf3dge/image/upload/v1768737580/WhatsApp_Image_2026-01-11_at_8.16.17_AM_2_u18roc.jpg"
            alt="People being helped through NGO work"
            className="rounded-xl shadow-md object-cover"
          />
          <div className="flex flex-col justify-center">
            <h4 className="text-xl font-semibold text-blue-600 mb-3">
              Making an Impact
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Our initiatives have transformed over{" "}
              <strong className="text-black">3 million lives</strong> by
              providing care, education, and hope for a better tomorrow.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Read More <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>


        <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-md">
          <img
            src={img("bannerImages/volunteer3.jpg")}
            alt="Volunteer supporting children"
            className="rounded-xl shadow-md object-cover"
          />
          <div className="flex flex-col justify-center">
            <h4 className="text-xl font-semibold text-green-600 mb-3">
              Join as a Volunteer
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Be part of our mission. Your small effort can make a big
              difference in the lives of leprosy-affected individuals and their
              families.
            </p>
            <Link
              to="/volunteer"
              className="inline-flex items-center mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
