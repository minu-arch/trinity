"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is Trinity Financial?",
    answer:
      "Trinity Financial is an innovative financial platform that offers personalized investment solutions and retirement planning services.",
  },
  {
    question: "How does Trinity Financial work?",
    answer:
      "Trinity Financial provides users with tools to set financial goals, manage investments, and plan for retirement. Users can access educational resources, track their progress, and receive personalized recommendations.",
  },
  {
    question: "Is Trinity Financial secure?",
    answer:
      "Yes, Trinity Financial prioritizes security and employs bank-level encryption to protect users' sensitive financial information. Additionally, the platform offers two-factor authentication for enhanced security.",
  },
  {
    question: "What investment options does Trinity Financial offer?",
    answer:
      "Trinity Financial offers a range of investment options, including stocks, bonds, mutual funds, ETFs, and retirement accounts like IRAs and 401(k)s.",
  },
  {
    question: "Can I access Trinity Financial on my mobile device?",
    answer:
      "Yes, Trinity Financial is optimized for mobile devices, allowing users to access their accounts, track investments, and manage portfolios on the go.",
  },
  {
    question: "How does Trinity Financial help with retirement planning?",
    answer:
      "Trinity Financial offers tools and resources to help users set retirement goals, optimize savings strategies, and create personalized retirement plans tailored to their needs and preferences.",
  },
  {
    question: "Does Trinity Financial provide financial advice?",
    answer:
      "While Trinity Financial offers educational resources and personalized recommendations, it does not provide personalized financial advice. Users should consult with a financial advisor for individualized guidance.",
  },
];

const FaqItem: React.FC<
  FaqItem & { isOpen: boolean; toggle: () => void; index: number }
> = ({ question, answer, isOpen, toggle, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
      }}
      className="w-full"
    >
      <button
        className="mt-7 flex w-full items-center justify-between"
        onClick={toggle}
      >
        <div className="w-full text-left">
          <motion.span
            className="text-sm font-medium tracking-tighter text-clrtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
          >
            {question}
          </motion.span>
        </div>
        <span
          className={`self-end text-2xl text-clrtitle transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          +
        </span>
      </button>
      <div className="size-full h-px bg-neutral-500" />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-5 mt-2 overflow-hidden text-sm text-clrparagraph"
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  React.useEffect(() => {
    setOpenItemIndex(null);
  }, []);

  const toggleItem = (index: number) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full">
      {faqItems.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openItemIndex === index}
          toggle={() => toggleItem(index)}
          index={index}
        />
      ))}
    </div>
  );
};

export default Faq;
