import {NavLink} from 'react-router-dom'
import './style.css'

import image1 from "../../assets/img/case/image1.png"
import image2 from "../../assets/img/case/image2.png"
import image3 from "../../assets/img/case/image3.png"
import image4 from "../../assets/img/case/image4.png"
import image5 from "../../assets/img/case/image6.png"
import image6 from "../../assets/img/case/image7.png"
import image7 from "../../assets/img/case/image8.png"
import image8 from "../../assets/img/case/image9.png"
import image9 from "../../assets/img/case/image10.png"
import image10 from "../../assets/img/case/image11.png"
import image11 from "../../assets/img/case/image12.png"
// import Line from "../../assets/img/case/Line 14.svg"
// import Line1 from "../../assets/img/case/Line 10.svg"


const CaseStage = () => {


    return(
        <>
           <div className="mt-7 font-open_sans self-stretch inline-flex h-auto w-full flex-col gap-y-8 bg-white py-8 p-7 dark:bg-gray-800  designBorder" >
                <div className="flex items-center text-left text-base font-bold leading-normal text-gray-700 dark:text-gray-400" >
                    विवादको चारण 
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-12 inline-flex ">
                    <div className="self-stretch justify-start items-start inline-flex">
                    <div className="relative displayBox h[104px] w-[156px] grow shrink-0 basis-0 flex-col justify-between items-center gap-3 inline-flex">
                        <div className="flex-col justify-center items-center gap-2 flex">
                            <div style={{backgroundColor: "#f9f5ed", height: "40px", width: "40px" }} className="flex items-center justify-center rounded-full text-center text-lg cursor-pointer transition duration-150 hover:ease-in-out hover:scale-150">
                                <NavLink to="/judicial-committee/dispute-registration">
                                    <img src={image1} alt="" className="h-6 w-6  justify-center items-center dark:text-white" />
                                </NavLink>
                            </div>
                            <div className="text-gray-600 text-[11px] font-normal font-['Open Sans'] leading-none">विवाद दर्ता</div>
                        </div>
                        <div className="text-gray-600 text-2xl font-bold font-['Open Sans'] leading-[28.80px]">३</div>
                    </div>
                    <div className="relative displayBox h[104px] w-[156px] grow shrink-0 basis-0 flex-col justify-center items-center gap-3 inline-flex">
                        <div className="flex-col justify-center items-center gap-2 flex">
                            <div style={{backgroundColor: "#f9f5ed", height: "40px", width: "40px" }} className="flex items-center justify-center rounded-full text-center text-lg cursor-pointer transition duration-150 hover:ease-in-out hover:scale-150">
                                <NavLink to="/judicial-committee/date-sheet">
                                    <img src={image2} alt="" className="h-6 w-6  justify-center items-center dark:text-white" />
                                </NavLink>
                            </div>
                            <div className="text-gray-600 text-[11px] font-normal font-['Open Sans'] leading-none">तारेख पर्चा</div>
                        </div>
                        <div className="text-gray-600 text-2xl font-bold font-['Open Sans'] leading-[28.80px]">३</div>
                    </div>
                     <div className="relative displayBox h[104px] w-[156px] grow shrink-0 basis-0 flex-col justify-center items-center gap-3 inline-flex">
                        <div className="flex-col justify-center items-center gap-2 flex">
                            <div style={{backgroundColor: "#f9f5ed", height: "40px", width: "40px" }} className="flex items-center justify-center rounded-full text-center text-lg cursor-pointer transition duration-150 hover:ease-in-out hover:scale-150">
                                <NavLink to="/judicial-committee/meeting">
                                    <img src={image3} alt="" className="h-6 w-6 justify-center items-center dark:text-white" />
                                </NavLink>
                            </div>
                            <div className="text-gray-600 text-[11px] font-normal font-['Open Sans'] leading-none">बैठक तालिका</div>
                        </div>
                        <div className="text-gray-600 text-2xl font-bold font-['Open Sans'] leading-[28.80px]">४</div>
                    </div>
                    <div className="relative displayBox h[104px] w-[156px] grow shrink-0 basis-0 flex-col justify-center items-center gap-3 inline-flex">
                        <div className="flex-col justify-center items-center gap-2 flex">
                            <div style={{backgroundColor: "#f9f5ed", height: "40px", width: "40px" }} className="flex items-center justify-center rounded-full text-center text-lg cursor-pointer transition duration-150 hover:ease-in-out hover:scale-150">
                                <NavLink to="/judicial-committee/date-of-hearing">
                                    <img src={image4} alt="" className="h-6 w-6 justify-center items-center dark:text-white" />
                                </NavLink>
                            </div>
                            <div className="text-gray-600 text-[11px] font-normal font-['Open Sans'] leading-none">सुनुवाइको मिति</div>
                        </div>
                        <div className="text-gray-600 text-2xl font-bold font-['Open Sans'] leading-[28.80px]">२</div>
                    </div>
                    <div className="relative displayBox h[104px] w-[156px] grow shrink-0 basis-0 flex-col justify-center items-center gap-3 inline-flex">
                        <div className="flex-col justify-center items-center gap-2 flex">
                            <div style={{backgroundColor: "#f9f5ed", height: "40px", width: "40px" }} className="flex items-center justify-center rounded-full text-center text-lg cursor-pointer transition duration-150 hover:ease-in-out hover:scale-150">
                                <NavLink to="/judicial-committee/selection-of-conciliators">
                                    <img src={image5} alt="" className="h-6 w-6 justify-center items-center dark:text-white" />
                                </NavLink>
                            </div>
                            <div className="text-center text-gray-600 text-[11px] font-normal font-['Open Sans'] leading-none">मेलमिलापकर्ता</div>
                        </div>
                        <div className="text-gray-600 text-2xl font-bold font-['Open Sans'] leading-[28.80px]">४</div>
                    </div>
                    <div className="h[104px] w-[155px] grow shrink-0 basis-0 flex-col justify-center items-center gap-3 inline-flex">
                        <div className="flex-col justify-center items-center gap-2 flex">
                            <div style={{backgroundColor: "#f9f5ed", height: "40px", width: "40px" }} className="flex items-center justify-center rounded-full text-center text-lg cursor-pointer transition duration-150 hover:ease-in-out hover:scale-150">
                                <NavLink to="/judicial-committee/complaint-witness">
                                    <img src={image6} alt="" className="h-6 w-6 justify-center items-center dark:text-white" />
                                </NavLink>
                            </div>
                            <div className="text-gray-600 text-[11px] font-normal font-['Open Sans'] leading-none">साक्षी प्रविष्टि</div>
                        </div>
                        <div className="text-gray-600 text-2xl font-bold font-['Open Sans'] leading-[28.80px]">३</div>
                    </div>
                    
                    {/* <div className="w-[1128px] h-[173px] left-[137px] top-[-1px] absolute">
                    </div> */}
                    </div>
                    <div className="self-stretch justify-between items-start inline-flex">
                        <div className="w-16 opacity-0 hidden md:block flex-col justify-center items-center gap-3">
                            <div className="flex-col justify-center items-center gap-2 flex">
                                <div style={{backgroundColor: "#f9f5ed", height: "40px", width: "40px" }} className="flex items-center justify-center rounded-full text-center text-lg cursor-pointer transition duration-150 hover:ease-in-out hover:scale-150">
                                    <NavLink to="/judicial-committee/complaint-statement">
                                        <img src={image7} alt="" className="h-6 w-6 justify-center items-center dark:text-white" />
                                    </NavLink>
                                </div>
                                <div className="text-center text-gray-600 text-[11px] font-normal font-['Open Sans'] leading-none">विवाद वकपत्र</div>
                            </div>
                            <div className="text-gray-600 text-2xl font-bold font-['Open Sans'] leading-[28.80px]">६</div>
                        </div>
                        <div className="relative displayBox h-[104px] w-[156px] grow shrink-0 basis-0 flex-col justify-center items-center gap-3 inline-flex">
                            <div className="flex-col justify-center items-center gap-2 flex">
                                <div style={{backgroundColor: "#f9f5ed", height: "40px", width: "40px" }} className="flex items-center justify-center rounded-full text-center text-lg cursor-pointer transition duration-150 hover:ease-in-out hover:scale-150">
                                    <NavLink to="/judicial-committee/complaint-statement">
                                        <img src={image7} alt="" className="h-6 w-6 justify-center items-center dark:text-white" />
                                    </NavLink>
                                </div>
                                <div className="text-center text-gray-600 text-[11px] font-normal font-['Open Sans'] leading-none">विवाद वकपत्र</div>
                            </div>
                            <div className="text-gray-600 text-2xl font-bold font-['Open Sans'] leading-[28.80px]">६</div>
                        </div>
                        <div className="relative displayBox h-[104px] w-[156px] grow shrink-0 basis-0 flex-col justify-center items-center gap-3 inline-flex">
                            <div className="flex-col justify-center items-center gap-2 flex">
                                <div style={{backgroundColor: "#f9f5ed", height: "40px", width: "40px" }} className="flex items-center justify-center rounded-full text-center text-lg cursor-pointer transition duration-150 hover:ease-in-out hover:scale-150">
                                    <NavLink to="/judicial-committee/agreement">
                                        <img src={image8} alt="" className="h-6 w-6 justify-center items-center dark:text-white" />
                                    </NavLink>
                                </div>
                                <div className="text-gray-600 text-[11px] font-normal font-['Open Sans'] leading-none">मिलापत्र​</div>
                            </div>
                            <div className="text-gray-600 text-2xl font-bold font-['Open Sans'] leading-[28.80px]">४</div>
                        </div>
                        <div className="relative displayBox h-[104px] w-[156px] grow shrink-0 basis-0 flex-col justify-center items-center gap-3 inline-flex">
                            <div className="flex-col justify-center items-center gap-2 flex">
                                <div style={{backgroundColor: "#f9f5ed", height: "40px", width: "40px" }} className="flex items-center justify-center rounded-full text-center text-lg cursor-pointer transition duration-150 hover:ease-in-out hover:scale-150">
                                    <NavLink to="/judicial-committee/conditional-entry">
                                        <img src={image9} alt="" className="h-6 w-6 justify-center items-center dark:text-white" />
                                    </NavLink>
                                </div>
                                <div className="text-gray-600 text-[11px] font-normal font-['Open Sans'] leading-none"> शर्त पुरागरेको</div>
                            </div>
                            <div className="text-gray-600 text-2xl font-bold font-['Open Sans'] leading-[28.80px]">३</div>
                        </div>
                        <div className="relative verticalBox h-[104px] w-[156px] grow shrink-0 basis-0 flex-col justify-center items-center gap-3 inline-flex">
                            <div className="flex-col justify-center items-center gap-2 flex">
                                <div style={{backgroundColor: "#f9f5ed", height: "40px", width: "40px" }} className="flex items-center justify-center rounded-full text-center text-lg cursor-pointer transition duration-150 hover:ease-in-out hover:scale-150">
                                    <NavLink to="/judicial-committee/keep-on-record">
                                        <img src={image10} alt="" className="h-6 w-6 justify-center items-center dark:text-white" />
                                    </NavLink>
                                </div>
                                <div className="text-gray-600 text-[11px] font-normal font-['Open Sans'] leading-none">अभिलेखमा राख्ने</div>
                            </div>
                            <div className="text-gray-600 text-2xl font-bold font-['Open Sans'] leading-[28.80px]">२</div>
                        </div>
                        <div className="w-[156px] grow shrink-0 basis-0 flex-col justify-center items-center gap-3 inline-flex">
                            <div className="flex-col justify-center items-center gap-2 flex">
                                <div style={{backgroundColor: "#f9f5ed", height: "40px", width: "40px" }} className="flex items-center justify-center rounded-full text-center text-lg cursor-pointer transition duration-150 hover:ease-in-out hover:scale-150">
                                    <NavLink to="/judicial-committee/to-send-court">
                                        <img src={image11} alt="" className=" h-6 w-6 justify-center items-center dark:text-white" />
                                    </NavLink>
                                </div>
                                <div className="text-center text-gray-600 text-[11px] font-normal font-['Open Sans'] leading-none">अदालत पठाउने</div>
                            </div>
                            <div className="text-gray-600 text-2xl font-bold font-['Open Sans'] leading-[28.80px]">४</div>
                        </div>
                        <div className="w-16 opacity-0 flex-col justify-center items-center gap-3 inline-flex">
                            <div className="flex-col justify-center items-center gap-2 flex">
                                <div style={{backgroundColor: "#f9f5ed", height: "40px", width: "40px" }} className="flex items-center justify-center rounded-full text-center text-lg cursor-pointer transition duration-150 hover:ease-in-out hover:scale-150">
                                    <NavLink to="/judicial-committee/complaint-statement">
                                        <img src={image7} alt="" className="h-6 w-6 justify-center items-center dark:text-white" />
                                    </NavLink>
                                </div>
                                <div className="text-center text-gray-600 text-[11px] font-normal font-['Open Sans'] leading-none">विवाद वकपत्र</div>
                            </div>
                            <div className="text-gray-600 text-2xl font-bold font-['Open Sans'] leading-[28.80px]">६</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseStage;