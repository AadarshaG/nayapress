import ClockLoader from "react-spinners/ClockLoader";
import { Button as WillmillButton } from "windmill-react-ui-kit";

const LoadingIndicator = () => (
  <ClockLoader
    color="#ffffff"
    size={14}
    css={{
      marginRight: "5px",
    }}
    speedMultiplier={2}
  />
);

const Button = ({
  className,
  isLoading,
  onClick,
  layout,
  type,
  children,
  ...rest
}) => {
  return (
    <WillmillButton
      {...rest}
      className={
        className ||
        "w-full sm:w-auto bg-green-500 text-white hover:bg-gray-500 hover:text-white mr-0"
      }
      layout={layout || "outline"}
      type={type || "submit"}
      iconLeft={isLoading && LoadingIndicator}
    >
      {children}
    </WillmillButton>
  );
};

export default Button;
