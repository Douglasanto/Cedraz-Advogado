"use client";

import React, { useState } from "react";
import { Faq } from "../../types";

interface FaqItemProps {
  faq: Faq;
  className?: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-second shadow-md rounded-lg border border-primary mb-4 text-white ${className}`}
    >
      <button
        className="w-full text-left p-4 focus:outline-none rounded-lg hover:bg-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row justify-between">
          <span className="font-semibold">{faq.question}</span>
          <span className="float-right">{isOpen ? "▲" : "▼"}</span>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          {faq.answers.map((answer, index) => (
            <p className="border-b border-[#DDDDDD17] py-4 text-sm" key={index}>
              ▪{" "}
              {answer.content.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FaqItem;

