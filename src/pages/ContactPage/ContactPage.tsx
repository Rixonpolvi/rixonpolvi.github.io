import { useState } from 'react';

const ContactPage: React.FC = () => {
    // State to hold the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // State to manage the submission status (submitted, error, or idle)
    const [formStatus, setFormStatus] = useState<'idle' | 'submitted' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission (page reload)

        try {
            const response = await fetch('https://formspree.io/f/xeokydne', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus('submitted');
                setFormData({ name: '', email: '', message: '' }); // Clear the form
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus('error');
        }
    };

    // If the form has been submitted successfully, show a thank you message
    if (formStatus === 'submitted') {
        return (
            <div className="text-center">
                <h1 className="text-3xl font-bold text-green-600">Thank You!</h1>
                <p className="mt-4 text-lg">Your message has been sent successfully. I'll get back to you as soon as I can.</p>
            </div>
        );
    }

    // Otherwise, show the form
    return (
        <div className="max-w-[40rem] mx-auto">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
                <p className="text-gray-600 mb-8">
                    Have a question or want to work together? Fill out the form below.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </div>
                {formStatus === 'error' && (
                    <p className="text-red-500 text-center">
                        Something went wrong. Please try again later.
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactPage;