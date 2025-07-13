import telusLogo from "../assets/logos/telus.svg";
import lednLogo from "../assets/logos/ledn.svg";
import deloitteLogo from "../assets/logos/deloitte.svg";
import scalarLogo from "../assets/logos/scalar.svg";
import cibcLogo from "../assets/logos/cibc.svg";
import senecaLogo from "../assets/logos/seneca.svg";
import defaultLogo from "../assets/logos/default.svg"; // A fallback logo

// A mapping from the company name string to the imported logo
const logoMap: { [key: string]: string } = {
  Telus: telusLogo,
  Ledn: lednLogo,
  Deloitte: deloitteLogo,
  "Scalar Decisions": scalarLogo,
  CIBC: cibcLogo,
  "Seneca College": senecaLogo,
};

export const getCompanyLogo = (companyName: string): string => {
  return logoMap[companyName] || defaultLogo;
};
