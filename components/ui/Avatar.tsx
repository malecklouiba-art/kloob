import { cn, initialsFromName, pastelFromName } from "@/lib/utils";

type Size = 28 | 44 | 64;

interface AvatarProps {
  name: string;
  src?: string | null;
  size?: Size;
  founder?: boolean;
  className?: string;
}

const sizeClass: Record<Size, string> = {
  28: "w-7 h-7 text-[11px]",
  44: "w-11 h-11 text-[15px]",
  64: "w-16 h-16 text-[22px]",
};

export function Avatar({
  name,
  src,
  size = 44,
  founder,
  className,
}: AvatarProps) {
  const bg = pastelFromName(name);
  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center rounded-full font-display font-semibold text-text-primary",
        sizeClass[size],
        founder && "ring-[1.5px] ring-gold ring-offset-2 ring-offset-bg-primary",
        className,
      )}
      style={src ? undefined : { backgroundColor: bg }}
      aria-label={name}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <span>{initialsFromName(name)}</span>
      )}
    </div>
  );
}
