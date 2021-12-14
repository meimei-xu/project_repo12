const fs = require("fs");

function jsonReader(filePath, cb) {
  fs.readFile(filePath, "utf-8", (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb & cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}

const newObject = {
  name: "Noiva",
  order_count: 0,
  address: "Ottawa",
};

//updating a file
jsonReader("./customer.json", (err, customer) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  // increase customer order count by 1
  customer.order_count += 1;
  fs.writeFile("./customer.json", JSON.stringify(customer), (err) => {
    if (err) console.log("Error writing file:", err);
  });
});

//writing a new file
// fs.writeFile(
//   "./newCustomer.json",
//   JSON.stringify(newObject, null, 2),
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File successfully written");
//     }
//   }
// );

// const jsonString = JSON.stringify(newObject);
// console.log(jsonString);

// jsonReader("./customer.json", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.address);
//   }
// });

// fs.readFile("./customer.json", "utf-8", (err, jsonString) => {
//   //   console.log(jsonString);
//   if (err) {
//     console.log("error occured");
//     console.log(err);
//   } else {
//     try {
//       console.log("worked!");
//       const data = JSON.parse(jsonString);
//       console.log(data.name);
//     } catch (err) {
//       console.log("Error parsing JSON", err);
//     }
//   }
// });

// when reading files use async

// try {
//   const jsonString = fs.readFileSync("./customer.json", "utf-8");
//   const customer = JSON.parse(jsonString);
//   console.log(customer.address);
// } catch (err) {
//   console.log(err);
// }
