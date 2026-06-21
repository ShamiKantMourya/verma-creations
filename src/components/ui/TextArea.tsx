import * as React from "react";
import { cn } from "../../Utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface TextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    rows:number;
    cols:number
  }

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, rows, cols, ...props }, ref) => {
    const radius = 150;
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          #d1b069,
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <textarea
        rows={rows}
        cols={cols}
          className={cn(
            `flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400 tab:h-14 ipad:h-16 tab:text-2xl ipad:text-3xl lap:text-lg lap:h-10
           `,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
TextArea.displayName = "TextArea";

export { TextArea };
