import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ReactSkeleton = ({ cards }) => {
    return Array(cards)
      .fill(0)
      .map((_, idx) => (
        <div key={idx} className="p-3 bg-[#54466911] md:p-5 rounded-lg border border-[#46464633]">
          <div className="">
            <div className="flex gap-6">
              <div>
                <Skeleton baseColor="#bebebe36" highlightColor="#c2c2c24b" circle width={60} height={60} />
              </div>
              <div className="w-full">
                <Skeleton baseColor="#bebebe36" highlightColor="#c2c2c24b" count={2} style={{ marginBottom: ".6rem" }} />
              </div>
            </div>
            <div className="w-full flex gap-6 mt-2">
              <button className="w-full rounded-xl">
                <Skeleton baseColor="#bebebe36" highlightColor="#c2c2c24b" />
              </button>
              <button className="w-full py-[2px] rounded-xl">
                <Skeleton baseColor="#bebebe36" highlightColor="#c2c2c24b" />
              </button>
              <button className="w-full py-[2px] rounded-xl">
                <Skeleton baseColor="#bebebe36" highlightColor="#c2c2c24b" />
              </button>
            </div>
            <div>
              <div className="w-1/2">
                <Skeleton baseColor="#bebebe36" highlightColor="#c2c2c24b" count={4} style={{ marginBottom: ".6rem" }} />
              </div>
              <button className="mt-2 w-[120px] rounded-xl">
                <Skeleton baseColor="#bebebe36" highlightColor="#c2c2c24b" height={30} />
              </button>
            </div>
          </div>
        </div>
      ));
  };
  

export default ReactSkeleton;
