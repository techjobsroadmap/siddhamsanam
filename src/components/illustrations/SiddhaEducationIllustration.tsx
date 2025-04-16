
const SiddhaEducationIllustration = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Background leaf elements */}
        <path d="M80,100 C120,80 140,150 100,180 C60,210 20,180 80,100" fill="#6B8E4E" opacity="0.3" />
        <path d="M400,120 C440,100 460,170 420,200 C380,230 340,200 400,120" fill="#6B8E4E" opacity="0.3" />
        
        {/* Mortar */}
        <ellipse cx="370" cy="200" rx="60" ry="20" fill="#C99E67" />
        <path d="M310,200 C310,170 430,170 430,200" fill="#C99E67" />
        <ellipse cx="370" cy="170" rx="60" ry="20" fill="#A67C52" />
        
        {/* Pestle */}
        <rect x="420" y="170" width="20" height="80" rx="10" fill="#C99E67" transform="rotate(30 420 170)" />
        
        {/* Green medicine bottle */}
        <rect x="150" y="100" width="80" height="140" rx="10" fill="#6B8E4E" />
        <rect x="160" y="110" width="60" height="120" rx="5" fill="#A4CF8E" />
        
        {/* Bottle cap */}
        <rect x="175" y="70" width="30" height="30" rx="5" fill="#4D6336" />
        <ellipse cx="190" cy="100" rx="20" ry="5" fill="#4D6336" />
        
        {/* Ginger/turmeric roots */}
        <path d="M260,220 C270,210 290,230 280,240 C270,250 250,230 260,220Z" fill="#C99E67" />
        <path d="M280,240 C290,230 310,250 300,260 C290,270 270,250 280,240Z" fill="#C99E67" />
        <path d="M300,260 C310,250 330,270 320,280 C310,290 290,270 300,260Z" fill="#C99E67" />
      </svg>
    </div>
  );
};

export default SiddhaEducationIllustration;
