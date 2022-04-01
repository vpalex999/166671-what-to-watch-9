type SignInFieldProps = {
  children: JSX.Element[];
  className?: string;
};

function SignInField({ children, className }: SignInFieldProps): JSX.Element {
  return <div className={`sign-in__field ${className}`}>{children}</div>;
}

export default SignInField;
