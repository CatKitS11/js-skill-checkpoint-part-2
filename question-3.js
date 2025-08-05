// เริ่มเขียนโค้ดตรงนี้
let getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    let dataFilter = data.filter(i => i["name"].length > 17).map(i => i["name"])
    console.log(dataFilter);
};

getUsers();

