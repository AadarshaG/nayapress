import Member from "../../assets/img/members/Frame.svg"
import './style.css'
import {
    useGetKarmaChariList,
  } from "src/hooks/aadharbhut-bibaran/useKarmaChari";

const MemberData = () => {

    const { 
        data: karmachariData, 
      } = useGetKarmaChariList();


    return(
        <>
            <div className="min-w-0 my-7 p-7 font-open_sans h-auto w-full inline-flex flex-col items-start justify-start gap-y-8 self-stretch bg-white dark:bg-gray-800 designBorder mx-auto">
                <div className="inline-flex items-center justify-start">
                    <p className="text-gray-700 text-base font-bold font-['Open Sans'] leading-normal dark:text-gray-300">सदस्यहरू (८)</p> 
                </div>
                <div className="flex flex-wrap grow shrink-0 basis-0 items-start justify-between gap-y-8 m-auto">
                    {
                        karmachariData &&
                        karmachariData?.map((karmachari,index)=>(
                            <div key={index} className="w-[139px] h-[139px] flex-col justify-between items-center inline-flex">
                                <img className={`w-20 h-20 rounded-full border ${(karmachari?.taha?.taha_name === 'अध्यक्ष') ? "border-[#10B981]" : "border-emerald-500"}`} src={Member} alt="" />
                                <div className="flex-col justify-start items-center gap-1 flex">
                                    <div className={`text-emerald-500 text-base font-semibold font-['Open Sans'] leading-snug  ${(karmachari?.taha?.taha_name === 'अध्यक्ष') ? "text-[#10B981]" : "text-emerald-500"}`}>{karmachari?.employee_name} </div>
                                    <div className={`text-gray-600 text-xs font-normal font-['Open Sans'] leading-none`}>{karmachari?.taha?.taha_name}</div>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className="w-[139px] h-[139px] flex-col justify-between items-center inline-flex">
                        <img className="w-20 h-20 rounded-full border border-[#10B981]" src={Member} alt="" />
                        <div className="flex-col justify-start items-center gap-1 flex">
                            <div className="text-emerald-500 text-base font-semibold font-['Open Sans'] leading-snug text-[#10B981]">कृष्ण शर्मा </div>
                            <div className="text-gray-600 text-xs font-normal font-['Open Sans'] leading-none">अध्यक्ष</div>
                        </div>
                    </div> */}
                    {/* <div className="w-[139px] h-[139px] flex-col justify-between items-center inline-flex">
                        <img className="w-20 h-20 rounded-full border border-emerald-500" src={Member} alt="" />
                        <div className="flex-col justify-start items-center gap-1 flex">
                            <div className="text-emerald-500 text-base font-semibold font-['Open Sans'] leading-snug">शारदा ढुङ्गेल </div>
                            <div className="text-gray-600 text-xs font-normal font-['Open Sans'] leading-none">उपाध्यक्ष</div>
                        </div>
                    </div>
                    <div className="w-[139px] h-[139px] flex-col justify-between items-center inline-flex">
                        <img className="w-20 h-20 rounded-full border border-emerald-500" src={Member} alt="" />
                        <div className="flex-col justify-start items-center gap-1 flex">
                            <div className="text-emerald-500 text-base font-semibold font-['Open Sans'] leading-snug">गीता प्रजापति </div>
                            <div className="text-gray-600 text-xs font-normal font-['Open Sans'] leading-none">लेखा परीक्षक</div>
                        </div>
                    </div>
                    <div className="w-[139px] h-[139px] flex-col justify-between items-center inline-flex">
                        <img className="w-20 h-20 rounded-full border border-emerald-500" src={Member} alt="" />
                        <div className="flex-col justify-start items-center gap-1 flex">
                            <div className="text-emerald-500 text-base font-semibold font-['Open Sans'] leading-snug">लखन थापा </div>
                            <div className="text-gray-600 text-xs font-normal font-['Open Sans'] leading-none">सचिव</div>
                        </div>
                    </div>
                    <div className="w-[139px] h-[139px] flex-col justify-between items-center inline-flex">
                        <img className="w-20 h-20 rounded-full border border-emerald-500" src={Member} alt="" />
                        <div className="flex-col justify-start items-center gap-1 flex">
                            <div className="text-emerald-500 text-base font-semibold font-['Open Sans'] leading-snug">सर्मिला ओह </div>
                            <div className="text-gray-600 text-xs font-normal font-['Open Sans'] leading-none">सदस्य</div>
                        </div>
                    </div>
                    <div className="w-[139px] h-[139px] flex-col justify-between items-center inline-flex">
                        <img className="w-20 h-20 rounded-full border border-emerald-500" src={Member} alt="" />
                        <div className="flex-col justify-start items-center gap-1 flex">
                            <div className="text-emerald-500 text-base font-semibold font-['Open Sans'] leading-snug"> प्रविण ढकाल</div>
                            <div className="text-gray-600 text-xs font-normal font-['Open Sans'] leading-none">सदस्य</div>
                        </div>
                    </div>
                    <div className="w-[139px] h-[139px] flex-col justify-between items-center inline-flex">
                        <img className="w-20 h-20 rounded-full border border-emerald-500" src={Member} alt="" />
                        <div className="flex-col justify-start items-center gap-1 flex">
                            <div className="text-emerald-500 text-base font-semibold font-['Open Sans'] leading-snug">कुशल पोख्रेल </div>
                            <div className="text-gray-600 text-xs font-normal font-['Open Sans'] leading-none">सदस्य</div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default MemberData;
