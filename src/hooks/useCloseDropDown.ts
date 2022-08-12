import { useCallback, useEffect, useRef, useState } from "react";

const useDropDown = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeDropDown = useCallback(() => setIsOpen(false), []);
  const openDropDown = useCallback(() => setIsOpen(true), []);
  const toggleDropDown = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const conditionClose = (e: MouseEvent | KeyboardEvent) => {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      )
        closeDropDown();
    };
    const handleClick = (e: MouseEvent) => conditionClose(e)
    const handleKeyDown = (e: KeyboardEvent) =>  (e.key === "Escape") ? conditionClose(e) : undefined;

    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return { wrapperRef, isOpen, closeDropDown, openDropDown, toggleDropDown };
};

export default useDropDown;
