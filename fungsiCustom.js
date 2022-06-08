// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  const allFile = [file1, file2, file3];
  const result = [];

  allFile.forEach((item) => {
    const getItem = new Promise((resolve, reject) => {
      fs.readFile(item, (error, dataJson) => {
        if (error) {
          reject(error);
          return;
        }

        const data = JSON.parse(dataJson);
        let expectedString = "";

        // case object
        if (data?.message !== undefined) {
          expectedString = data?.message;
        }

        // case array
        if (data?.length) {
          data?.forEach((item) => {
            if (item?.message !== undefined) {
              expectedString = item?.message;
            }

            if (item?.data?.message !== undefined) {
              expectedString = item?.data?.message;
            }
          });
        }

        word = expectedString.split(" ");

        resolve(word[1]);
      });
    });
    result.push(getItem);
  });

  // call result in callback
  Promise.all(result)
    .then((values) => {
      fnCallback(null, values);
    })
    .catch((error) => {
      fnCallback(error, null);
    });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
