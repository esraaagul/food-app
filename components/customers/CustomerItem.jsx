import Image from "next/image";

const CustomerItem = ({ imgSrc }) => {
  return (
    <div className="mt-5 mx-4">
      <div className="bg-secondary text-white rounded-md p-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="flex flex-col mt-4">
          <span className="text-lg font-semibold">Moana Michell</span>
          <span className="text-sm">magna aliqua</span>
        </div>
      </div>
      <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-8  before:content-[' '] before:bg-primary before:w-5 before:h-5 before:rotate-45 before:-translate-y-3 flex justify-center">
        <Image src={imgSrc} alt="" fill className="rounded-full" />
      </div>
    </div>
  );
};

export default CustomerItem;
