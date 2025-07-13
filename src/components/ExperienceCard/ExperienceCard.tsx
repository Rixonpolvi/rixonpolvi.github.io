import { getCompanyLogo } from '../../utils/getCompanyLogo'; // Our logo helper
import SkillPill from '../SkillPill/SkillPill';
import { formatDate } from '../../utils/formatDate';
import type { Experience } from '../../types/cv.types';

interface ExperienceCardProps {
    job: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ job }) => {
    const logo = getCompanyLogo(job.company);

    return (
        <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            {/* --- Header Section --- */}
            <header className="flex items-start gap-4">
                <div className="flex-shrink-0">
                    <img
                        src={logo}
                        alt={`${job.company} logo`}
                        className="h-12 w-12 object-contain rounded-md"
                    />
                </div>
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">{job.position}</h3>
                    <p className="text-md text-gray-600">{job.company}</p>
                    <p className="mt-1 text-sm text-gray-500">
                        {formatDate(job.startDate)} – {job.endDate ? formatDate(job.endDate) : 'Present'}
                    </p>
                </div>
            </header>

            {/* --- Body Section (Achievements) --- */}
            <div className="mt-4">
                <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    {job.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            </div>

            {/* --- Footer Section (Skills) --- */}
            <footer className="mt-6">
                <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                        <SkillPill key={tech.name} skill={tech} />
                    ))}
                </div>
            </footer>
        </article>
    );
};

export default ExperienceCard;