import React, { useState } from "react";

function Fqa() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openSection, setOpenSection] = useState<string | null>("general");

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="py-8">
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
          <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
            Any Questions? Look Here
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div className="lg:mx-12 flex flex-col items-center justify-start overflow-x-auto">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Table of Content
            </h1>

            <div className="mt-4 space-y-4 lg:mt-8 flex flex-wrap lg:flex-col items-center lg:items-start lg:space-y-4 space-x-4 lg:space-x-0">
              <button
                onClick={() => toggleSection("general")}
                className={`block mt-4 ${
                  openSection === "general" ? "text-blue-500" : "text-gray-500"
                } dark:${
                  openSection === "general" ? "text-blue-500" : "text-gray-300"
                } hover:underline`}
              >
                General
              </button>
              <button
                onClick={() => toggleSection("services")}
                className={`block ${
                  openSection === "services" ? "text-blue-500" : "text-gray-500"
                } dark:${
                  openSection === "services" ? "text-blue-500" : "text-gray-300"
                } hover:underline`}
              >
                Services
              </button>
              <button
                onClick={() => toggleSection("billing")}
                className={`block ${
                  openSection === "billing" ? "text-blue-500" : "text-gray-500"
                } dark:${
                  openSection === "billing" ? "text-blue-500" : "text-gray-300"
                } hover:underline`}
              >
                Billing
              </button>
            </div>
          </div>

          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            {faqItems.map((item, index) =>
              item.section === openSection ? (
                <div key={index} id={item.id}>
                  <button
                    className="flex items-center focus:outline-none"
                    onClick={() => toggleItem(index)}
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={openIndex === index ? "M20 12H4" : "M12 4v16m8-8H4"}
                      />
                    </svg>

                    <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                      {item.question}
                    </h1>
                  </button>

                  {openIndex === index && (
                    <div className="flex mt-8 md:mx-10">
                      <span className="border dark:border-white-100 border-black-100"></span>
                      <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                        {item.answer}
                      </p>
                    </div>
                  )}

                  <hr className="my-8 border-gray-200 dark:border-gray-700" />
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  {
    id: "general-1",
    section: "general",
    question: "How can I pay for my appointment?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
  },
  {
    id: "general-2",
    section: "general",
    question: "What can I expect at my first consultation?",
    answer:
      "You can expect a thorough discussion about your needs, an assessment, and a clear plan moving forward.",
  },
  {
    id: "trust-and-safety-1",
    section: "general",
    question: "What are your safety protocols?",
    answer:
      "We follow stringent safety protocols to ensure the well-being of our clients and staff.",
  },
  {
    id: "trust-and-safety-2",
    section: "general",
    question: "How do you handle privacy?",
    answer:
      "Your privacy is of utmost importance to us. We adhere to strict confidentiality policies.",
  },
  {
    id: "services-1",
    section: "services",
    question: "What services do you offer?",
    answer:
      "We offer a variety of services including consultations, treatments, and follow-ups.",
  },
  {
    id: "services-2",
    section: "services",
    question: "How can I book a service?",
    answer:
      "You can book a service through our website or by contacting our office directly.",
  },
  {
    id: "billing-1",
    section: "billing",
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit cards, debit cards, and bank transfers.",
  },
  {
    id: "billing-2",
    section: "billing",
    question: "Can I get a refund?",
    answer:
      "Refunds are processed on a case-by-case basis. Please contact our billing department for assistance.",
  },
];

export default Fqa;
