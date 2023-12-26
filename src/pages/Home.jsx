import { useNavigate } from "react-router-dom";
import Room from "../models/Room";
import "../styles/Home.css";
import { Suspense } from "react";

const Home = () => {
  const navigate = useNavigate();
  const handleProjects = () => {
    navigate("/projects");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <section className="relative flex lg:flex-row flex-col h-full home-container">
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
          <button onClick={handleContact} className="flex btnForConnecting">
            Connect With Me
          </button>
        </div>
      </div>
      <div className="flex-1 min-w-[50%] flex flex-col">
        <Suspense fallback={<p className="text-center justify-center">Loading...</p>}>
          <Room />
        </Suspense>
      </div>
    </section>
  );
};

export default Home;
