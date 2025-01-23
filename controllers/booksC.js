import db_connection from "../db.js";

function index(req,res){
    const sql= "SELECT title, author, image FROM db_books.books"
    console.log(sql, "index")
    db_connection.query(sql,(err,results) =>{
        if(err){
            return res.status(500).json({error: "Query fail"})
        }
        res.json(results)
    })
}

function show(req,res){
    const id=parseInt(req.params.id);
    const sql = "SELECT title,author,abstract,image FROM db_books.books WHERE `id` = ?";
    console.log(sql, "id singolo")

    db_connection.query(sql,[id], (err,results) =>{
        if (err){
            return res.status(500).json({error: "Query fail"}) 
        }
        
        const item = results[0]
        console.log(item, "oggetto singolo")

        if(!item){
            return res.status(404).json({error: "L'elemento non esiste"})
        }
        res.json(item);
    }) 

}
export {index,show};