import { forwardRef } from "react";
import "src/components/basic/button.css";

type DefaultButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  inverse?: boolean;
};

const DEFAULT_CLASSNAME =
  "flex justify-center items-center pv2 ph3 f5 fw5 button";

const Button = forwardRef<HTMLButtonElement, DefaultButtonProps>(
  ({ className = "", inverse, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={`${DEFAULT_CLASSNAME}${inverse ? "-inv" : ""} ${className}`}
      />
    );
  }
);

export default Button;
