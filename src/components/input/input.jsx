import React from 'react';

const Input = React.forwardRef(({ className,error, children, ...rest }, ref) => {
  return (
    <div className="relative">
      <input ref={ref} className={className} {...rest} />
      
      {children && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {children}
        </div>
      )}
    </div>
  );
});

export default Input;
