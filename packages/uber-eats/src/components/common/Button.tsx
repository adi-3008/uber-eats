interface IButton {
  canClick: boolean;
  loading: boolean;
  actionText: string;
  bgColor?: string; // optional background color prop
}

export const Button = ({
  canClick,
  loading,
  actionText,
  bgColor = "bg-blue-600",
}: IButton) => {
  return (
    <button
      disabled={!canClick}
      className={`
        ${bgColor} 
        text-white 
        py-2 px-4 
        rounded 
        disabled:opacity-50 
        transition 
        duration-200
      `}
    >
      {loading ? "Loading..." : actionText}
    </button>
  );
};
