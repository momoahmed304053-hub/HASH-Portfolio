export function Button({ children, className, variant, size, ...props }) {
  let base = "px-4 py-2 rounded font-semibold transition-colors";
  let variants = {
    outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50",
    default: "bg-blue-600 text-white hover:bg-blue-700",
  };
  let sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
