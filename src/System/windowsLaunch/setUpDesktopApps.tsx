import {systemInformation} from "../../programmes/windowInfo/index" ;
import {taskmanger} from "../../programmes/taskmanger/index" ;
import { textEditor } from "../../programmes/texteditor";
import {fileExplorer}  from "../../programmes/fileExplorer/index";
import {netBox}  from "../../programmes/netBox/index";
import {tecTacToeGame} from "../../programmes/ticTacToeGame/index";
import {hashtag} from "../../programmes/hashtag/index";
import {portFolio} from "../../programmes/portfolio/index";

import {
    setScreenSize,
    setBackgroundImage,
    pushNewWindowApp,
    clean,
    pushDesktopApp,
    cleanDesktop
} from "../../Services/windowUiStructure";

import {globalIcons} from "../../FileSystem/windowIcons/index";

export const setUpDesktopApps = (dispatch): void => {

        dispatch(pushDesktopApp({appIcon : globalIcons.systemInformationIcon , appName:"system" , data : systemInformation }));
        // add Task Manager App To Desktop
        dispatch(pushDesktopApp({appIcon : globalIcons.taskMangerIcon , appName:"Task manager" , data : taskmanger }));
        // add Text Editor App To Desktop
        dispatch(pushDesktopApp({appIcon : globalIcons.textEditorIcon , appName:"Text Editor" , data : textEditor }));
        // add fileExplorer App To Desktop 
        dispatch(pushDesktopApp({appIcon : globalIcons.fileExplorerIcon, appName:"File Explorer" , data: fileExplorer }));
        // add NetBox App To Desktop
        dispatch(pushDesktopApp({appIcon : globalIcons.netBoxIcon, appName:"NetBox Movies" , data: netBox }));
        // add Tic Tac Toe game To Desktop
        dispatch(pushDesktopApp({appIcon : globalIcons.tecTacToeIcon, appName:"TecTacToe Game" , data: tecTacToeGame }));
        // add Hashtag App To Desktop
        dispatch(pushDesktopApp({appIcon : globalIcons.hashTagIcon, appName:"Hashtag " , data: hashtag }));
        // add My PortFolio To Desktop
        dispatch(pushDesktopApp({appIcon : globalIcons.portFolioIcon, appName:"My PortFolio" , data: portFolio }));
        

}
