const fs = require('fs');



fs.appendFile("HelloWorld.txt","\nMore lines", (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Succesfully added to file!");
    }
})
