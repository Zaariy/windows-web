import {useState} from "react";
import {globalIcons} from "../../FileSystem/windowIcons/index";
import {Window} from "../window/index";
// Types

type treeProp =  {
  treeFile : []
}
// this data just for testing
const treeDataTest =  [
  {
  name: "Downloads",
  data: [
     {
    name: "file1.txt",
    data: "<p>Hallow World</p>",
    type: "file",
    path: "/file1.txt",
    time: "2024-03-25T11:46:42.688Z"
    }
  ],
  type: "folder",
  path: "/Downloads",
  time: "2024-03-25T11:46:42.688Z"
 }
]


const Item =  ({item} : any) => {
    const [isOpend , setOpend] = useState(false);
    return (
      <div  className={`font-normal flex ${item.type == "file" ? "flex-row" : "flex-col"} cursor-pointer my-2`}>
        {item.type == "file" ? <img className="w-[32px] pr-2" src={globalIcons.fileIcon} alt="file" />: <img onClick={() => setOpend(prv => !prv)} className="w-[32px] pr-2" src={`${isOpend ? globalIcons.openedFolder: globalIcons.closedFolder}` } alt="folder" />}
        
        <p>{item.name}</p>
        {item.type == "folder" ? <div className={`subchild ${isOpend ? "pl-5 " : "hidden"}  `}>{item.data.map((b : any , index : number) => (<Item key={`${b.name}${index}`} item={b} /> ))}</div> : ''}
      </div>
    )
}

const Menu = ({items} : any ) => {
  return (
    <div className="w-60 h-full p-2 text-white ">
       {items.map((e : any ) => <Item key={e.name} item={e} />)} 
    </div>
  );
}

export const FileTreeSys =  ({treeFolder} : any) => {
  
  return <Menu items={treeFolder}  />
}
