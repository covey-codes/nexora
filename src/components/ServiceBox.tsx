type ServiceBoxProps = {
  image: string;
  title: string;
  intro: string;
  points: string[];
  classname?: string;
};

const ServiceBox = ({ image, title, intro, points }: ServiceBoxProps) => {
  return (
    <div className="bg-[#03577233] w-[80%] p-12 rounded-xl text-white mx-auto flex flex-col items-center text-center gap-4 hover:scale-105 hover:shadow-xl transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-contain rounded-full bg-white/20 p-2"
      />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-base">{intro}</p>
      <ul className="list-disc list-inside text-left">
        {points.map((point, index) => (
          <li key={index} className="text-sm">{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceBox;
