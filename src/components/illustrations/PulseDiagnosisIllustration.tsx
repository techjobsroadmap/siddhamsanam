
const PulseDiagnosisIllustration = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Hand outline */}
        <path d="M70,100 C90,80 120,70 150,80 C180,90 210,120 230,150 C250,180 250,220 230,240 C210,260 160,260 120,240 C80,220 50,180 70,100Z" fill="#C99E67" />
        
        {/* Palm lines */}
        <path d="M90,140 C120,160 180,160 210,140" stroke="#A67C52" strokeWidth="2" />
        <path d="M100,180 C140,200 180,190 200,170" stroke="#A67C52" strokeWidth="2" />
        <path d="M110,120 C140,130 170,130 190,120" stroke="#A67C52" strokeWidth="2" />
        
        {/* Fingers outline */}
        <path d="M100,100 C110,80 120,70 130,90" stroke="#A67C52" strokeWidth="2" />
        <path d="M130,90 C140,70 150,60 160,80" stroke="#A67C52" strokeWidth="2" />
        <path d="M160,80 C170,60 180,50 190,70" stroke="#A67C52" strokeWidth="2" />
        <path d="M190,70 C200,50 210,60 220,90" stroke="#A67C52" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default PulseDiagnosisIllustration;
