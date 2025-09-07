type InputFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
};

export default function InputField({
  id,
  name,
  label,
  type = "text",
  placeholder,
}: InputFieldProps) {
  return (
    <div className="transition-transform duration-200 hover:scale-[1.02]">
      <label htmlFor={id} className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required
        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-yellow focus:ring-4 focus:ring-custom-yellow focus:ring-opacity-20 transition-all duration-200 text-sm sm:text-base"
        placeholder={placeholder}
      />
    </div>
  );
}
