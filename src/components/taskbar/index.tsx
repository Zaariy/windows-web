import { DateAndTime } from "../../System/time/index"
import { globalIcons } from "../../FileSystem/windowIcons"

export function TaskBar () {

    return (
    <div className="bg-white absolute bottom-0 w-full py-10px px-[5px] flex justify-between">
        <ul className="rightSide">
            <li className="h-[100%] flex items-center"><img className="w-[30px]" src={globalIcons.windowLogo} alt="window logo"></img></li>
        </ul>
        <ul className="leftSide">
            <li>
                <DateAndTime />
            </li>
        </ul>
    </div>
    )
}