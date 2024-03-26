export const globalIcons =  {
    //  System icons 
    windowLogo : require("../background/windows.png"),
    systemInformationIcon : require("../background/icons/os-system-icon.png") ,
    squareIcon : require("../background/icons/square.png"),
    taskMangerIcon : require("../background/icons/taskmanger.png") ,
    xIcon :  require("../background/icons/x-icon.png"),
    subIcon : require("../background/icons/subtraction-icon.png"),
    textEditorIcon : require("../background/icons/text-editor.png"),
    homeIcon : require("../background/icons/icons8-home-16.png"),
    openedFolder :require("../../FileSystem/background/icons/open-folder.png") , 
    closedFolder : require("../../FileSystem/background/icons/folder.png"),
    fileIcon : require("../../FileSystem/background/icons/file-icon.png"),
    fileExplorerIcon : require("../../FileSystem/background/icons/fileExplorerIcon.png"),
    desktopIcon : require("../../FileSystem/background/icons/Desktop.48.png"),
    downloadFolderIcon : require("../../FileSystem/background/icons/down-arrow.png"),
    musicFolderIcon : require("../../FileSystem/background/icons/music-folder.png"),
    photoFolderIcon : require("../../FileSystem/background/icons/photofolder.png"),
    folder96 : require("../../FileSystem/background/icons/icons8-folder-96.png"),
    hardDrive : require("../../FileSystem/background/icons/external-hard-drive.png"),
    searchIcon : require("../../FileSystem/background/icons/search.png"),
    leftArrow : require("../../FileSystem/background/icons/icons8-left-arrow-32.png"),
    rightArrow : require("../../FileSystem/background/icons/icons8-arrow-30-left.png"),
    reloadIcon : require("../../FileSystem/background/icons/icons8-reload-32.png"),
    downArrow : require("../../FileSystem/background/icons/icons8-down-arrow-50.png"),
}

export const matchIcon =  (name : string) => {
  switch (name) {
    case "Desktop":
      return globalIcons.desktopIcon; 
      break;
    case "Downloads":
      return globalIcons.downloadFolderIcon;
      break
    case "Music" :
      return globalIcons.musicFolderIcon;
      break
    case "Photos" :
      return globalIcons.photoFolderIcon ;
      break
    case "hardDrive" : 
      return globalIcons.hardDrive;
      break
    default:
      return globalIcons.fileIcon ;
      break;
  }
}

