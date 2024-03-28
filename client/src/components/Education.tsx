import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.querySelector(".move-text");
      const section = document.getElementById("about");
      const sectionPosition = section?.getBoundingClientRect().top ?? 0;
      const screenPosition = window.innerHeight;

      if (sectionPosition < screenPosition) {
        textElement?.classList.add("active");
      } else {
        textElement?.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="flex items-center min-h-screen lg:scroll-mt-48 px-12 md:px-16 py-24 bg-white"
      id="about"
    >
      <div className="flex flex-col gap-y-3 items-center w-full">
        <h1 className="md:text-lg text-base text-primary font-noto-sans font-light">
          education
        </h1>
        <p className="text-primary lg:text-7xl md:text-6xl text-5xl font-karma font-semibold text-center">
          university of michigan, ann arbor
        </p>
        <p className="lg:text-lg md:text-base text-sm text-primary font-noto-sans font-light">
          College of Engineering, Computer Science B.S.E
        </p>
        <p className="lg:text-lg md:text-base text-sm text-primary lg:w-1/2 text-center font-noto-sans font-light">
          Courses: Programming and Intro Data Structures, Discrete Math,
          Microprocessors and Toys, Data Structures and Algorithms, Intro to
          Computer Organization
        </p>
        <p className="lg:text-lg md:text-base text-sm text-primary font-noto-sans font-light">
          Activities:{" "}
          <a
            href="https://v1michigan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal underline"
          >
            V1 Michigan
          </a>
          ,{" "}
          <a
            href="https://www.upround.vc/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal"
          >
            UpRound Ventures
          </a>
        </p>
      </div>
    </section>
  );
};

export default Education;
