import usePageTitle from "src/hooks/usePageTitle";
import type { Children } from "src/types";

type Props = {
  children: Children;
  title: string;
  documentTitle?: string;
  titleClass?: string;
};

const Page = ({ children, title, documentTitle, titleClass = "" }: Props) => {
  usePageTitle(`${documentTitle ?? title} - FirmEye`);

  return (
    <div className="flex flex-column items-center w-100 pb3">
      <h1 className={`page-title-text tc ${titleClass}`}>{title}</h1>
      {children}
    </div>
  );
};

export default Page;
