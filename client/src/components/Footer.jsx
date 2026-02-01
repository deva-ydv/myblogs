const Footer = () => {
  return (
    <>
      <div className="mt-8 md:mt-10 px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-10">
        <p className="py-4 text-center border-t border-slate-200 text-gray-600 hover:bg-indigo-50">
          Build By
          <a
            href="https://github.com/deva-ydv"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-blue-500
              text-white font-semibold
              px-3 py-1 rounded-full
              shadow-md
              hover:scale-110 hover:shadow-lg
              active:scale-95
              transition-all duration-300" >
            deva-ydv
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
