import { useState } from "react";
import PropTypes from "prop-types";

function About({ onSubmitFeedback }) {
  const [feedback, setFeedback] = useState("");

  function handleSubmit() {
    if (feedback.trim() === "") {
      alert("Please enter your feedback before submitting.");
      return;
    }
    onSubmitFeedback(feedback);
    setFeedback(""); 
  }

  return (
    <section id="ABOUT US" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-center mb-6 text-pink-800">ABOUT US</h2>
        <p className="text-lg md:text-xl font-sans font-light leading-relaxed text-justify mb-6 text-gray-900">
          Let me introduce myself, I am Rhezon Sanusi one of the founders of Anak Panah Social Café. 
          I created it in Semarang – Central Java on 9th September 2017. It has been a long journey until 2025, and now we have approximately 13 franchise outlets in Central Java. 
          (Semarang has 6 outlets, Solo has 2 outlets, and the rest are in Yogyakarta, Salatiga, Kudus, Pekalongan, and Jepara, each with 1 outlet).
        </p>
        <p className="text-lg md:text-xl font-sans font-light leading-relaxed text-justify mb-6 text-gray-900">
          We didn’t just follow the trend in a coffee menu, but you can find our best signature menu that is totally unique to our café. 
          To this day, we continuously improve and update to serve our best to all our customers! If you have any suggestions or notice anything that could be improved, 
          kindly let us know. We are always open to hearing from you!
        </p>
        <p className="text-lg md:text-xl font-sans font-semibold text-gray-900 text-center mb-6">
          ☕ Your perfect experience waits at Anak Panah Coffee! ☕
        </p>
      </div>

      {/* Feedback Form */}
      <div className="max-w-3xl mx-auto mt-12 bg-gray-50 rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">We'd Love Your Feedback</h3>
        <textarea
          className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 resize-none"
          rows="5"
          placeholder="Share your thoughts, advice, or critiques..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          aria-label="Feedback Input"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition font-semibold"
        >
          Submit
        </button>
      </div>
    </section>
  );
}


About.propTypes = {
  onSubmitFeedback: PropTypes.func.isRequired,
};

export default About;