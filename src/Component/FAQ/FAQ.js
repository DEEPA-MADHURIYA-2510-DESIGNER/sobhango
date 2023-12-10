import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./FAQ.css";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={toggleOpen}>
        {question}
        <span className={`icon ${isOpen ? 'open' : ''}`}>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqList = ({ faqs }) => (
  <div className="faq-list">
    {faqs.map((faq) => (
      <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
    ))}
  </div>
);

const FAQs = () => {
  const faqs = [
    {
      question: 'Can I Use QuillBot Translator for free?',
      answer: 'Yes, when you use QuillBot, you can enjoy 100% free translation online with no ads.',
    },
    {
      question: 'How many characters can I translate at once?',
      answer: 'QuillBot Translator lets you translate 5,000 characters at a time, but you can always delete a text and type in something else. Stay tuned - soon you\'ll be able to upload an entire PDF or paper for translation!',
    },
    {
      question: 'How many languages does QuillBot Translator support?',
      answer: 'Currently, it lets you translate text into 45 languages, with more to come.',
    },
    {
      question: 'How accurate is this translator?',
      answer: 'QuillBot\'s online translator is powered by AI, so it learns by drawing from thousands of expertly written texts from around the world. This makes it the most accurate way to translate online.',
    },
  ];

  return (
    <div className="faqs">
      <h2>FAQs</h2>
      <FaqList faqs={faqs} />
    </div>
  );
};

export default FAQs;
