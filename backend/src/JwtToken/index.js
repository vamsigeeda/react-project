import jwt from 'jsonwebtoken';

const accessTokenSecret = 'youraccesstokensecret';
export const generateAccessToken = (user)=>{
  
    const accessToken = jwt.sign({ email: user.email}, accessTokenSecret);
    
   return accessToken;
}



