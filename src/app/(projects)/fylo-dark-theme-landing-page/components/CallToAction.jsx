const CallToAction = () => {
  return (
    <>
      <div className="w-3/5 flex flex-col gap-6 p-5 lg:p-10 items-center justify-center bg-fylo-dark-blue-testimonials-background rounded-lg mt-32 shadow-lg">
        <h2 className="text-2xl lg:text-3xl font-bold text-center">
          Get early access today
        </h2>
        <p className={"text-center opacity-80 w-full lg:w-4/5"}>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6">
          <input
            className="p-3 w-4/5 lg:w-3/5 rounded-full placeholder:text-sm placeholder:pl-3"
            type="text"
            placeholder={"email@exapmle.com"}
          />
          <button
            className="bg-gradient-to-r from-fylo-cyan-inside-call-to-action-gradient to-fylo-blue-inside-call-to-action-gradient text-fylo-white text-sm font-bold w-4/5 lg:w-1/4 h-12 rounded-full"
            type={"button"}
          >
            Get Started For Free
          </button>
        </div>
      </div>
    </>
  );
};
export default CallToAction;
