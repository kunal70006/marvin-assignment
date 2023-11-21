import Button from "../common/button";

const Hero = () => {
  return (
    <div className="flex flex-col lg:px-32 py-8 px-8 tracking-widest grow items-center lg:items-start">
      <h1 className="text-2xl text-black/60 font-semibold mb-4">
        Revolutionize Your
      </h1>

      <span className="hidden lg:block 2xl:text-8xl xl:text-7xl lg:text-6xl text-4xl font-medium">
        Creative Projects with
        <br />
        the Ultimate AI-Powerdered
        <br />
        <span className="inline-flex items-center">
          Pattern
          <Button
            variant="solid"
            className="xl:text-xl text-base py-4 ml-8 mt-4"
          >
            start generating
          </Button>
          <p className="text-2xl ml-8 mt-4 text-black/60">
            The Next generation
            <br /> <b className="text-black">Production</b> for Designers
          </p>
        </span>
      </span>
      <span className="block text-center lg:hidden text-7xl font-medium">
        Creative Projects
        <br />
        with the Ultimate
        <br />
        AI-Powered Pattern
        <p className="text-2xl ml-8 mt-4 text-black/60">
          The Next generation
          <br /> <b className="text-black">Production</b> for Designers
        </p>
        <div className="flex justify-center">
          <Button
            variant="solid"
            className="xl:text-xl text-base py-4 ml-8 mt-4"
          >
            start generating
          </Button>
        </div>
      </span>
    </div>
  );
};

export default Hero;
