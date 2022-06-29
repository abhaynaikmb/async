function operations() {
  fs = require("fs");

  //1. Read the given file lipsum.txt

  fs.readFile("lipsum.txt", "utf8", function (err, data) {
    if (err) {
      return console.error(err);
    }

    //2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt

    data = data.toUpperCase().toString();


    fs.writeFile("./loremipsm.txt", data, function (err) {
      if (err) {
        throw err;
      }
      console.log("file created");
      fs.writeFile("./filenames.txt", "loremipsm.txt ", function (err) {
        if (err) {
          throw err;
        }
        console.log("file name appended ");

        //3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt

        fs.readFile("loremipsm.txt", "utf8", function (err, data) {
          if (err) {
            throw err;
          }

          data = data.toLowerCase().split("\n").toString();

          fs.writeFile("ipsmdolo.txt", data, function (err) {
            if (err) {
              throw err;
            }
            console.log("file created");

            fs.appendFile("filenames.txt", "ipsmdolo.txt ", function (err) {
              if (err) {
                throw err;
              }
              console.log("file name appended ");

              //4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt

              fs.readFile("./ipsmdolo.txt", "utf8", function (err, data) {
                if (err) {
                  throw err;
                }

                data = data.split("").sort().toString();

                fs.writeFile("dolosit.txt", data, function (err) {
                  if (err) {
                    throw err;
                  }
                  console.log("file created");
                  fs.appendFile("filenames.txt", "dolosit.txt", function (err) {
                    if (err) {
                      throw err;
                    }
                    console.log("file name appended ");

                    //5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
                    fs.readFile("filenames.txt", "utf8", function (err, data) {
                      if (err) {
                        throw err;
                      }
                      data.split(" ").forEach((element) => {
                        fs.unlink(element, function (err) {
                          if (err) {
                            return console.error(err);
                          }
                          console.log("file deleted ");
                        });
                      });
                      fs.unlink("filenames.txt", function (err) {
                        if (err) {
                          return console.error(err);
                        }
                        console.log("filenames  deleted ");
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}
operations();
