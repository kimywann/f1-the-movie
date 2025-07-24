import { motion } from "framer-motion";
import HeroSection from "./components/sections/HeroSection";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Trailer Section */}
      <section className="h-screen flex items-center justify-center bg-black text-white">
        <iframe
          className="w-full max-h-[90vh] aspect-video shadow-lg"
          src="https://www.youtube.com/embed/8yh9BPUBbbQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-white text-black text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          줄거리
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed"
        >
          속도, 경쟁, 인간 본능의 한계에 도전하는 드라이버들의 이야기. 경주의
          끝에서 기다리는 건 승리인가, 파멸인가?
        </motion.p>
      </section>

      {/* Highlights Section */}
      <section className="bg-black text-white py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10"
        >
          Why This Film Stands Out
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            ["🎧 3D Sound", "레이싱 사운드를 현실감 있게 느껴보세요."],
            [
              "🎥 Dynamic Cameras",
              "차 안, 트랙 위, 헬기까지 — 극한 카메라 앵글.",
            ],
            ["🏎️ Speed Visuals", "초당 100프레임으로 담아낸 리얼한 질주."],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-yellow-500 text-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          지금 예매하세요
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg mb-6"
        >
          극장에서 F1의 질주를 직접 느껴보세요
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white text-black uppercase font-bold tracking-widest cursor-pointer hover:shadow-lg transition-colors duration-300 rounded-lg"
        >
          <Link to="https://www.f1movie.co.kr/">Buy Tickets</Link>
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center text-sm">
        &copy; 2025 F1 The Movie. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
