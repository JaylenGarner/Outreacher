"use client";

const BlobArt = () => {
  return (
    <div className="relative w-[600px] h-[600px] flex flex_center max-xl:hidden">
      <img src="./paper-airplane.svg" className="absolute h-[350px] z-30" />
      <img src="./blobs/navy.svg" className="absolute h-[500px] z-10 " />
      <img src="./blobs/red.svg" className="absolute h-[450px] z-20" />
      <img src="./blobs/white.svg" className="absolute h-[530px] z-1" />
    </div>
  );
};

export default BlobArt;
