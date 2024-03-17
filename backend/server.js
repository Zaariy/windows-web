const express = require('express');
const app = express();
const si =  require("systeminformation") ;
const os = require('os');
const fs =  require("fs") ;
const path =  require("path") ;
const systemInformation =  require("nodejs-system-info") ;
require("dotenv").config()
const PORT = process.env.PORT || 8080; // Set port number



// Define a route
app.get('/api/computerInfo', async (req, res) => {
    const cpuInfo = await si.cpu() ;
    const osInfo = await si.osInfo()
    // Get total system memory in bytes
    const totalMemoryBytes = os.totalmem();
    // Convert bytes to gigabytes
    const totalMemoryGB = totalMemoryBytes / (1024 * 1024 * 1024 );
    res.send(JSON.stringify({

    "Processor" :  `${cpuInfo.manufacturer}  ${cpuInfo.brand}  ${cpuInfo.speedMax} GHz`,
    "InstalledRamMemory" : `${totalMemoryGB.toFixed(2)}`,
    "SystemType" : `${osInfo.arch}-bit operating system, ${osInfo.arch}-based processor`,
    "ComputerName" : osInfo.fqdn,
    "FullComputerName": osInfo.hostname ,
    "ProductId" : osInfo.serial
   }));


});

const s =  new systemInformation(1000)  ;
app.get("/api/track" , async (req , res) => {
    const filePath = path.resolve('./' , 'logfile', 'cpu&ram.log.txt') ; 
    let latest = null ;
    fs.writeFile(filePath , JSON.stringify(s.get(['cpu' , 'ram'])) , (err) => {
        if(err){
            console.error(err) ;
            return ;
        }
    
    }) 

    latest =  await  fs.readFileSync(filePath , "utf8" , (err , data) => {
        if(err){
            console.error(err) ;
            return;
        }
        console.log(data) ;
        return data ;
    })

    res.send(latest) 
})

//  production
app.use(express.static(path.join(__dirname, "../","/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../", "build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
