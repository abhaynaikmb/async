var fs = require('fs');


fs.mkdir("./data", function (err) {
    if(err)
    {
        throw err;
    }
    console.log('creating directory......');
    fs.writeFile("one.json" , "{The  argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Array}", function (err,data) {

        if(err)
        {
            throw err
        }


        console.log('writing to file......');
        fs.unlink("one.json", function (err) {
            if(err)
            {
                return console.error(err)
            }
            console.log("file deleted ");
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