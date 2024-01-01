// Chatbot.js
import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { FiMessageSquare } from 'react-icons/fi';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleEnd = () => {
        setIsOpen(false);
    };

    const steps = [
        { id: '1', message: 'Hi there! How can I help you today?', trigger: '2' },
        {
            id: '2', options: [
                { value: 'courses', label: 'Tell me about SciAstra courses', trigger: '3' },
                { value: 'admissions', label: 'How can I apply for admissions?', trigger: '4' },
                { value: 'subjects', label: 'What subjects do you offer?', trigger: '5' },
                { value: 'schedule', label: 'Tell me about the class schedule', trigger: '6' },
                { value: 'fees', label: 'What are the fees for courses?', trigger: '7' },
                { value: 'contact', label: 'How can I contact SciAstra?', trigger: '8' },
                { value: 'events', label: 'Are there any upcoming events?', trigger: '9' },
                { value: 'faculty', label: 'Tell me about the faculty', trigger: '10' },
                { value: 'placements', label: 'What about placements?', trigger: '11' },
                { value: 'feedback', label: 'Can I provide feedback?', trigger: '12' },
                { value: 'other', label: 'Something else', trigger: '13' },
            ]
        },
        { id: '3', message: 'We offer a variety of high-quality courses. Check our website for more details.', end: true },
        { id: '4', message: 'You can apply for admissions by visiting our admissions page on the website.', end: true },
        { id: '5', message: 'We offer a wide range of subjects including Mathematics, Science, Literature, and more.', end: true },
        { id: '6', message: 'Our class schedule varies based on the course. Visit our website or contact us for specific details.', end: true },
        { id: '7', message: 'Course fees depend on the specific course. Please check our website or contact us for detailed information.', end: true },
        { id: '8', message: 'You can contact us through our contact form or by emailing info@sciastra.com.', end: true },
        { id: '9', message: 'Stay tuned for our upcoming events! Check our website for the latest updates.', end: true },
        { id: '10', message: 'Our faculty members are experienced professionals with expertise in their respective fields.', end: true },
        { id: '11', message: 'We provide placement assistance to our students. Contact our placement cell for more details.', end: true },
        { id: '12', message: 'Yes, we welcome your feedback! Feel free to provide your valuable feedback through our website or contact us directly.', end: true },
        { id: '13', message: 'I am sorry, I am just a simple chatbot. Please contact us for specific inquiries.', end: true },
    ];

    return (
        <>
            <ChatBot
                steps={steps}
                handleEnd={handleEnd}
                opened={isOpen}
                headerTitle="SciAstra Chatbot"
                botAvatar="https://image-url.com/chatbot-avatar.png"
                style={{ position: 'fixed', bottom: '70px', right: '20px', zIndex: 9999 }}
            />
            <button onClick={() => setIsOpen(true)} style={{ position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer', background: 'none', border: 'none', outline: 'none' }}>
                <FiMessageSquare size={32} color="teal" />
            </button>
        </>
    );
};

export default Chatbot;
