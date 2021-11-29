const fs = require('fs');



fs.writeFile("HelloWorld.txt","Hello World!", (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Succesfully wrote file!");
    }
})
