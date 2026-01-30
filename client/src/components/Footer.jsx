
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
            className="ml-1 bg-red-400 text-white rounded px-2 py-0.5 hover:bg-red-500 transition"
          > 
            Me
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
