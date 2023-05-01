import { useRef, useState } from "react";
import Button from "../reusable/Button";
import { sendContactForm } from "@/lib/api";
import { emailSuccess } from "../reusable/Toastify";

const initState = {
    name: "",
    email: "",
    subject: "",
    message: "",
}

const ContactForm = () => {
    const [form, setForm] = useState(initState);
    const [showLoader, setShowLoader] = useState(false)
    const formRef = useRef(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleFormReset = () => {
        formRef.current.reset()
    }

    const onSubmit = async (e) => {
        setShowLoader(true)
        e.preventDefault()

        setForm((prev) => ({
            ...prev,
        }));
        
        const resp = await sendContactForm(form)
        
        if(resp) {
            if(resp.status === 400) {
                incompleteDetails("Fill all the details")
            }
            else if(resp.status === 200) {
                setTimeout(() => {
                    emailSuccess();
                    setForm({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                    })
                    handleFormReset();
                }, 1000);
            }
            else {
                badRequest(resp.statusText);
            }
            setShowLoader(false);
        }
    }
    return (
        <div className="w-full lg:w-1/2">
            <div>
                <form
                    ref={formRef}
                    onSubmit={onSubmit}
                    className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
                    autoComplete="off"
                >
                    <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">Contact Form</p>
                    <div className="font-general-regular mb-4">
                    <label
                        className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                        htmlFor="name"
                    >
                        Full Name
                    </label>
                    <input
                        className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        aria-label="Name"
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />

                    <label
                        className="block text-lg text-primary-dark dark:text-primary-light mb-1 mt-6"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        aria-label="Email"
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />

                    <label
                        className="block text-lg text-primary-dark dark:text-primary-light mb-1 mt-6"
                        htmlFor="subject"
                    >
                        Subject
                    </label>
                    <input
                        className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                        type="subject"
                        id="subject"
                        name="subject"
                        placeholder="Your subject"
                        aria-label="Subject"
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />

                    <div className="mt-6">
                        <label
                            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            id="message"
                            name="message"
                            cols="14"
                            rows="6"
                            aria-label="Message"
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    </div>

                    <div className="mt-6">
                        {/* <span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500"> */}
                            <Button
                                title="Send Message"
                                loading={showLoader}
                                disabled={showLoader}
                                type="submit"
                                aria-label="Send Message"
                            />
                        {/* </span> */}
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactForm
