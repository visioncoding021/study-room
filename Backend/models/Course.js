import mongoose from "mongoose";
const schema = new mongoose.Schema({
    title : {
        type: String,
        required : [true,"Please enter course title"],
        minLength:[4,"Title mus be at least 4 characters"],
        maxLength:[80,"Title can't exced 80 characters"],
    },
    description : {
        type: String,
        required : [true,"Please enter course title"],
        minLength:[20,"Title mus be at least 20 characters"],
    },
    lectures:[
        {    title:{
                type:String,
                required: true,
        },
         discription:{
            type:String,
            required: true,
    },
            video:{
                public_id:{
                    type:String,
                    required: true,
                },
                url:{
                    type:String,
                    required:true,
                }
            },
        }
    ],
    poster:{
        public_id:{
            type:String,
            required: true,
        },
        url:{
            type:String,
            required:true,
        }
    },
    views : {
        type: Number,
        default:0,
    },
    numOfVideos : {
        type:Number,
        default:0,
    },
    category : {
        type:String,
        required:true,
    },
    createdBy : {
        type:String,
        required:[true,"Enter Course Creator Name"],
    }
},{timestamps:true});

export const Course = mongoose.model("Course",schema);