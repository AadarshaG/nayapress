import React from "react";

const Tabs = ({ tabs }) => {
  const [openTab, setOpenTab] = React.useState(0);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {tabs.map((tab, idx) => (
              <li className="-mb-px mr-2 last:mr-0  text-center" key={idx}>
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === idx
                      ? "text-black bg-gray-300"
                      : "text-green-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(idx);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  {tab.tabTitle}
                </a>
              </li>
            ))}
          </ul>
          {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"> */}
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              {tabs.map((tab, idx) => (
                <div
                  className={openTab === idx ? "block" : "hidden"}
                  key={idx}
                  id="link1"
                >
                  <div>{<tab.tabContent />}</div>
                </div>
              ))}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
