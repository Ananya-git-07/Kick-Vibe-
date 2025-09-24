import { Link } from 'react-router-dom';

const Button = ({ to, children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-(--bg-color)";

  const variantClasses = {
    primary: "bg-(--brand-color) text-white hover:opacity-90 focus:ring-(--brand-color)",
    secondary: "bg-(--surface-color) text-(--text-color) border border-(--border-color) hover:bg-(--border-light) dark:hover:bg-(--border-dark) focus:ring-(--brand-color)",
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={finalClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={finalClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;