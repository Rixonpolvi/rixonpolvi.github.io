interface SkillPillProps {
    skill: {
        name: string;
        category: string;
    };
}

const SkillPill: React.FC<SkillPillProps> = ({ skill }) => {
    return (
        <span
            className="inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700"
            title={`Category: ${skill.category}`}
        >
            {skill.name}
        </span>
    );
};

export default SkillPill;