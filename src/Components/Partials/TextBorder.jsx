export default function TextBorder({ text, classNames }) {
  return (
    <h1
      className={`relative uppercase font-bold text-[#00249C] whitespace-nowrap ${classNames}`}
    >
      {text}
      <span className="absolute inset-0 text-white -z-10 text-border">
        {text}
      </span>
    </h1>
  );
}
