import headshotImage from '../../assets/images/headshot.jpg'
import SocialLinks from '../SocialLinks/SocialLinks'
import { IoLocationSharp } from 'react-icons/io5'
import VerificationBadge from '../VerificationBadge/VerificationBadge'

const Hero: React.FC = () => {

  const cisspBadge = {
    // Paste the image URL you copied from Credly here
    imageUrl: 'https://images.credly.com/size/220x220/images/6eeb0a98-33cb-4f72-bfc3-f89d65a3286c/image.png',
    credentialUrl: 'https://www.credly.com/badges/382430d6-7619-4c96-a132-79c66315419f/public_url',
    altText: 'CISSP Certification',
  };


  return (
    <section className="relative flex flex-col gap-8 text-center md:flex-row md:items-start md:gap-12 md:text-left">
      <div className="absolute top-0 right-0 hidden md:block">
        <VerificationBadge
          badgeUrl={cisspBadge.imageUrl}
          credentialUrl={cisspBadge.credentialUrl}
          altText={cisspBadge.altText}
        />
      </div>
      <div className="flex-shrink-0">
        <img
          src={headshotImage}
          alt="Me."
          className="h-56 w-36 rounded-lg border-2 border-gray-200 object-cover shadow-md"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Rixon Polvi
        </h1>
        <h2 className="mt-2 text-xl font-medium text-gray-700">
          Security Engineer
        </h2>
        <div className="mt-1 inline-flex items-center gap-x-1.5 text-base text-gray-500">
          <IoLocationSharp className="h-5 w-5" />
          <span>Toronto, ON</span>
        </div>
        <p className="mt-1 max-w-prose text-gray-600">
          Security engineer with extensive SOC operational experience and proven track record in large-scale enterprise SIEM and SOAR deployments. I bring operational wisdom from years of hands-on threat detection and incident response to help enterprises maximize their security technology investments.
        </p>

        <div className="mt-8 flex justify-center md:justify-start">
          <SocialLinks />
        </div>

      </div>
    </section>
  );
};

export default Hero;