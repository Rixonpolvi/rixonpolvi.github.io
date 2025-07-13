interface VerificationBadgeProps {
    badgeUrl: string;
    credentialUrl: string;
    altText: string;
}

const VerificationBadge: React.FC<VerificationBadgeProps> = ({ badgeUrl, credentialUrl, altText }) => {
    return (
        <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify my ${altText} credential`}
            className="group" // The 'group' class is essential for the hover effect
        >
            <img
                src={badgeUrl}
                alt={altText}
                className="h-20 w-20 transition-all duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
        </a>
    );
};

export default VerificationBadge;