import Button from './reusable/Button'
import { motion } from 'framer-motion'
import { useState } from 'react';
import { FiX } from 'react-icons/fi'
import { badRequest, emailSuccess, incompleteDetails } from './reusable/Toastify';
import { sendProjectDetails } from '@/lib/api';

const selectOptions = [
    'Select Project Type',
    'Web Application',
    'Mobile Application',
    'UI/UX Design',
    'Branding',
];

const initState = {
    name: "",
    email: "",
    subject: "",
    message: "",
}

const HireMeModal = ({ onClose, setShowModal }) => {
    const [form, setForm] = useState(initState);
    const [showLoader, setShowLoader] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        setShowLoader(true);
        e.preventDefault();

        setForm((prev) => ({
            ...prev,
        }));

        const resp = await sendProjectDetails(form);
        // console.log(resp);
        // return false;
        if(resp) {
            if(resp.status === 400) {
                incompleteDetails("Fill all the details")
            }
            else if(resp.status === 200) {
                setTimeout(() => {
                    emailSuccess();
                    setShowModal(false)
                }, 1000);
            }
            else {
                badRequest(resp.statusText);
            }
            setShowLoader(false);
        }
        
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
        >
            {/* Modal Backdrop */}
            <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

            {/* Modal Content */}
            <main className="flex flex-col items-center justify-center h-full w-full">
                <div className="modal-wrapper flex items-center z-30">
                    <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
                        <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
                            <h5 className=" text-primary-dark dark:text-primary-light text-xl">
                                What project are you looking for?
                            </h5>
                            <button
                                onClick={onClose}
                                className="px-4 font-bold text-primary-dark dark:text-primary-light"
                            >
                                <FiX className="text-3xl" />
                            </button>
                        </div>
                        <div className="modal-body p-5 w-full h-full">
                            <form
                                onSubmit={onSubmit}
                                className="max-w-xl m-4 text-left"
                            >
                                <div className="">
                                    <input
                                        className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Project Name"
                                        aria-label="Name"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mt-6">
                                    <input
                                        className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                        id="email"
                                        name="email"
                                        type="text"
                                        required
                                        placeholder="Email"
                                        aria-label="Email"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mt-6">
                                    <select
                                        className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        required
                                        aria-label="Project Category"
                                        onChange={handleChange}
                                    >
                                        {selectOptions.map((option) => (
                                            option === 'Select Project Type' ?
                                            <option key={option} selected disabled>{option}</option>
                                            :
                                            <option
                                                className="text-normal sm:text-md"
                                                key={option}
                                            >
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mt-6">
                                    <textarea
                                        className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                        id="message"
                                        name="message"
                                        required
                                        cols="14"
                                        rows="6"
                                        aria-label="Details"
                                        placeholder="Project description"
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="mt-6 pb-4 sm:pb-1">
                                    <Button
                                        title="Send Request"
                                        loading={showLoader}
                                        disabled={showLoader}
                                        type="submit"
                                        aria-label="Send Message"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    )
}

export default HireMeModal