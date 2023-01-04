const pool = require("../../db");

const getBlogs = (req,res)=>{
  pool.query("SELECT * FROM blogs", (err, result)=>{
    if (err) throw err; 
    res.status(200).json(result.rows)
  })
}

const getBlogById = (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query("SELECT * FROM blogs WHERE id = $1", [id],(err, result)=>{
      if (err) throw err; 
      res.status(200).json(result.rows)
    })
  }

const addBlog = (req, res) => {
    const {title, body, publishedat, category, issponsored, image} = req.body;

    //check if same body content already exixt
    pool.query("SELECT s FROM blogs s WHERE s.body = $1", [body], (err,result)=>{
        if(err) throw err;
        if(result.rows.length){
            res.status(500).json({message:"Blog already exist !!"})
        }
    })

    // add blog to db
    pool.query("INSERT INTO blogs (title, body, publishedat, category, issponsored, image) VALUES ($1, $2, $3, $4, $5, $6)", [title, body, publishedat, category, issponsored, image], (err,result)=>{
        if (err) throw err;
        res.status(201).json("Student Created succesfull !!")
    })
}

const deleteBlogById = (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query("DELETE FROM blogs WHERE id = $1", [id],(err, result)=>{
        const noBlogFound = !result.rows.length;
        if(noBlogFound){
            res.json("No Blog found !!")
        }

      if (err) throw err; 
      res.status(200).json("Blod deleted succesfully !!")
    })
  }

const updateBlog = (req, res) => {
    const id = req.params.id;
    const {title, body, publishedat, category, issponsored, image} = req.body;
// console.log(typeof(title), typeof(body), typeof(publishedat), typeof(category), typeof(issponsored), typeof(image))
    pool.query("SELECT * FROM blogs WHERE id = $1", [id], (err, result)=>{
        const noBlogFound = !result.rows.length;
        if(noBlogFound){
            res.json("No Blog found !!")
        }
    })

    pool.query("UPDATE blogs SET title = $1, body = $2, publishedat = $3, category = $4, issponsored = $5, image = $6 WHERE id = $7 ", [title, body, publishedat, category, issponsored, image, id], (err, result) => {
        if (err) {
             console.log(err);
            throw err}; 
        res.status(200).json("Blod Updated succesfully !!")
    })
}

module.exports = {getBlogs, getBlogById, addBlog, updateBlog, deleteBlogById};