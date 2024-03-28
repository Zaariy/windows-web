import {useRef , useState , useEffect} from "react" ;
import {dargAndDrop} from "../window/functionHelper/drag&dropWindow" ;
import {useDispatch} from "react-redux";
import {createFile , createFolder} from "../../Services/windowsFileSys/index";

export function CreateFileOrFolderComponent ({type , close}) {
    const [file , setFile] = useState<{fileName: string , path: string}>({fileName : "" , path : ""}) 
    // windowRef : we use it for drag and drop window on Desktop
    const windowRef   =  useRef(null) ;
    const windowHeaderReference = useRef(null) ;
    const dispatch =  useDispatch();
    dargAndDrop(windowRef.current , windowHeaderReference.current);

    const getFileName  = (name: string) => {
      setFile((prev) => ({...prev , fileName : name}) );
    }

    const getPath  = (pathName: string = "/") => {
      setFile((prev) => ({...prev , path : pathName}) );
    }

    const create =  () => {

    if(file.fileName !== ""){
      if(type == "file"){
          dispatch(createFile({folderName : file.fileName , path : file.path}));
          // close componets after creating folder or file
          close({createFile : false , createFolder: false});
      }else {
          dispatch(createFolder({folderName : file.fileName , path : file.path}));
          close({createFile : false , createFolder: false});
      }
      }
    }

  return (
    <div  ref={windowRef} className="w-[400px] z-10 h-[220px] absolute text-white py-4 px-8 bg-[#05060a] rounded-md ">
      <header className="text-xl text-center w-full mb-4" ref={windowHeaderReference}>create {type}</header> 
      <main>
        <section>
          <input className="text-white h-9 w-full outline-none my-2 rounded-md pl-2" value={file.fileName} onChange={(e) => getFileName(e.target.value)} type="text" name="file" placeholder="e.x file.txt"  />
          <input className="text-white h-9 w-full outline-none my-2 rounded-md pl-2" value={file.path} onChange={(e) => getPath(e.target.value)} type="text" name="path" placeholder="file path default is /"  />
        </section>
        <section className="flex justify-between">
          <button className="p-4" onClick={() => close({createFile : false , createFolder: false})}>cencel</button> 
          <button onClick={create} className="p-4">create</button> 
        </section>
      </main>
    </div>
    )
}
