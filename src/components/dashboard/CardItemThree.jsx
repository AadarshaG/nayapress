
const CardItemThree = ({ title, src, count, className }) => {
    return (
      <>
        <div className="relative flex left-5">
          <div className="flex items-center justify-center h-full">
            <div className=" flex flex-col items-center justify-center bg-white dark:bg-gray-800">
              <div style={{backgroundColor: "#f9f5ed", height: "56px", width: "56px" }}
                  className={`flex items-center justify-center rounded-full text-center text-lg ${className}`}
              >
                <img src={src} alt="" className="h-8 w-8 justify-center items-center dark:text-white" />
              </div>
              <div className="mt-3 flex flex-col items-center justify-center">
                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                  <span>{title}</span>{" "}
                </p>
                <p className="text-xl font-semibold mt-4 leading-none text-black dark:text-white">
                  {count}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -right-3 top-3 text-xl text-gray-300 dark:text-white font-bold">.................</div>
        </div>
      </>
    );
  };
  
  export default CardItemThree;
  