
import mongoose from "mongoose";    


const connectDB= async ()=>{
try{

   //mongodb connection string

}catch(error){
    console.log("MONGODB connection error",error);
    process.exit(1);
}



}
export default connectDB;