import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed right-4 bottom-16 z-99 sm:right-8 sm:bottom-8">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="bg-primary/40 hover:bg-primary/70 hover:shadow-signUp flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-white shadow-md transition duration-300 ease-in-out sm:h-10 sm:w-10"
        >
          <span className="mt-[4px] h-2.5 w-2.5 rotate-45 border-t border-l border-white sm:mt-[6px] sm:h-3 sm:w-3"></span>
        </div>
      )}
    </div>
  );
}
