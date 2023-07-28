import connection from "../configs/connectDB.js";

let getHomepage=(req, res)=>{
  //logic
  let data=[]
  connection.query(
    'SELECT * FROM `users`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      results.map((row)=>{
        data.push({
          id:row.id,
          firstName : row.firstName,
          lastName : row.lastName,
          email : row.email,
          address : row.address,
        })
      })

      console.log(">>>check data : ", data);
        return res.render('test/index.ejs',{dataUser:JSON.stringify(data)})
    })

}

export default {
  getHomepage
}