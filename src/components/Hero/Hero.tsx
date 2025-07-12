import headshotImage from '../../assets/images/headshot.jpg';
import SocialLinks from '../SocialLinks/SocialLinks';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 text-center md:flex-row md:items-start md:gap-12 md:text-left">
      {/* Headshot Image */}
      <div className="flex-shrink-0">
        <img
          src={headshotImage}
          alt="Me."
          className="h-48 w-32 rounded-lg border-2 border-gray-200 object-cover shadow-md"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Rixon Polvi
        </h1>
        <h2 className="mt-2 text-xl font-medium text-gray-600">
          Security Engineer
        </h2>
        <p className="mt-6 max-w-prose text-gray-500">
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