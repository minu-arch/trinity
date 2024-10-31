interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`mt-5 rounded-md border border-b-4 border-[#EBECEA] bg-[#F7F7F8] px-2 py-1 text-[.9rem] font-semibold text-green-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

// Acest pattern îți permite să:
// Reutilizezi stilizarea în întreaga aplicație
// Modifici conținutul butonului (children)
// Adaugi handleri pentru evenimente (onClick)
// Extinzi stilizarea cu clase adiționale (className)
// Menții consistența design-ului
