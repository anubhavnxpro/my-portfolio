import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
const contacts = [
    {
        id: 1,
        type: 'address',
        name: '#40 Sector 21, Panchkula',
        icon: <FiMapPin />,
    },
    {
        id: 2,
        type: 'email',
        name: 'singlaanubhav088@gmail.com',
        icon: <FiMail />,
    },
    {
        id: 3,
        type: 'phone',
        name: '(+91) 6239-530-119',
        icon: <FiPhone />,
    },
];

const ContactDetails = () => {
    return (
        <div className="w-full lg:w-1/2">
            <div className="text-left max-w-xl px-6">
                <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
                    Contact Details
                </h2>

                <ul>
                    {
                        contacts.map((contact) => (
                            <li className="flex" key={contact.id}>
                                <i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
                                    {contact.icon}
                                </i>
                                {
                                    contact.type === 'email'
                                        ? (
                                            <a className="text-lg mb-4 text-ternary-dark dark:text-ternary-light" href="mailto:singlaanubhav088@gmail.com">{contact.name}</a>
                                        )
                                        : contact.type === 'phone' ? (
                                            <a className="text-lg mb-4 text-ternary-dark dark:text-ternary-light" href="tel:+916239530119">{contact.name}</a>
                                        )
                                        : (
                                            <span
                                                className="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
                                            >
                                                {contact.name}
                                            </span>
                                        )
                                }

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ContactDetails