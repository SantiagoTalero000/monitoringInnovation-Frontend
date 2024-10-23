export default function Input({ icon, type, placeholder, classNames }) {
  return (
    <label className={`flex gap-8 ${classNames}`}>
      {icon}
      <input
        className="w-full border-2 border-[#C5C5C5] rounded-[17px] px-8"
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}
