interface Button {
  disabled?: boolean;
  className?: string;
  children: string;
  img?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Button = (props: Button) => {
  const { className, children, img, onClick, disabled } = props;
  return (
    <button
      className={`${className ?? ""} cta-wrapper`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="cta-button group">
        <span className="bg-circle"></span>
        <span className="text">{children}</span>
        <span className="arrow-wrapper">
          <img src={img} alt="arrow" />
        </span>
      </span>
    </button>
  );
};

export default Button;
