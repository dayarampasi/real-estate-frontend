import React, { useState } from 'react';
import './FAQ.css';

function FAQ({ data }) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="faq">
            <h2>{data.title || 'Frequently Asked Questions'}</h2>
            <div className="faq-list">
                {data.questions && data.questions.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div 
                            className="faq-question" 
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            {item.q}
                            <span>{openIndex === index ? '−' : '+'}</span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">{item.a}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;