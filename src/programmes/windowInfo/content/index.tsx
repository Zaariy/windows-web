import {globalIcons} from "../../../FileSystem/windowIcons/index";
import type {T} from "../type"


export const Content = (props : {data : T | undefined}) => {
    const {data} =  props ; 

    return (
    <div className="w-full  h-[90%] pl-[15px] mt-[10px] truncate">
        
        <h1 className="text-sky-500 w-full text-lg font-normal" >View basic information about your computer</h1>
        <p  className="br py-[5px]  relative  after:block after:content-[''] after:bg-gray-200 after:absolute  after:h-[1px] after:w-full  after:top-[50%]  after:ml-[125px] ">Windows edition</p>
        <ul className="pl-[10px]">
            <li className="flex justify-between items-center px-[30px]">
                <div>
                    <p>Window 10 Enterprise</p>
                    <p>Windows Feature Experience Pack 1000.19053.1000.0</p>
                </div>

            <div className="flex  items-center">
                <img className="w-[100px]" src={globalIcons.windowLogo} alt="window logo"></img>
                <p className="text-4xl text-sky-400 pl-[10px]">Windows 10</p>
            </div>
            </li>
        </ul>

        <p className="br py-[10px]  relative  after:block after:content-[''] after:bg-gray-200 after:absolute  after:h-[1px] after:w-full after:top-[50%]  after:ml-[20px] after:left-[38px]">System</p>
        <ul>
            <li className="px-[30px] flex w-full  justify-between"><p className="flex-1 w-[40] ">Processor:</p> <p className="flex-2 w-[60%]">{data?.Processor}</p></li>
            <li className="px-[30px] flex w-full  justify-between"><p className="flex-1 w-[40] ">Installed memory (Ram):</p> <p className="flex-2 w-[60%]">{data?.InstalledRamMemory} GB</p></li>
            <li className="px-[30px] flex w-full  justify-between"><p className="flex-1 w-[40] ">System type:</p><p className="flex-2 w-[60%]">{data?.SystemType}</p></li>
            <li className="px-[30px] flex w-full  justify-between"><p className="flex-1 w-[40] ">Pen and touch</p><p className="flex-2 w-[60%]">No pen or touch input is available for this display</p></li>
        </ul>

        <p className=" py-[10px]  relative  after:block after:content-[''] after:bg-gray-200 after:absolute  after:h-[1px] after:w-full after:top-[50%]  after:ml-[20px] after:left-[349px]">Computer name , domain and workgroup settings</p>
        <ul>
        
            <li className="px-[30px] flex w-full  justify-between"><p className="flex-1 w-[40] ">Computer name :</p><p className="flex-2 w-[60%]">{data?.ComputerName}</p></li>
            <li className="px-[30px] flex w-full  justify-between"><p className="flex-1 w-[40] ">Full computer name :</p><p className="flex-2 w-[60%]">{data?.FullComputerName}</p></li>
        </ul>
        <p className=" py-[10px]  relative  after:block after:content-[''] after:bg-gray-200 after:absolute  after:h-[1px] after:w-full after:top-[50%]  after:ml-[20px] after:left-[135px]">Windows activation</p>
        <ul>
            <li className="px-[30px] flex w-full  justify-between"><p className="flex-1 w-[40] ">Windows is activated </p><p className="flex-2 w-[60%]">Read the Microsoft Software License</p></li>
            <li className="px-[30px] flex w-full  justify-between"><p className="flex-1 w-[40] ">Product ID :</p><p className="flex-2 w-[60%]">{data?.ProductId}</p></li>
        </ul>
    </div>)
}
