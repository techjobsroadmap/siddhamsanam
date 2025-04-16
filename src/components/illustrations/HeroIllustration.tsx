
const HeroIllustration = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Background leaf elements */}
        <path d="M80,100 C120,80 140,150 100,200 C60,250 20,200 80,100" fill="#6B8E4E" opacity="0.3" />
        <path d="M400,150 C440,130 460,200 420,250 C380,300 340,250 400,150" fill="#6B8E4E" opacity="0.3" />
        
        {/* Wooden mortar */}
        <ellipse cx="250" cy="320" rx="80" ry="30" fill="#C99E67" />
        <path d="M170,320 C170,280 330,280 330,320" fill="#C99E67" />
        <ellipse cx="250" cy="280" rx="80" ry="30" fill="#A67C52" />
        
        {/* Wooden pestle */}
        <rect x="180" y="100" width="40" height="160" rx="20" fill="#C99E67" transform="rotate(-30 180 100)" />
        <rect x="170" y="80" width="60" height="40" rx="10" fill="#A67C52" transform="rotate(-30 170 80)" />
        
        {/* Leaves in the mortar */}
        <ellipse cx="230" cy="280" rx="15" ry="25" fill="#4D6336" transform="rotate(-10 230 280)" />
        <ellipse cx="260" cy="275" rx="15" ry="25" fill="#6B8E4E" transform="rotate(10 260 275)" />
        <ellipse cx="245" cy="265" rx="15" ry="25" fill="#4D6336" transform="rotate(-5 245 265)" />
        
        {/* Hand */}
        <path d="M450,200 C430,180 400,190 390,200 C380,210 370,230 370,250 C370,270 390,280 410,270 C430,260 440,240 450,200Z" fill="#C99E67" />
        <path d="M390,200 C380,190 370,200 365,210 C360,220 360,240 370,250" stroke="#A67C52" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
};

export default HeroIllustration;
