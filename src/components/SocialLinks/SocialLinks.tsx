import React from 'react';
// Import the specific icons we need from the 'Simple Icons' set
import { SiLinkedin, SiGithub } from 'react-icons/si';

const SocialLinks: React.FC = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/rixon-polvi/',
            icon: SiLinkedin,
        },
        {
            name: 'GitHub',
            url: 'https://github.com/Rixonpolvi',
            icon: SiGithub,
        },
        // Add more socials here if you wish
        // {
        //   name: 'Twitter',
        //   url: 'https://twitter.com/your-username',
        //   icon: SiTwitter,
        // },
    ];

    return (
        <div className="flex items-center gap-x-4">
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"        // Opens the link in a new tab
                    rel="noopener noreferrer" // Security best practice for new tabs
                    aria-label={`Link to my ${social.name} profile`}
                    className="text-gray-500 transition-colors hover:text-gray-900"
                >
                    <social.icon className="h-6 w-6" />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;