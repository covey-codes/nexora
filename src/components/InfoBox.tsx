type InfoBoxProps = {
    title: string;
    content: string;
    className?: string;
  };
  
  const InfoBox = ({ title, content, className = "" }: InfoBoxProps) => {
    return (
      <div className={`bg-[#03577233] w-[80%] p-12 rounded-xl text-[#011D26] ${className}`}>
        <h2 className="text-2xl font-semibold mb-5">{title}</h2>
        <p className="text-base leading-relaxed">{content}</p>
      </div>
    );
  };
  
  export default InfoBox;
  