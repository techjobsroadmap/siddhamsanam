
const GarlicIllustration = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Garlic bulb */}
        <ellipse cx="150" cy="150" rx="80" ry="70" fill="#F3E9D2" />
        <path d="M150,80 C130,80 120,110 120,130 C120,150 130,160 150,160 C170,160 180,150 180,130 C180,110 170,80 150,80Z" fill="#E7D7B1" />
        <path d="M110,110 C90,110 80,140 80,160 C80,180 90,190 110,190 C130,190 140,180 140,160 C140,140 130,110 110,110Z" fill="#F3E9D2" />
        <path d="M190,110 C170,110 160,140 160,160 C160,180 170,190 190,190 C210,190 220,180 220,160 C220,140 210,110 190,110Z" fill="#F3E9D2" />
        
        {/* Garlic clove */}
        <path d="M230,170 C240,160 250,180 240,190 C230,200 220,180 230,170Z" fill="#F3E9D2" />
        
        {/* Leaves */}
        <ellipse cx="110" cy="90" rx="10" ry="30" fill="#4D6336" transform="rotate(-30 110 90)" />
        <ellipse cx="140" cy="80" rx="10" ry="30" fill="#6B8E4E" transform="rotate(-5 140 80)" />
        <ellipse cx="170" cy="85" rx="10" ry="30" fill="#4D6336" transform="rotate(20 170 85)" />
      </svg>
    </div>
  );
};

export default GarlicIllustration;
