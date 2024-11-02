import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: unknown;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "h-full flex-row": !vertical,
          "w-full flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            data-reverse={reverse}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee w-full flex-row": !vertical,
              "animate-marquee-vertical h-full flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover, // if you want to pause on hover
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
