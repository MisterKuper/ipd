import React from "react";
import "./LoginMain.css";
import { assets } from "../../assets/assets";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const LoginMain = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.6 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const mascotVariants = {
    hidden: { y: 200 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <div className="login-main">
      <h1 className="login-main-title">Witamy w [nazwa aplikacji]!</h1>
      <p className="login-main-description">
        <strong>[Nazwa aplikacji]</strong> to zabawna i przydatna aplikacja
        internetowa rozwijająca logiczne myślenie i pamięć u przedszkolaków!
        Nasze gry i zadania pomogą dzieciom:
      </p>

      <div className="top-list">
        <ul className="login-main-benefits">
          <li>
            🚀 <strong>Rozwijaj uwagę i koncentrację.</strong>
          </li>
          <li>
            🧠 <strong>Popraw pamięć.</strong>
          </li>
          <li>
            🧩{" "}
            <strong>
              Rozwijaj logikę i umiejętności rozwiązywania problemów.
            </strong>
          </li>
          <li>
            🎉 <strong>Ucz się nowych rzeczy w zabawny sposób!</strong>
          </li>
        </ul>

        <div className="image-frame-right">
          {/* mascot image 1 */}
          <img
            className="header-image-front-right"
            src={assets.reading_mascot}
            alt="header image"
          />

          {/* bg image 2 */}
          <motion.img
            className="header-image-middle-right"
            src={assets.reading_thoghts}
            alt="near background"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />

          {/* bg image 3 */}
          <motion.img
            className="header-image-back-right"
            src={assets.reading_bubbles}
            alt="far background"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
        </div>
      </div>

      <h2 className="login-main-subtitle">
        Na jakie gry możecie się doczekać?
      </h2>
      <div className="bottom-list">
        <div className="image-frame-left">
          {/* mascot image 1 */}
          <img
            className="header-image-front-left"
            src={assets.header_img}
            alt="header image"
          />

          {/* bg image 2 */}
          <motion.img
            className="header-image-middle-left"
            src={assets.background1}
            alt="near background"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />

          {/* bg image 3 */}
          <motion.img
            className="header-image-back-left"
            src={assets.background2}
            alt="far background"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
        </div>

        <ul className="login-main-games">
          <li>
            💡 <strong>Znalezienie właściwej odpowiedzi:</strong> odpowiedz na
            pytania, wybierając właściwą opcję.
          </li>
          <li>
            🔗 <strong>Dopasowywanie par:</strong> znajdź powiązania między
            obiektami i obrazkami.
          </li>
          <li>
            🔄 <strong>Kolejność:</strong> ułóż elementy we właściwej
            kolejności.
          </li>
          <li>
            🎴 <strong>Wyszukiwanie par:</strong> otwieraj karty i zapamiętuj
            je, aby znaleźć identyczne zdjęcia.
          </li>
          <li>
            🖼️ <strong>Puzzle:</strong> zbieraj obrazy z kawałków.
          </li>
        </ul>
      </div>

      <div className="call-to-action-block">
        <p className="login-main-call-to-action">
          Dołącz do nas i zacznij rozwijać ważne umiejętności już dziś!
        </p>

        <Link to={"/registration"}>
          <button className="register-button">ZAŁÓŻ KONTO</button>
        </Link>

        <div className="animated-container" ref={ref}>
          {/* bg image 1 */}
          <motion.img
            src={assets.background1}
            alt="Background 1"
            className="background-image"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />

          {/* bg image 2 */}
          <motion.img
            src={assets.background2}
            alt="Background 2"
            className="background-image"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />

          {/* mascot image 1 */}
          <motion.div
            className="mascot-container"
            variants={mascotVariants}
            initial="hidden"
            animate={controls}
          >
            <img
              src={assets.header_img}
              alt="Mascot"
              className="mascot-image"
            />
          </motion.div>
        </div>
        <div className="bottom-line" />
      </div>
    </div>
  );
};

export default LoginMain;
