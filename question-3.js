// เริ่มเขียนโค้ดตรงนี้
let getUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    let dataFilter = data
      .filter((i) => i["name"].length > 17)
      .map((i) => i["name"]);
    console.log(dataFilter);
  } catch (error) {
    console.log(error);
  }
};

getUsers();
