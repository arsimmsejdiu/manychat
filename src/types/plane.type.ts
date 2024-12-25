export type PlanProps = {
  name: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
};

export type PlanSectionProps = {
  plans: PlanProps[];
};

export type PlanCardProps = {
  plan: PlanProps;
};
