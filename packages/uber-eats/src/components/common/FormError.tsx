export const FormError = ({ errorMessage }: { errorMessage: string }) => {
  return <p className="text-red-500 text-sm">{errorMessage}</p>;
};
