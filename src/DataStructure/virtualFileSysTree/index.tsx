import {generateId} from "../../globalFunctionHelper/index";


class NodeFile {
  id: string | null ;
  name: string | null;
  data: any | null;
  type: string;
  path: string;
  time: Date;

  constructor() {
    this.id=  null
    this.name = null;
    this.data = null;
    this.type = "file";
    this.path = `/${this.name}`;
    this.time = new Date();
  }



  setData(id : string | null , name: string | null, data: any) {
    this.id = id;
    this.name = name;
    this.data = data;
    this.path = `/${name}`;
  }
}

class NodeFolder extends NodeFile {

  constructor() {
    super()
    this.type = "folder";
    this.data = [];
  }


  setData(id: string | null ,name: string | null, data: (NodeFile | NodeFolder)[] | null) {
    this.id =  id ;
    this.name = name;
    this.path = `/${name}`;
    if(data){
      this.data.push(data);

    }
  }
}

export  class Tree {
  root: { folders: (NodeFile|NodeFolder)[] };
  deepLastPath: string = '';
  constructor(folders: (NodeFile|NodeFolder)[] = []) {
    if(folders){
      this.root = { folders: folders };
    }else {

      this.root = { folders: [] };
    }
  }
  setTree(tree : (NodeFile | NodeFolder)[]) : void{
    this.root = {folders : tree} ;
  } 
  createFolder(folderName: string | null, path: string | null = null): void {
    const newFolder = new NodeFolder();
    newFolder.setData(generateId() , folderName , null)
    let p: string | null = null;
    if (this.root.folders.length === 0) {
      this.root.folders.push(newFolder);
      this.setDeepPath(newFolder.name);
      return;
    }

    if (path) {
      let splitPathArry = path.split('/').filter((item) => item !== "");
      p = splitPathArry.join('/');
      let x = 0;
      let y = 0;
      let current = this.root.folders;
      while (x < current.length) {
        if (splitPathArry[y] !== current[x].name) {
          x += 1;
        } else {
          if (y == splitPathArry.length - 1) {
            current[x].data.push(newFolder);
            this.setDeepPath(newFolder.name);
            return 
          }
          current = current[x].data;
          x = 0;
          y += 1;
        }
      }
      return 
    }
    //  add within the root 
    this.root.folders.push(newFolder);
  }

  createFile(fileName: string, data: any | null = null, path: string | null = null): void {
    const newFile = new NodeFile();
    newFile.setData(generateId(), fileName, data);
    let p: string | null = null;
    if (path === null) {

      this.root.folders.push(newFile);
      return;
    }
    if (path) {
      let splitPathArry = path.split('/').filter((item) => item !== "");
      p = splitPathArry.join('/');
      let x = 0;
      let y = 0;
      let current = this.root.folders;
      while (x < current.length) {
        if (splitPathArry[y] !== current[x].name) {
          x += 1;
        } else {
          if (y == splitPathArry.length - 1) {
            current[x].data.push(newFile);
            return 
          }
          current = current[x].data;
          x = 0;
          y += 1;
        }
      }
      return 
    }
    //  add within the root 
    this.root.folders.push(newFile);
  }

  searchByName(name: string, path: string | null = null) {
    let results:[] = [];
    if (!path) {
      this.searchByNameInNode(this.root.folders, name, results);
    } else {
      let splitPathArray = path.split('/').filter((item) => item !== "");
      let current = this.root.folders;
      for (let i = 0; i < splitPathArray.length; i++) {
        let folderName = splitPathArray[i];
        let index = current.findIndex(folder => folder.name === folderName);
        if (index === -1) {
          return [];
        }
        current = current[index].data;
      }
      this.searchByNameInNode(current, name, results);
    }
    return results;
  }

  private searchByNameInNode(node: NodeFile[], name: string, results: NodeFile[]) {
    for (let i = 0; i < node.length; i++) {
      if (node[i].name === name) {
        results.push(node[i]);
      }
      if (node[i].type === "folder") {
        this.searchByNameInNode(node[i].data as NodeFile[], name, results);
      }
    }
  }

  searchById(id: string, path: string | null = null) {
    let results:[] = [];
    if (!path) {
      this.searchByIdInNode(this.root.folders, id, results);
    } else {
      let splitPathArray = path.split('/').filter((item) => item !== "");
      let current = this.root.folders;
      for (let i = 0; i < splitPathArray.length; i++) {
        let folderName = splitPathArray[i];
        let index = current.findIndex(folder => folder.name === folderName);
        if (index === -1) {
          return [];
        }
        current = current[index].data;
      }
      this.searchByIdInNode(current, id, results);
    }
    return results;
  }

  private searchByIdInNode(node: NodeFile[], id: string, results: NodeFile[]) : void{
    for (let i = 0; i < node.length; i++) {
      if (node[i].id === id) {
        results.push(node[i]);
      }
      if (node[i].type === "folder") {
        this.searchByIdInNode(node[i].data as NodeFile[], id, results);
      }
    }
  }

  setDeepPath(name: string | null) {
    this.deepLastPath = `${this.deepLastPath}/${name}`;
  }
  
  getAllFilesAndFolders() {
    const results: NodeFile[] = [];
    this.traverse(this.root.folders, results);
    return results;
  }

  private traverse(node: NodeFile[], results: NodeFile[]): void {
    for (const item of node) {
      results.push(item);
      if (item.type === 'folder') {
        this.traverse(item.data as NodeFile[], results);
      }
    }
  }
}
