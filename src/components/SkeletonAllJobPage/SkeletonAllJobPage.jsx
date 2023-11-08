import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonAllJobPage = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, idx) => (
      <div
        key={idx}
        className="p-3 bg-[#54466911] md:p-5 rounded-lg border border-[#46464633]"
      >
        <tr className="bg-[#eeeaff] md:py-2 dark:bg-[#322942] rounded-lg  grid xl:grid-cols-8 ">
          <th className="text-center w-[200px]">
            <Skeleton
              baseColor="#bebebe36"
              highlightColor="#c2c2c24b"
              count={1}
              style={{ marginBottom: ".6rem" }}
            />
          </th>
          <th className=" text-start overflow-hidden">
            <Skeleton
              baseColor="#bebebe36"
              highlightColor="#c2c2c24b"
              count={1}
              style={{ marginBottom: ".6rem" }}
            />
          </th>

          <td className="">
            <p>
              <Skeleton
                baseColor="#bebebe36"
                highlightColor="#c2c2c24b"
                count={1}
                style={{ marginBottom: ".6rem" }}
              />
            </p>
          </td>
          <td >
            <Skeleton
              baseColor="#bebebe36"
              highlightColor="#c2c2c24b"
              count={1}
              style={{ marginBottom: ".6rem" }}
            />
          </td>
          <td> <Skeleton
              baseColor="#bebebe36"
              highlightColor="#c2c2c24b"
              count={1}
              style={{ marginBottom: ".6rem" }}
            /></td>
          <td> <Skeleton
              baseColor="#bebebe36"
              highlightColor="#c2c2c24b"
              count={1}
              style={{ marginBottom: ".6rem" }}
            /></td>
          <td>
            <div className="md:flex flex-1   items-center  gap-3">
              <button className="py-[2px] px-4 text-sm w-1/2 rounded-xl">
              <Skeleton
              baseColor="#bebebe36"
              highlightColor="#c2c2c24b"
              count={1}
              style={{ marginBottom: ".6rem" }}
            />
              </button>
              <button className="py-[2px] px-4 w-1/2 ">
              <Skeleton
              baseColor="#bebebe36"
              highlightColor="#c2c2c24b"
              count={1}
              style={{ marginBottom: ".6rem" }}
            />
              </button>
            </div>
          </td>
          <th className="flex items-center justify-center  ">
            <button className="   py-[2px] px-4 w-full">
            <Skeleton
              baseColor="#bebebe36"
              highlightColor="#c2c2c24b"
              count={1}
              style={{ marginBottom: ".6rem" }}
            />
            </button>
          </th>
        </tr>
      </div>
    ));
};

export default SkeletonAllJobPage;
