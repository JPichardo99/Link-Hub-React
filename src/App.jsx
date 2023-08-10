import React from "react";
import { AiFillGithub,  AiFillLinkedin } from "react-icons/ai";
import { SiCredly, SiIndeed } from "react-icons/si";
import { Link } from "react-router-dom";

const App = () => {
  const data = [
    {
      id: 1,
      icon: <AiFillLinkedin size={24} />,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/jesús-alejandro-pichardo-buenrostro/",
    },
    {
      id: 2,
      icon: <AiFillGithub size={24} />,
      name: "Github",
      url: "https://github.com/JPichardo99",
    },
    {
      id: 3,
      icon: <SiIndeed size={24} />,
      name: "Indeed",
      url: "https://profile.indeed.com/p/jesusalejandrop-c9t1n2j",
    },
    {
      id: 4,
      icon: <SiCredly size={24} />,
      name: "Credly",
      url: "https://www.credly.com/users/jesus-alejandro-pichardo-buenrostro/badges",
    }

  ];
  return (
    <div className="gradient-background flex items-center justify-center flex-col">
      <div className=" flex items-center justify-center flex-col ">
        <div className=" flex items-center justify-center gap-2 flex-col">
          <img
            className="w-[150px] rounded-full"
            src="https://avatars.githubusercontent.com/u/104655959?s=400&u=41da9cd631c39c92d3599e2fee200b3af0da63a4&v=4"
            alt="img-profile"
          />
          <h2 className=" text-white text-[1.65rem]">
            Jesús Pichardo
          </h2>
          <div className=" w-[360px] text-center">
            <p className=" text-white text-[1rem] font-medium">
              Computer System Engineer | Web Development | App Development 
            </p>
          </div>
        </div>
        <div className=" mt-8 space-y-4">
          {data.map((i) => (
            <Link
              to={i.url}
              target="_blank"
              key={i.id}
              className=" flex items-center gap-2 w-[320px] bg-white bg-opacity-20 borde-white text-white backdrop-blur-lg rounded-xl drop-shadow-lg p-3 px-4 cursor-pointer hover:bg-opacity-40"
            >
              {i.icon}
              <p>{i.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;