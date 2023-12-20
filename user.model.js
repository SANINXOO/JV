import mongoose from "mongoose";
const schema=new mongoose.Schema({
    task:{type:String}
})
export default mongoose.model.tasksss||mongoose.model("task",schema)