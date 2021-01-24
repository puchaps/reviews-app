import './custom-arrow.styles.scss';

const CustomArrow = ({ children, ...otherProps }) => {
  return(
    <div className="arrow" {...otherProps}>
      {children}
    </div>
  );
};

export default CustomArrow;