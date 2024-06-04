"use client"
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [  darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark":""}>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-900 ">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons  dark:text-white ">Sasanka Akash</h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-xl dark:text-white ">
                <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)}/>
              </li>
              <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
                <a href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium  md:text-6xl">
              Sasanka Akash
            </h2>
            <h3 className="text-2xl py-2 md-3xl dark:text-white ">Developer and Designer.</h3>
            <p className="text-md py-5 leading-8 text-slate-400 md:text-xl max-w-lg mx-auto">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-slate-500">
            <AiFillTwitterCircle className="cursor-pointer"/>
            <AiFillLinkedin className="cursor-pointer"/>
            <AiFillYoutube className="cursor-pointer"/>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-slate-500">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-slate-500 py-1">Photoshop</p>
              <p className="text-slate-500 py-1">Illustrator</p>
              <p className="text-slate-500 py-1">Figma</p>
              <p className="text-slate-500 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-slate-500 py-1">Photoshop</p>
              <p className="text-slate-500 py-1">Illustrator</p>
              <p className="text-slate-500 py-1">Figma</p>
              <p className="text-slate-500 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-slate-500 py-1">Photoshop</p>
              <p className="text-slate-500 py-1">Illustrator</p>
              <p className="text-slate-500 py-1">Figma</p>
              <p className="text-slate-500 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-slate-500">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
