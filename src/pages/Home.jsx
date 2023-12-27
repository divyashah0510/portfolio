import { useNavigate } from "react-router-dom";
import React from "react";
import Room from "../models/Room";
import "../styles/Home.css";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Home = () => {
  const navigate = useNavigate();
  const handleProjects = () => {
    navigate("/projects");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 4000);
  }, []);

  return (
    <section className="relative flex lg:flex-row flex-col h-screen home-container">
      {/* {alert.show && <Alert {...alert} />} */}

      <div className="flex-1 min-w-[50%] flex flex-col mt-24">
        <p className="text-gray-950 text-center font-extrabold p-1 mt-20 text-3xl tracking-widest">
          Divya Shah
        </p>
        <h1 className="blue-gradient_text_h1 text-center">Web Developer</h1>
        <h1 className="blue-gradient_text_h1 text-center">and UI Designer</h1>

        <div className="w-full flex flex-row gap-11 justify-center mt-20">
          <button onClick={handleProjects} className="flex btnForHome">
            My Projects
          </button>
          <button onClick={handleContact} className="flex btnForHome">
            Connect With Me
          </button>
        </div>
      </div>
      <div className="flex-1 min-w-[50%] flex flex-col">
        {isLoading ? (
          <Loading />
        ) : (
          <Room/>
        )}
      </div>
    </section>
  );
};

export default Home;
