import { Image } from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AboutMeData = [
    {
        id: uuidv4(),
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
    },
    {
        id: uuidv4(),
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
    },
];

const AboutMeBio = () => {
    const [aboutMe, setAboutMe] = useState(AboutMeData)
    
    return (
        <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                <Image
                    src='/images/profile.jpeg'
                    width={200}
                    height={200}
                    className='rounded-lg'
                    alt='Profile Image'
                 />
            </div>

            <div className="font-general-regular w-full sm:w-3/4 text-left">
                {
                    aboutMe.map((about) => (
                        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg" key={about.id}>
                            {about.bio}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutMeBio;