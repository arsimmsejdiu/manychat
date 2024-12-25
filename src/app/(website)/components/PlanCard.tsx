import { CheckCircle } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { PlanCardProps } from "@/types/plane.type";

const PlanCard = ({ plan }: PlanCardProps) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="text-4xl font-bold">
          {plan.price}
          <span className="text-lg font-normal text-muted-foreground">
            /month
          </span>
        </div>
        <ul className="space-y-2">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">{plan.cta}</Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
