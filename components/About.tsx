import React from "react";
import MagicButton from "./MagicButton";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className=" text-black dark:text-white bg-white/50 dark:bg-black-100/50 overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] border-2 rounded-[1.75rem]">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <img
                    src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  About Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Our Journey Towards Excellence and Innovation
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Aftech is a leading software development outsourcing company
                  with a rich history of delivering innovative solutions. We are
                  driven by our core values of quality, collaboration, and
                  customer satisfaction. Our vision for the future is to
                  continue pushing the boundaries of technology and providing
                  exceptional software solutions to our clients.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  We have a separate division responsible for building software
                  products from A to Z, adding value on each of the elements in
                  this process. We help transform the businesses of our
                  customers via superior consulting and software product
                  development services, making them competitive in the digital
                  age.
                </p>
                <Link href="/contact">
                  <MagicButton title="Get Started" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
