import Image from "next/image";
import FileNotFound from "../public/assets/404-error.jpg";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src={FileNotFound} alt="filenotfound" className="h-80 w-fit" />
    </div>
  );
};

export default NotFoundPage;
