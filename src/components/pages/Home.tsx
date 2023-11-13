import usePageTitle from "src/hooks/usePageTitle";
import "src/components/pages/home.css";
import Button from "src/components/basic/Button";
import Link from "src/components/basic/Link";

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
        <div className="flex items-center">
          <Link to="/about" unstyled className="mr3">
            <Button inverse>Learn more</Button>
          </Link>
          <Link to="/upload" unstyled>
            <Button inverse>Upload</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
