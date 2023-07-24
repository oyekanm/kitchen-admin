import  { models,model,Schema } from "mongoose";

enum userRole {
    ADMIN = "ADMIN",
    USER = "USER"
}

const usersSchema = new Schema({
    id: String,
    name: String,
    email: String,
    image: String,
    emailVerified: Date, 
    role:{
        type:String,
        enum:userRole,
        // default:userRole.USER
    }
}) 

const Users = models.User || model("User", usersSchema);
export default Users;