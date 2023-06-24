import  { models,model,Schema } from "mongoose";

enum userRole {
    ADMIN = "ADMIN",
    USER = "USER"
}

// type account ={
//     provider: 'google',
//     type: 'oauth',
//     providerAccountId: '117243785067982058845',
//     access_token: 'ya29.a0AWY7CklbYPjwF1TL232nwA0Vz-gC0Si9w0WWzIRXzHyMG_pecaBtYTfbwOD2JtJb7gDl6_w2wrS-FvWBJG7hGX6atnNxzfsQryF5SONr3xrT5bY6vQ1N_aAqAziqX77mV_psqhKZB-aT6PJEbJa3B6jQ3oew-1gaCgYKAbMSARASFQG1tDrp0lbGzc5jlgjklpyDkQTn2w0166',
//     expires_at: 1687013513,
//     scope: 'openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
//     token_type: 'Bearer',
//     id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA1MTUwYTEzMjBiOTM5NWIwNTcxNjg3NzM3NjkyODUwOWJhYjQ0YWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMTY5ODMxNTEzNTEtcWI2NzQyc280Y2UxZXVoc2VhaGg4dm02bms5dGRwZnAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIxMTY5ODMxNTEzNTEtcWI2NzQyc280Y2UxZXVoc2VhaGg4dm02bms5dGRwZnAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTcyNDM3ODUwNjc5ODIwNTg4NDUiLCJlbWFpbCI6ImVuaXRhbmJvbHV3YXRpZmU1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiVV9mazM2OW5QSnlDVWEtYTJrazlsUSIsIm5hbWUiOiJCb2x1d2F0aWZlIE95ZWthbm1pIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBY0hUdGRUNnFIcEo3VV9HTzR2ZHJLcjVPdUZIR2VzWF9yOGxZbV96NEwtM2c9czk2LWMiLCJnaXZlbl9uYW1lIjoiQm9sdXdhdGlmZSIsImZhbWlseV9uYW1lIjoiT3lla2FubWkiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTY4NzAwOTkxNSwiZXhwIjoxNjg3MDEzNTE1fQ.naADhYU9zKMyfMm3sIunYjeREli7mki824Vu2cS1aspYJkTYhYg7ZmGLMR0Wvv2fzW9iGqAvTOrUdSMaoklhDC48nl4e_KWvS_A0bGCmAk3Tfv13zzHIGqMPfBTpzwARZJOnOGZvVvySDKA7uiIcOG3mex1c9J2PGKDkbs8g-veKlp6OphR-LbXEUIMM1swahnMYvyNALVpojadcXcsItRe6Wf8nqZC_mP-C-g0CumXBtqWhbg7VlFXaBxvLtHCUHQ2ItmMUVP80fAXiUycVt0ffDAppODgI_8nujLWvew6qbto0t5Z3W7x4xXoI5yX2HzJjfIpYh50fbFJlW2nfTg'
//   }
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