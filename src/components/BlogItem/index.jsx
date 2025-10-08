import { IoIosArrowForward, IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div className="blogItem">
      <div className="imgWrapper w-full overflow-hidden rounded-md relative">
        <img
          src="https://img.freepik.com/fotos-gratis/blog-online_53876-123696.jpg?semt=ais_hybrid&w=740&q=80"
          className="w-full"
          alt="Blog Image"
        />
        <span className="flex items-center justify-center gap-x-1 text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-xs font-medium">
          <IoMdTime className="text-lg" />5 April, 2025
        </span>
      </div>
      <div className="info py-4">
        <h2 className="text-lg font-medium">
          Nullam ullamcorper ornare molestie
        </h2>
        <p className="text-sm text-gray-500 text-ellipsis !mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <Link
          to="/"
          className="text-primary underline font-bold flex items-center gap-x-2"
        >
          Read More
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
