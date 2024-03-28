import {matchIcon , globalIcons} from "../../../FileSystem/windowIcons/index";

export function Drives () {
  const testData:string[] = ["Windows (C:)" , "Personal (D:)" ];

  return <> {testData.map((name : string) => (
    <div key={name} className="flex pl-6 py-1 items-center mb-2 hover:bg-[#111118] rounded-sm hover:border-l-2 hover:border-l-white cursor-pointer  ">
      <img className="h-[30px]" src={matchIcon("hardDrive")} alt={name}  />
      <p className="pl-2">{name}</p>
    </div>
    )
  )} 
  </>
}
