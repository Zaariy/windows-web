import {matchIcon , globalIcons} from "../../../FileSystem/windowIcons/index";

export function  DisplayFolders() {
    const testData:string[] = ["work" , "vscode" , "Development" , "Documents"  ];

    return (
      <>
        {
          testData.map((name:string) => (
          <div key={name} className=" pr-6 cursor-pointer">
            <img src={globalIcons.folder96} alt="folder" />
            <p className="text-center">{name}</p>
          </div>))
        }
      </>  
    ); 
}
