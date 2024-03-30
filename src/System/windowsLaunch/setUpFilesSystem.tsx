import {
  createFolder,
} from "../../Services/windowsFileSys/index";

  
export const setUpFilesSystem = (dispatch) => {

    // start create Main or Root folders
    dispatch(createFolder({folderName:"Desktop"}));
    dispatch(createFolder({folderName:"Downloads"}));
    dispatch(createFolder({folderName:"Music"}));
    dispatch(createFolder({folderName:"Photos"}));

}
