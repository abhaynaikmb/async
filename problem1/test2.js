var fs = require('fs');
let data=[];
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response.json()))
  .then(json => data.push(json))

console.log(data)

let student = {
    Roll_No : 10,
    name : "John"
}

fs.mkdir("./data", function (err) {
    if(err)
    {
        throw err;
    }

    fs.writeFile("./data/sample.json" , JSON.stringify(student), function (err) {

        if(err)
        {
            throw err
        }


        console.log('Task completed');
        fs.unlink("./data/sample.json", function (err) {
            if(err)
            {
                return console.error(err)
            }
            console.log("file deleted successfully");
            fs.rmdir("data",function(err) {
                if(err)
                {
                    return console.error(err)
                }
                console.log("directory deleted")
            })
        })

    })

})