"use client";

import {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
} from "react";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

export interface SwitchProps extends Omit<ComponentProps<"div">, "id"> {
  id: string;
  label: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChecked?: Dispatch<SetStateAction<boolean>>;
  size?: Size;
  hoveringTimeout?: number;
}

const getSize = (s: Size) => {
  switch (s) {
    case "xs":
      return 1.125;
    case "sm":
      return 1.25;
    case "md":
      return 1.5;
    case "lg":
      return 1.875;
    case "xl":
      return 2.25;
  }
};

export const Switch = ({
  id,
  label,
  defaultChecked,
  checked,
  onChecked,
  size = "md",
  className = "flex",
  hoveringTimeout = 225,
  ...props
}: SwitchProps) => {
  const timeout = useRef<number | null>(null);
  const elRef = useRef<HTMLLabelElement | null>(null);

  /** Clears the timeout incase it exits */
  const clear = useCallback(() => {
    if (timeout.current === null) return;

    clearTimeout(timeout.current);
    timeout.current = null;
  }, []);

  /** Starts the timeout */
  const onPointerEnter = useCallback(() => {
    clear();

    timeout.current = setTimeout(() => {
      elRef.current?.setAttribute("data-hovering", "true");
    }, hoveringTimeout) as unknown as number;
  }, [hoveringTimeout, clear]);

  /** Clears the timeout and resets the element */
  const onPointerLeave = useCallback(() => {
    clear();

    elRef.current?.setAttribute("data-hovering", "false");
  }, [clear]);

  return (
    <div className={className} {...props}>
      <input
        className={[
          "hidden",
          "[&:checked~label]:bg-primary-200",
          "[&:checked~label]:after:bg-primary-400",
          "dark:[&:checked~label]:bg-primary-800",
          "dark:[&:checked~label]:after:bg-primary-200",
          "motion-safe:[&:checked~label]:after:[clip-path:inset(0_0_0_46%_round_theme(borderRadius.3xl))]",
          "motion-safe:[&:checked~label[data-hovering=true]]:after:[clip-path:inset(0_0_0_35%_round_theme(borderRadius.3xl))]",
        ].join(" ")}
        id={id}
        type="checkbox"
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={(e) => onChecked && onChecked(e.target.checked)}
      />
      <label
        ref={elRef}
        style={{
          width: `${getSize(size) * 1.75}rem`,
          height: `${getSize(size)}rem`,
        }}
        onPointerCancel={onPointerLeave}
        onPointerLeave={onPointerLeave}
        onPointerEnter={onPointerEnter}
        data-hovering={false}
        className={[
          "inline-block",
          "overflow-hidden",
          "rounded-[calc(theme(borderRadius.3xl)_-_.125rem)]",
          "transition-all",
          "select-none",
          "text-[0]",
          "relative",
          "hover:cursor-pointer",
          "bg-neutral-200",
          "hover:bg-neutral-300",
          "focus-visible:bg-neutral-300",
          "dark:bg-neutral-700",
          "dark:hover:bg-neutral-800",
          "dark:focus-visible:bg-neutral-800",
          "after:absolute",
          "after:transition-all",
          "after:top-[.125rem]",
          "after:left-[.125rem]",
          "after:w-[calc(100%_-_.25rem)]",
          "after:h-[calc(100%_-_.25rem)]",
          "after:bg-neutral-500",
          "after:dark:bg-neutral-200",
          "motion-reduce:after:opacity-85",
          "motion-reduce:after:[clip-path:inset(0_0_0_0_round_theme(borderRadius.3xl))]",
          "motion-safe:after:[clip-path:inset(0_46%_0_0_round_theme(borderRadius.3xl))]",
          "motion-safe:after:data-[hovering=true]:[clip-path:inset(0_35%_0_0_round_theme(borderRadius.3xl))]",
        ].join(" ")}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
