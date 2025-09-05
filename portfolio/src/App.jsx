import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import profile from '../profile.jpeg'
import resume from '../karthik_resume_.pdf'

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);

  // Skill Game: Click Challenge
  const skills = ["React", "Node.js", "MongoDB", "AWS", "Docker", "CI/CD", "Express", "Redis", "TailwindCSS"];
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setPlaying(false);
    }
  }, [playing, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setPlaying(true);
  };

  const handleClickSkill = () => {
    if (playing) setScore(score + 1);
  };

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
  emailjs
    .send(
      "service_x38f088",     
      "template_ip2qwcg",    
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.msg,
      },
      "joTs_Lqrst_-aK8ZX",          
    )
    .then(
      () => setSubmitted(true),
      (err) => alert("Message failed to send: " + JSON.stringify(err))
    );
};

  const projects = [
    {
      title: "IndiaMart – E-Commerce Platform",
      desc: [
        "Built with MERN, Redis, AWS to support budget-friendly shopping.",
        "Helped 70% of students cut grocery shopping time by 40%.",
        "Introduced pre-budget shopping → users saved 15–25% per purchase.",
        "Redis caching reduced API latency by 45%.",
        "Real-time inventory reduced 'out-of-stock' frustration by 60%.",
        "Secure payments increased checkout safety and trust.",
        "Scalable AWS backend can handle 10,000+ users concurrently.",
        "Personalized product recommendations increased retention by 35%.",
        "Enabled small vendors to reach more buyers.",
        "Cultural impact: made essentials accessible for the Indian community in the U.S.",
      ],
      link: "https://indiamart-frontend-r79b.vercel.app/",
      gitLink:'https://github.com/karthiksai109/Indiamart_Frontend'
    },
    {
      title: "Fitness Tracker – Nutrition & Workout Companion",
      desc: [
        "Full MERN app deployed with Render + Vercel.",
        "Users improved workout consistency by 30%.",
        "Calorie tracking reduced unhealthy food intake by 20%.",
        "Personalized recommendations improved goal achievement by 25%.",
        "JWT-secured authentication improved trust by 40%.",
        "Visual dashboards boosted user motivation by 50%.",
        "Role-based dashboards support trainers and users.",
        "Accessible on mobile with 95% availability.",
        "Helps combat lifestyle diseases like obesity & diabetes.",
      ],
      link: "https://fitness-tracker-frontend-pu15.vercel.app/",
       gitLink:'https://github.com/karthiksai109/fitnessTrackerFrontend'
    },
    {
      title: "URL Shortener – Smart Link Management",
      desc: [
        "Built with Node.js, Express, MongoDB, React.",
        "Shortened links improved click-through rates by 25%.",
        "Reduced average link length by 80%, improved readability.",
        "Analytics added to track clicks & referral sources.",
        "Custom links improved branding & professionalism.",
        "Saved users 2–3 hours weekly managing links.",
        "Lightweight architecture with 99.9% uptime.",
        "Scalable to handle 50k+ links per month.",
        "JWT-secured routes prevent misuse.",
        "Impact: Makes sharing professional & simple in digital society.",
      ],
      link: "https://karthiksurlshortner.vercel.app/",
      gitLink:'https://github.com/karthiksai109/urlShortnerApp1-Frontend'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <span className="text-xl font-bold text-blue-400">Karthik Ramadugu</span>
          <div className="space-x-6">
            <a href="#work" className="hover:text-blue-400">Work</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden text-center px-6">
        <motion.div
          className="absolute bg-gradient-to-r from-blue-400 to-purple-500 w-96 h-96 rounded-full filter blur-3xl opacity-30"
          animate={{ x: [-50, 50, -50], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.img
          src={profile}
          alt="Karthik Ramadugu"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 z-10"
        >
          Hi, I’m <span className="text-blue-400">Karthik Ramadugu</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl max-w-2xl mb-6 z-10"
        >
          Full-Stack Developer & DevOps Engineer building impactful apps with MERN, AWS, and CI/CD.
        </motion.p>
        <div className="flex gap-4 z-10">
          <a href={resume}>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow hover:opacity-90">
              📂 Download Resume
            </button>
          </a>
          <a href="https://github.com/karthiksai109" target="_blank">
            <button className="bg-white/10 border px-6 py-3 rounded-lg shadow hover:bg-white/20">
              GitHub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/ramadugukarthik/" target="_blank">
            <button className="bg-white/10 border px-6 py-3 rounded-lg shadow hover:bg-white/20">
              LinkedIn
            </button>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-gray-950 to-blue-950" id="work">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 border rounded-xl shadow-xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 hover:from-blue-800/60 hover:to-purple-800/60"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-300">{p.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm">
                {p.desc.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
              <a href={p.gitLink} target="_blank" className="text-blue-400 underline block mt-4">project view</a>
              <a href={p.link} target="_blank" className="text-blue-400 underline block mt-4">Live demo</a>
              
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section + Game */}
      <section className="py-20 px-8 bg-gradient-to-b from-purple-900 to-gray-900" id="skills">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-300">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto text-center mb-10">
          {skills.map((s, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow text-white"
            >
              {s}
            </motion.span>
          ))}
        </div>

        {/* Skill Click Challenge Game */}
        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">🎮 Skill Click Challenge</h3>
          {!playing ? (
            <>
              <p className="mb-4 text-gray-300">Click as many skills as you can in 10 seconds!</p>
              <button onClick={startGame} className="px-6 py-2 bg-blue-500 rounded-lg shadow hover:bg-blue-600">
                Start Game
              </button>
            </>
          ) : (
            <>
              <p className="mb-2 text-gray-300">Time Left: {timeLeft}s</p>
              <p className="mb-4 text-gray-300">Score: {score}</p>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((s, i) => (
                  <motion.button
                    key={i}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClickSkill}
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow text-white"
                  >
                    {s}
                  </motion.button>
                ))}
              </div>
            </>
          )}
          {!playing && timeLeft === 0 && (
            <p className="mt-4 text-green-400 font-semibold">
              ✅ Game Over! You clicked {score} skills 🎉
            </p>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-gray-950 to-blue-950" id="contact">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-300">Say Hello</h2>
        <div className="max-w-lg mx-auto text-center">
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                required
                className="w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
                className="w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                name="msg"
                placeholder="Message"
                onChange={handleChange}
                required
                className="w-full p-3 border rounded bg-gray-800 text-white h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded shadow"
              >
                Send
              </motion.button>
            </motion.form>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 font-medium"
            >
              ✅ Thanks, {formData.name}! I'll get in touch soon.
            </motion.p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 py-6 text-center text-gray-300">
        <p>📧 <a href="mailto:karthiksaidham2001@gmail.com" className="underline">karthiksaidham2001@gmail.com</a></p>
        <p>🔗 <a href="https://www.linkedin.com/in/ramadugukarthik/" target="_blank" className="underline">LinkedIn</a></p>
      </footer>
    </div>
  );
}


//joTs_Lqrst_-aK8ZX