import axios from "axios";

var _user = null;
var _credits = 0;
const SERVER_URI = process.env.SERVER_BASE_URL;

const GET_USER_API = SERVER_URI + "/user/getOne/"
const INSERT_USER_API = SERVER_URI + "/user/post/"

const GET_IMAGES_API = SERVER_URI + "/image/getAllByUserId/"

const UserDB = {
     getUser:async function(id){
     const userInfo = await axios.get(GET_USER_API + id);
     return userInfo;
   },
    
    insertUser:async function(id,email,phoneNumber,displayName,photoURL)
    {
        email = email == null ? "" : email;
        photoURL = photoURL ==  null ? "" : photoURL;
        phoneNumber = phoneNumber ==  null ? "" : phoneNumber;
        displayName = displayName ==  null ? "" : displayName;

        // console.log(SERVER_URI)
        // console.log(INSERT_USER_API)
    
        const userInfo = await axios.post(INSERT_USER_API,{id,email,phoneNumber,displayName,phoneNumber,photoURL});
        return userInfo;
    },

    getImages:async function()
    {
        const images = await axios.get(GET_IMAGES_API + _user._id);
        return images;
    },
    
    getServerURI:function()
    {
        return SERVER_URI;
    },

    setUser:function(user)
    {
        _user = user;
    },

    getUser:function()
    {
        return _user;
    },

    setCredits:function(credits)
    {
        _credits = credits;
    },

    getCredits:function(){
        return _credits
    },

    uploadImage:async function(image,choice)
    {
        //  axios.post("http://localhost:8080/image/post", {
        //   userId:UserDB.getUser()._id,
        //   image: userImage.split(",")[1],
        //   choice: template.split(",")[1],
        // })
        // .then(function (response) {
        //  // console.log(response);
        //   UserDB.getUser().redeemCredits(1)
        //   setGeneratedImg(`data:image/webp;base64,${response.data.result}`);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
        const response = await axios.post(SERVER_URI + "image/post",{ userId:_user._id,image:image,choice:choice})
       
        return response;
    }

}

export default UserDB;