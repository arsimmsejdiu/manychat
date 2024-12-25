export type GradientButtonProps = {
  children: React.ReactNode;
  type: "BUTTON" | "LINK";
  href?: string;
  className?: string;
};

export type DoubleGradientCardProps = {
  label: string;
  subLabel: string;
  description: string;
};
