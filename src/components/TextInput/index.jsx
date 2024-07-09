const TextInput = ({type, className, ...rest}) => {
    return (
        <input
        className={`form-control rounded-0 ${className}`}
        type={type}
        {...rest}
      />
    );
}

export default TextInput;