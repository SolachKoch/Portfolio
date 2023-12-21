import "./App.css";
import React, { useState } from "react";
import Me from "./img/me.JPG";
import About from "./img/about.jpg";
import Ecom1 from "./img/Screenshot (234).png";
import Ecom2 from "./img/Screenshot (239).png";
import Ecom3 from "./img/com.jpg";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaVuejs,
  FaReact,
  FaGithub,
  FaPhp,
  FaNode,
  FaLocationArrow,
  FaFacebook,
  FaGoogle,
  FaTelegram,
  FaBars,
} from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  const Menu = [
    { id: 1, title: "Home" },
    { id: 2, title: "Skills" },
    { id: 3, title: "About" },
    { id: 4, title: "Projects" },
    { id: 5, title: "Contact" },
  ];
  const Skills = [
    { id: "1", img: <FaHtml5 size={80} color="#DD4B25" />, title: "html", value: "80" },
    { id: "2", img: <FaCss3 size={80} color="#254BDD" />, title: "css", value: "80" },
    { id: "3", img: <FaJs size={80} color="#E8D44D" />, title: "javascript", value: "50" },
    { id: "4", img: <FaBootstrap size={80} color="#8210F5" />, title: "bootstrap", value: "60" },
    { id: "5", img: <FaCss3 size={80} color="#fff" />, title: "tailwindcss", value: "60" },
    { id: "6", img: <FaReact size={80} color="#fff" />, title: "react.js", value: "70" },
    { id: "7", img: <FaVuejs size={80} color="#3FB27F" />, title: "vue.js", value: "30" },
    { id: "8", img: <FaGithub size={80} color="#000" />, title: "github", value: "30" },
    { id: "9", img: <FaPhp size={80} color="#fff" />, title: "php", value: "30" },
    { id: "10", img: <FaNode size={80} color="#509941" />, title: "node.js", value: "0" },
  ];
  const Contacts = [
    {
      id: "1",
      icon: <FaLocationArrow size={80} color="#fff" />,
      title: "N 43, Slaeng Roling, Tuek Thla, Saen Sokh,Phnom Penh, Cambodia",
    },
    {
      id: "2",
      icon: <FaGoogle size={80} color="#fff" />,
      title: "solachthi@gmail.com",
    },
    {
      id: "3",
      icon: <FaGithub size={80} color="#fff" />,
      title: "https://github.com/SolachKoch",
    },
    {
      id: "4",
      icon: <FaFacebook size={80} color="#fff" />,
      title: "KOCH SOLACH",
    },
    {
      id: "5",
      icon: <FaTelegram size={80} color="#fff" />,
      title: "060746606",
    },
  ];
  const Projects = [
    { id: 1, img: { Ecom1 } },
    { id: 2, img: { Ecom2 } },
    { id: 3, img: { Ecom3 } },
  ];
  const SM = [
    { id: 1, img: <FaFacebook size={40} color="#fff" /> },
    { id: 2, img: <FaTelegram size={40} color="#fff" /> },
    { id: 3, img: <FaGoogle size={40} color="#fff" /> },
  ];
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-[#273C75] text-white  ">
      <nav className="flex justify-center sticky  top-0 shadow-lg  bg-[#273C75] lg:px-20 md:px-8 sm:px-5 ">
        <div className="lg:flex h-[70px]  items-center text-[20px] w-full justify-center ">
          <div className="py-5 w-full md:h-[60px] font-serif flex items-center md:item-center sm:items-center uppercase">
            koch solach
          </div>
          <div
            className=" lg:hidden md:text-xl   md:absolute md:right-0 md:top-4 md:cursor-pointer sm:text-md sm:absolute sm:right-0 sm:top-5 "
            onClick={handleToggleMenu}
          >
            <FaBars size={25} color="#fff" name={open ? "close" : "menu"} />
          </div>
          <div
            className={`lg:w-1/2 bg-[#273c75] transition-all duration-10 ease-in md:w-full lg:flex  ${
              open ? "block" : "hidden"
            } `} smooth={true}
          >
            {Menu.map((item) => (
              <ul className="md:hover:underline md:text-center px-2 sm:text-center justify-center ">
                <Link key={item.id} to={item.title.toLowerCase()} smooth={true} duration={500}>
                  <li className="cursor-pointer font-serif">{item.title}</li>
                </Link>
              </ul>
            ))}
          </div>
        </div>
      </nav>
      {/* Home section */}
      <section id="home" className="pt-[68px] lg:px-20 md:px-8 sm:px-5">
        <div className="lg:flex lgjustify-between md:flex md:justify-between w-full  lg:py-0 md:py-4  ">
          <div className="lg:py-6 md:py-2 w-full  ">
            <p className="lg:text-5xl md:text-3xl sm:text-4xl">Hello</p>
            <p className="lg:text-5xl md:text-[30px] sm:text-[30px] font-bold lg:my-4">
              I'm Solach
            </p>
            <p className="lg:text-3xl md:text-[20px] sm:text-[30px]">
              I am a skilled and passionate with Frontend Developer and experience in creating User
              Interface website.
            </p>
            <div className="lg:my-8 md:my-4 sm:my-3 flex space-x-3">
              {SM.map((item, id) => (
                <div key={id}>
                  <p className="   rounded-full">{item.img}</p>
                </div>
              ))}
            </div>
            <button className="bg-[#D9D9D9] text-black px-4 py-2 rounded-md mt-5">
              Download CV
            </button>
          </div>
          <div className="hidden md:block lg:block w-full  ">
            <img
              src={Me}
              className="lg:h-[600px] lg:w-[600px] md:w-[400px] md:h-[400px] rounded-full object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* Skill */}
      <section className="flex  w-full pt-14 lg:px-20 md:px-8 sm:px-5" id="skills">
        <div className="lg:py-10 md:py-4 w-full ">
          <h1 className="text-center text-[40px] font-bold ">Skills</h1>
          <div className="  grid lg:grid-cols-3 md:grid-cols-2  lg:gap-16 md:gap-5 sm:gap-2 ">
            {Skills.map((item, id) => (
              <div className="flex  w-full " key={id}>
                <div className=" object-cover">{item.img}</div>
                <div className="w-full ">
                  <div className="flex justify-between">
                    <p className="uppercase font-bold">{item.title}</p>
                    <p>{item.value}%</p>
                  </div>
                  <div>
                    <input type="range" className="w-full h-[15px]" value={item.value} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About section */}
      <section className="flex pt-16 lg:px-20 md:px-8 sm:px-5" id="about">
        <div className="flex justify-between lg:py-10  md:py-4">
          <div className="  text-end  w-full hidden md:block lg:block ">
            <img
              src={About}
              className="lg:h-[600px] lg:w-[600px] md:w-[400px] md:h-[400px] rounded-full object-cover "
              alt=""
            />
          </div>
          <div className="lg:py-14 md:py-6  w-full">
            <p className="lg:text-4xl md:text-3xl sm:text-[30px] font-bold">About Me</p>
            <p className="lg:text-xl md:text-2xl sm:text-xl lg:py-4 md:py-2 font-bold">
              Frontend Developer
            </p>
            <p className="lg:text-[20px] md:text-lg sm:text-[25px]">
              I’m a skilled frontend developer with over 3 months of experience in the industry. My
              passion lies creating captivating website designs and implementing them through
              frontend development.
            </p>
            <div className=" py-2.5 lg:text-xl md:text-md font-bold flex-row space-y-3 sm:text-[20px]">
              <p>Name: KOCH SOLACH</p>
              <p>Date of Birth: 15 Feb 2001</p>
              <p>Address: Takeo Province </p>
              <p>Phone: 060746606</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our project */}
      <section className="flex justify-center " id="projects">
        <div className=" w-[1300px] ">
          <h1 className="text-center text-[30px] py-10 font-bold">Our project</h1>
          <div className="  grid lg:grid-cols-3 md:grid-cols-2  lg:gap-8 md:gap-5 sm:gap-2 ">
            {Projects.map((item) => (
              <div key={item.id}>
                <img src={item.img} alt={`Project ${item.id}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact me */}
      <section className="py-10 lg:px-20 md:px-8 sm:px-5 " id="contact">
        <div className=" w-full">
          <h1 className="text-center text-[40px] font-bold my-5 py-5">Contact</h1>
          <div className="  ">
            {/* <div className="w-1/2">
              <form>
                <div className="flex-row space-y-5">
                  <input
                    type="text"
                    className="h-[40px] w-full rounded-[3px] border-white bg-[#2b395e] px-4"
                    placeholder="Name "
                    alt=""
                  />
                  <input
                    type="email"
                    className="h-[40px] w-full rounded-[3px] border-white bg-[#2b395e] px-4"
                    placeholder="Email "
                    alt=""
                  />
                  <textarea
                    placeholder=" Say Something..."
                    className="w-full  bg-[#2b395e] px-4 py-2"
                    rows="10"
                    cols="50"
                  ></textarea>
                  <button
                    type="submit"
                    className="h-[40px] w-full rounded-[3px] border-white bg-[#2b395e] px-4"
                    placeholder="Submit"
                    alt=""
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div> */}
            <div className="grid lg:grid-cols-3 lg:gap-14  md:grid-cols-2 md:gap-5 sm:grid-cols-1 sm:gap-4   ">
              {Contacts.map((item, id) => (
                <div className="flex w-full  space-x-2  " key={id}>
                  <p>{item.icon}</p>
                  <a href={item.title} className="cursor-pointer py-4 text-lg">
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="h-full w-full p-5 lg:px-20 md:px-8 sm:px-5">
        <div className="text-center items-center flex justify-center">
          <hr className="w-96 border " />
        </div>
        <div className="text-center">
          <p>Power by @KOCH SOLACH</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
