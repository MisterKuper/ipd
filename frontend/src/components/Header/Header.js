import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="header">
      <div className="top-section">
        <Link to="/" className="logo">
          Project Name
        </Link>
      </div>

      <div className="bottom-section">
        <div className="image-frame">
          {/* mascot image 1 */}
          <motion.img
            className="header-image-front"
            src={assets.spiral_mascot}
            alt="header image"
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

          {/* spiral stuff image 2 */}
          <motion.img
            className="header-image-middle"
            src={assets.spiral_stuff}
            alt="far background"
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          />

            {/* spiral image 3 */}
            <motion.img
              className="header-image-back"
              src={assets.spiral}
              alt="near background"
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            />
        </div>

        <div className="buttons-column">
          <Link to={"/registration"}>
            <button className="register-button">ZAŁÓŻ KONTO</button>
          </Link>
          <Link to={"/login"}>
            <button className="login-button">MAM JUŻ KONTO</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
