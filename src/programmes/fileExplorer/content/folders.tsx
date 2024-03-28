import {matchIcon , globalIcons} from "../../../FileSystem/windowIcons/index";
import type {NodeFile , NodeFolder} from "../../../DataStructure/virtualFileSysTree/type"

export function Folders({folders}: {folders : (NodeFolder | NodeFile)[]}) {
  return <> {folders.map((e : NodeFile | NodeFolder) => (
    <div key={e.id} className="flex pl-6  py-1 items-center mb-2 hover:bg-[#111118] rounded-sm hover:border-l-2 hover:border-l-white cursor-pointer  ">
      <img className="h-[30px]" src={matchIcon(e.name)} alt={e.name}  />
      <p className="pl-2">{e.name}</p>
    </div>
    )
  )} 
  </>
}  



