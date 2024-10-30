"use client";

import Link from "next/link";
import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is included in my ticket?",
    answer:
      "Your ticket grants you access to both conference days, including talks, workshops, and the after-party on Tuesday, November 19th. Lunch, coffee, and snacks will be provided during the conference.",
  },
  {
    question: "Will there be workshops or hands-on sessions?",
    answer:
      "Yes, in addition to talks, we are offering interactive workshops where you can get hands-on experience with the latest AI tools and creative technologies. You will be notified via email with info about how to register for the workshops. Space in workshops is limited.",
  },
  {
    question: "How do I get to the venue?",
    answer:
      "The venue, Sohrlin, is easily accessible from Malaga's city center, with direct international connections via the Málaga Airport.",
  },
  {
    question: "Will there be any online live streaming of the event?",
    answer: "No, not in this first edition so make it sure you are coming!",
  },
  {
    question: "Is there a refund policy for tickets?",
    answer:
      "Yes, refunds are available up to 30 days before the event. For full terms, please check our ticketing policy.",
  },
];

const FaqItem: React.FC<FaqItem & { isOpen: boolean; toggle: () => void }> = ({
  question,
  answer,
  isOpen,
  toggle,
}) => {
  return (
    <div className="w-full">
      <button
        className="flex w-full items-center justify-between"
        onClick={toggle}
      >
        <span className="text-xl font-semibold uppercase tracking-tighter text-clrtitle">
          {question}
        </span>
        <span
          className={`self-end text-2xl text-clrtitle transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`mb-5 mt-2 overflow-hidden text-clrparagraph transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {answer}
        {question === "Is there a refund policy for tickets?" && (
          <div className="mt-2">
            <Link
              href="/ticketing-policy"
              className="hover:text-herotext hover:cursor-pointer"
            >
              Check our ticketing policy.
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const Faq = () => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex-1">
      {faqItems.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openItemIndex === index}
          toggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Faq;
