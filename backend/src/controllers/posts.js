import bcrypt from 'bcrypt';
 import {PostSchema} from '../schemas/index.js';
 import {generateAccessToken} from '../JwtToken/index.js';

 const saltRounds = 10;
 export const getPosts = (req,res)=>{
      res.send("Backend is working fine");
 }

 export const loginPosts =  async (request, response) => {
   
    try {
        var user = await PostSchema.findOne({ email: request.body.email}).exec();
        if(!user) {
            return response.status(400).send({ message: "The username does not exist" });
        }
       const validPassword = await bcrypt.compare(request.body.password, user.password);
        if(!validPassword) {
            return response.status(400).send({ message: "The password is invalid" });
        }
        if (user) {
           const token = generateAccessToken(user);
           response.json({
               token
           }).send(user);
            }
        
    } catch (error) {
        response.status(500).send(error);
    }
};
 


 export const registerPosts = async (req,res)=>{

     let password = req.body.password;
     await bcrypt.hash(password, saltRounds,  (err, hash)=> {
      password = hash;
      const post = {
        firstname:req.body.firstName,
        lastname:req.body.lastName,
        email:req.body.email,
        password:password,
      };
      
      const newPost = new PostSchema(post);
      console.log("newpost",newPost);
      try {
           newPost.save(); 
          
          res.json(newPost)
      } catch (error) {
          res.json(error.message);
      }

      });

}
