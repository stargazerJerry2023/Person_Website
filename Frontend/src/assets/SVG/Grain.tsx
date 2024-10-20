const GrainOverlay = () => {
    return (
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full">
          <filter id="grainy">
            <feTurbulence type="turbulence" baseFrequency="0.60" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grainy)" opacity="0.2" />
        </svg>
      </div>
    );
  };
  
  export default GrainOverlay;