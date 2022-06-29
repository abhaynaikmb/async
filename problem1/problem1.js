var fs = require("fs");

fs.mkdir("./data", function (err) {
  if (err) {
    throw err;
  }

  console.log("creating directory......");
  fs.writeFile(
    "./data/one.json",
    "{The  argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Array}",
    function (err, data) {
      if (err) {
        throw err;
      }
      fs.writeFile(
        "./data/two.json",
        "{The  argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Array}",
        function (err, data) {
          if (err) {
            throw err;
          }
          fs.writeFile(
            "./data/three.json",
            "{The  argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Array}",
            function (err, data) {
              if (err) {
                throw err;
              }

              console.log("writing to file......");
              fs.unlink("./data/one.json", function (err) {
                if (err) {
                  return console.error(err);
                }
                fs.unlink("./data/two.json", function (err) {
                  if (err) {
                    return console.error(err);
                  }
                  fs.unlink("./data/three.json", function (err) {
                    if (err) {
                      return console.error(err);
                    }
                    console.log("file deleted ");
                    fs.rmdir("data", function (err) {
                      if (err) {
                        return console.error(err);
                      }
                      console.log("directory deleted");
                    });
                  });
                });
              });
            }
          );
        }
      );
    }
  );
});
