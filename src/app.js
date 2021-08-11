const express=require("express");
const app=express();
const port=process.env.PORT || 8000;
const path=require("path");
const hbs=require("hbs");
const staticPage=path.join(__dirname,"../public")
const Paged=path.join(__dirname,"../template/views")
const partialPath=path.join(__dirname,"../template/partials");

app.set("views",Paged)

app.set("view engine","hbs")

hbs.registerPartials(partialPath)
app.use(express.static(staticPage));

app.get("",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})


app.get("*",(req,res)=>{
    res.render("404error")
})

app.listen(port,()=>{
    console.log(`server listen at port ${port}`)
})