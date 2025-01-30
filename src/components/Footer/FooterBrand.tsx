import logo from './public/footer-logo.svg';
export const FooterBrand = () => {
  return (
    <aside className="flex flex-col gap-2 items-center text-center space-y-2">
      <div className="w-[200px]   max-h-[50px] bg-gradient-to-r from-white/50  to-black/50 rounded-lg ">
        <img src={logo} alt="footerLogo" />
      </div>
      <p className="text-lg font-semibold text-white">
        Providing reliable information
        <span
          style={{ perspective: '1000px' }}
          className=" mx-2 animate-pulse duration-1000 delay-500 transform  p-1 bg-gray-400/65"
        >
          about modern films
        </span>
      </p>
      <p className="text-sm text-gray-50">
        Copyright © {new Date().getFullYear()} - All rights reserved
      </p>
    </aside>
  );
};
