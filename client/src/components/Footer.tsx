const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="flex flex-col py-12 lg:py-28 items-center bg-primary"
    >
      <p className="lg:text-base md:text-sm text-xs text-center text-white font-light font-noto-sans">
        &copy; {currentYear} Connor Park. All Rights Reserved.
      </p>
    </section>
  );
};

export default Footer;
