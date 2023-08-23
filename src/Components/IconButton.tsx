import * as Tooltip from "@radix-ui/react-tooltip";
interface IconButtonProps {
  tooltip: string;
  icon: React.ReactNode;
  showTooltipNextToIcon?: boolean;
  direction?: "left" | "right" | "top" | "bottom";
}
export function IconButton({
  tooltip,
  icon,
  direction,
  showTooltipNextToIcon,
}: IconButtonProps) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="flex items-center justify-center h-10 p-2 text-gray-500 rounded w-fit hover:bg-gray-200">
            {icon}

            {
              // If showTooltipNextToIcon is true, then show the tooltip next to the icon.
              // Otherwise, show the tooltip below the icon.
              showTooltipNextToIcon ? (
                <span className="md:block sm:hidden">{tooltip}</span>
              ) : null
            }
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="flex items-center justify-center h-8 p-2 text-xs text-black transition-all duration-200 ease-in-out bg-white rounded shadow-lg "
            side={direction}
          >
            {tooltip}
            <Tooltip.Arrow className="text-white fill-current" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
