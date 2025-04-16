
const HerbsIllustration = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Mortar */}
        <ellipse cx="150" cy="220" rx="60" ry="20" fill="#C99E67" />
        <path d="M90,220 C90,190 210,190 210,220" fill="#C99E67" />
        <ellipse cx="150" cy="190" rx="60" ry="20" fill="#A67C52" />
        
        {/* Herbs in mortar */}
        <ellipse cx="130" cy="180" rx="15" ry="10" fill="#4D6336" />
        <ellipse cx="150" cy="175" rx="15" ry="10" fill="#6B8E4E" />
        <ellipse cx="170" cy="180" rx="15" ry="10" fill="#4D6336" />
        
        {/* Turmeric/ginger pieces */}
        <ellipse cx="230" cy="230" rx="15" ry="10" fill="#C99E67" />
        <ellipse cx="250" cy="240" rx="15" ry="10" fill="#E7D7B1" />
        
        {/* Leaves around */}
        <ellipse cx="90" cy="160" rx="10" ry="30" fill="#4D6336" transform="rotate(-30 90 160)" />
        <ellipse cx="120" cy="140" rx="10" ry="30" fill="#6B8E4E" transform="rotate(-15 120 140)" />
        <ellipse cx="180" cy="140" rx="10" ry="30" fill="#4D6336" transform="rotate(15 180 140)" />
        <ellipse cx="210" cy="160" rx="10" ry="30" fill="#6B8E4E" transform="rotate(30 210 160)" />
      </svg>
    </div>
  );
};

export default HerbsIllustration;
