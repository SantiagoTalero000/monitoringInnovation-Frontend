import { forwardRef } from "react";

function Input({ icon, type, placeholder, classNames, ...rest }, ref) {
  return (
    <label className={`flex gap-8 ${classNames}`}>
      {icon}
      <input
        className="w-full border-2 border-[#C5C5C5] rounded-[17px] px-8"
        placeholder={placeholder}
        type={type}
        ref={ref}
        {...rest}
      />
    </label>
  );
}

export default forwardRef(Input);
