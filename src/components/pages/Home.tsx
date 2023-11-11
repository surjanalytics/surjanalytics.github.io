import usePageTitle from "src/hooks/usePageTitle";
import "src/components/pages/home.css";

const Home = () => {
  usePageTitle("FirmEye");
  return (
    <div className="bg-image home-marquee flex flex-column items-center justify-between">
      <div className="mt5 w-100 ph3 flex flex-column items-center">
        <h1 className="marquee-text fw8 tc mb0 white">FirmEye</h1>
        <p className="pa0 pb2 fw4 f4 light-gray tc">
          Your automated tool that researches, formats, and extrapolates
          business data.
        </p>
      </div>
    </div>
  );
};

export default Home;
