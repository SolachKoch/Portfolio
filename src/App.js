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

function App() {
  const Menu = [
    { id: 1, title: "Home" },
    { id: 2, title: "Skills" },
    { id: 3, title: "About" },
    { id: 4, title: "Project" },
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
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-[#273C75] text-white 2xl:px-20  ">
      <nav className="flex justify-center sticky top-0 bg-[#273C75] shadow-sm">
        <div className="lg:flex lg:h-[70px] md:h-full items-center text-[20px] w-full justify-center">
          <div className="lg:w-1/2 md:h-[60px] font-serif flex items-center md:item-center sm:items-center uppercase">
            koch solach
          </div>
          <div
            className="md:text-xl md:absolute md:right-5 md:top-4 md:cursor-pointer lg:hidden"
            onClick={handleToggleMenu}
          >
            <FaBars size={25} color="#fff" name={open ? "close" : "menu"} />
          </div>
          <div className={`lg:w-1/2 md:w-full lg:flex  ${open ? "block" : "hidden"}`}>
            {Menu.map((item) => (
              <ul key={item.id} className="md:hover:underline md:text-center px-2 sm:text-center">
                <li className="cursor-pointer font-serif">{item.title}</li>
              </ul>
            ))}
          </div>
        </div>
      </nav>
      {/* Home section */}
      <section className="flex justify-center ">
        <div className="flex justify-between flex-wrap lg:py-10 md:py-4 ">
          <div className="lg:py-14 md:py-7  w-1/2 ">
            <p className="text-xl">Hello</p>
            <p className="lg:text-[40px] md:text-[30px] font-bold">I'm Solach</p>
            <p className="lg:text-[25px] md:text-[20 px]">
              I am a skilled and passionate with Frontend Developer and experience in creating User
              Interface website.
            </p>
            <div className="my-8 flex space-x-2">
              <p className="h-12 w-12 text-black text-center pt-2.5 bg-white rounded-full">H</p>
              <p className="h-12 w-12 text-black text-center pt-2.5 bg-white rounded-full">P</p>
              <p className="h-12 w-12 text-black text-center pt-2.5 bg-white rounded-full">K</p>

              <p className="h-12 w-12 text-black text-center pt-2.5 bg-white rounded-full">X</p>
            </div>
            {/* <button className="bg-[#D9D9D9] text-black px-4 py-2 rounded-md mt-5">
              Download CV
            </button> */}
          </div>
          <div className=" w-1/2 text-end  flex justify-end ">
            <img
              src={Me}
              className="lg:h-[600px] lg:w-[600px] md:w-[400px] md:h-[400px] rounded-full object-cover  "
              alt=""
            />
          </div>
        </div>
      </section>
      {/* Skill */}
      <section className="flex justify-center  ">
        <div className="lg:py-10 md:py-4  ">
          <h1 className="text-center text-[40px] font-bold ">Skills</h1>
          <div className="  flex  flex-wrap border justify-center">
            {Skills.map((item, id) => (
              <div className="flex space-x-2 w-[400px] m-5 border" key={id}>
                <div className=" object-cover">{item.img}</div>
                <div className="w-full">
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
      <section className="flex justify-center">
        <div className="flex justify-between lg:py-10 md:py-4">
          <div className=" w-1/2 text-end  ">
            <img
              src={About}
              className="lg:h-[600px] lg:w-[600px] md:w-[300px] md:h-[300px] rounded-full object-cover "
              alt=""
            />
          </div>
          <div className="lg:py-14  w-1/2 ">
            <p className="text-4xl font-bold">About Me</p>
            <p className="text-xl py-4 font-bold">Frontend Developer</p>
            <p className="text-[20px]">
              I’m a skilled frontend developer with over 3 months of experience in the industry. My
              passion lies creating captivating website designs and implementing them through
              frontend development.
            </p>
            <div className="py-2.5 text-xl font-bold flex-row space-y-3">
              <p>Name: KOCH SOLACH</p>
              <p>Date of Birth: 15 Feb 2001</p>
              <p>Address: Takeo Province </p>
              <p>Phone: 060746606</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our project */}
      <section className="flex justify-center ">
        <div className=" w-[1300px] ">
          <h1 className="text-center text-[30px] py-10 font-bold">Our project</h1>
          <div className="flex justify-between flex-wrap sm:p-2">
            <img src={Ecom1} alt="" className="w-[400px] h-[200px] object-cover rounded-md" />
            <img src={Ecom2} alt="" className="w-[400px] h-[200px] object-cover rounded-md" />
            <img src={Ecom3} alt="" className="w-[400px] h-[200px] object-cover rounded-md" />
          </div>
        </div>
      </section>
      {/* Contact me */}
      <section className="flex justify-center sm:px-10 ">
        <div className=" w-[1300px] ">
          <h1 className="text-center text-[40px] font-bold my-5">Contact</h1>
          <div className="  my-5">
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
            <div className="  flex  flex-wrap border  ">
              {Contacts.map((item, id) => (
                <div className="flex space-x-2 w-[380px] m-5 border " key={id}>
                  <p>{item.icon}</p>
                  <a href={item.title} className="cursor-pointer pl-3">
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="h-[50px]">
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
