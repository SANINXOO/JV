import mongoose from "mongoose";
async function Connection(){
    const url=process.env.DB_URL+process.env.DB_NAME
    const db=await mongoose.connect(url);
    console.log("database is connected");
    return db;

}
export default Connection