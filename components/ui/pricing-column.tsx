import { cva, type VariantProps } from "class-variance-authority";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

const pricingColumnVariants = cva(
  "max-w-container relative flex flex-col gap-6 overflow-hidden rounded-2xl p-8 shadow-xl",
  {
    variants: {
      variant: {
        default: "bg-card border border-border/50",
        glow: "bg-card border border-border/50 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-primary/20 after:blur-[72px]",
        "glow-brand":
          "bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-primary/30 after:blur-[72px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface PricingColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingColumnVariants> {
  name: string;
  icon?: ReactNode;
  description: string;
  price: number;
  priceNote: string;
  cta: {
    variant: "glow" | "default";
    label: string;
    href: string;
  };
  features: string[];
}

export function PricingColumn({
  name,
  icon,
  description,
  price,
  priceNote,
  cta,
  features,
  variant,
  className,
  ...props
}: PricingColumnProps) {
  // Format price for display
  const formatPrice = (amount: number) => {
    if (amount === 0) return "Sur devis";
    return new Intl.NumberFormat('fr-DJ', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div
      className={cn(pricingColumnVariants({ variant, className }))}
      {...props}
    >
      {/* Top gradient line for featured plans */}
      {variant === "glow-brand" && (
        <hr className="absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
      )}
      
      {/* Popular badge for featured plan */}
      {variant === "glow-brand" && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Le plus populaire
          </div>
        </div>
      )}

      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <h2 className="flex items-center gap-2 font-bold text-xl">
            {icon && (
              <div className="text-primary flex items-center gap-2">
                {icon}
              </div>
            )}
            {name}
          </h2>
          <p className="text-muted-foreground max-w-[280px] text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price Display */}
        <div className="flex items-baseline gap-2">
          {price === 0 ? (
            <span className="text-4xl font-bold text-foreground">Sur devis</span>
          ) : (
            <>
              <span className="text-2xl font-bold text-foreground">{formatPrice(price)}</span>
              <span className="text-lg text-muted-foreground">DJF</span>
              <span className="text-sm text-muted-foreground">/mois</span>
            </>
          )}
        </div>

        {/* CTA Button */}
        <Button 
          variant={cta.variant} 
          size="lg" 
          asChild
          className={cn(
            "w-full shadow-sm transition-all duration-200",
            variant === "glow-brand" && "shadow-primary/20 hover:shadow-primary/30"
          )}
        >
          <Link href={cta.href}>{cta.label}</Link>
        </Button>

        {/* Price Note */}
        <p className="text-muted-foreground text-sm leading-relaxed text-center">
          {priceNote}
        </p>

        <hr className="border-border/50" />
      </div>

      {/* Features List */}
      <div className="flex-1">
        <ul className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <CircleCheckBig className="text-primary size-4 shrink-0 mt-0.5" />
              <span className="text-foreground leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { pricingColumnVariants };