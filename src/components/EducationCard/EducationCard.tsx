import { formatDate } from '../../utils/formatDate';
import { getCompanyLogo } from '../../utils/getCompanyLogo';
import type { Education } from '../../types/cv.types';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface EducationCardProps {
    education: Education;
    variants: Variants;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, variants }) => {
    const logo = getCompanyLogo(education.institution);

    return (
        <motion.div variants={variants}>
            <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <header className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <img
                            src={logo}
                            alt={`${education.institution} logo`}
                            className="h-12 w-12 object-contain rounded-md"
                        />
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900">{education.degree}</h3>
                        <p className="text-md font-medium text-gray-700">{education.institution}</p>
                        <p className="mt-1 text-base text-gray-600">{education.field}</p>
                        <p className="mt-1 text-sm text-gray-500">
                            {formatDate(education.startDate)} – {formatDate(education.endDate)}
                        </p>
                    </div>
                </header>
            </article>
        </motion.div>
    );
};

export default EducationCard;