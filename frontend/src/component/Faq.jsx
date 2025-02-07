import React, { useState } from 'react'
const faqs = [
    {
      question: "How to contact with riders emergency?",
      answer: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information..",
    },
    {
      question: "App installation failed, how to update system information?",
      answer: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    },
    {
      question: "Website response taking time, how to improve?",
      answer:
        "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    },
    {
      question: "New update fixed all bugs and issues",
      answer: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    },
  ];
const Faq = () => {
    

      const [openIndex, setOpenIndex] = useState(null);

      const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

  return (
    <div className="container w-full h-full mb-10">
      {/* Title Section */}
      <div className="flex justify-center">
        <div className="text-center mt-8">
          <h6 className="text-red-500 uppercase tracking-wider text-sm font-semibold">
            Frequent Questions
          </h6>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">
            Do you have any questions?
          </h1>
        </div>
      </div>

      {/* Accordion Container */}
      <div className="accordion_container w-full mt-10">
        <div className="w-2/3 mx-auto p-6 ">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 last:border-none">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full text-left py-4 px-4 text-lg font-medium text-gray-800 transition-all duration-300 hover:bg-gray-200 rounded-md"
              >
                <span className="flex items-center gap-4">
                  <span className="text-2xl text-green-500 transition-all duration-300">
                    {openIndex === index ? (
                      <i className="ri-indeterminate-circle-fill"></i>
                    ) : (
                      <i className="ri-add-circle-fill"></i>
                    )}
                  </span>
                  {faq.question}
                </span>
              </button>
              {openIndex === index && (
                <div className="py-3 px-4 ml-10 text-gray-600 transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq