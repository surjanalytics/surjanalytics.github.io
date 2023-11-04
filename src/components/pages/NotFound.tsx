import Button from "src/components/basic/Button";
import Link from "src/components/basic/Link";
import usePageTitle from "src/hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("404 - FirmEye");
  return (
    <div className="bg-image not-found-marquee flex flex-column items-center justify-between">
      <div className="mt5 w-100 ph3 flex flex-column items-center">
        <h1 className="marquee-text fw8 tc mb0 dark-gray">404</h1>
        <p className="pa0 pb2 fw4 f4 black tc">
          The requested page could not be found.
        </p>
        <Link to="/" className="mt2" unstyled>
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
