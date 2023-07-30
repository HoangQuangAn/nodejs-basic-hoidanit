import connection from "../configs/connectDB.js";

let getHomepage=(req, res)=>{
  //logic
  let data=[]
  connection.query(
    'SELECT * FROM `users`',
    function(err, results, fields) {
      results.map((row)=>{
        data.push({
          id:row.id,
          firstName : row.firstName,
          lastName : row.lastName,
          email : row.email,
          address : row.address,
        })
      })
        return res.render('test/index.ejs',{dataUser:data})
    })

}

let getUser=(req,res)=>{
  let user={}
  let id=req.params.userid
  connection.query(`select * from users where id=${id}`, function(err, results, fields){
    return res.render('test/detail-user.ejs',{data:results})
  })
}

let addUser=(req,res)=>{
  console.log(">>>check request ", req.body);
  let {firstName, lastName, email,address}=req.body
  connection.query(`INSERT INTO users (firstName, lastName, email, address) VALUES ('${firstName}', '${lastName}', '${email}', '${address}')`);
  return res.redirect('/')
}

let deleteUser=(req,res)=>{
  let {id}=req.params;
  connection.query(`DELETE FROM users WHERE id=${id};`)
  return res.redirect('/')
}
let editUser=(req, res)=>{
  let {id}= req.params;
  console.log(id);
  return res.render('test/update-user.ejs')
}
export default {
  getHomepage,
  getUser,
  addUser,
  deleteUser,
  editUser
}