import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import Image from "next/image";
import profile from "@/../public/profile/profile.png";
import img from "@/../public/profile/img.png";
import close from "@/../public/credits/close.png";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import UserDB from "@/utils/userdb";
import { IoMdCheckbox } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import axios from "axios";

export default function Profile({ user, setIsProfileOpen }) {
  // const [contact, setContact] = useState();
  const router = useRouter();
  const [gallaryArr, setGallaryArr] = useState([]);
  const [select, setSelect] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  // console.log(JSON.stringify(select));

  useEffect(() => {
    // if(user.photoURL != "")
    //   profile.src = user.photoURL

    const images = UserDB.getImages().then(res => {
      setGallaryArr(res.data);
    });
  }, []);

  const logOutClickHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/");
      })
      .catch(error => {
        // An error happened.
      });
    localStorage.removeItem("isUserLoggedIn");
  };

  let contact;
  if (user.email) {
    contact = user.email;
  } else {
    contact = user.phoneNumber;
  }


  const downloadImageHandler = event => {

    axios.post(UserDB.getServerURI() + "/image/createZip",{userId:UserDB.getUser()._id,images:JSON.stringify(selectedImages)}).then((response)=>{
      if(response.data.status == "success")
        {
          if(window)
              window.open(UserDB.getServerURI() + "/image/download/" + UserDB.getUser()._id+"/"+response.data.fileName);
        }
     }).catch(error=>{
      console.log(error)
     })
    
  };

  const handleImageSelect = path => {
    if (selectedImages.includes(path)) {
      setSelectedImages(selectedImages.filter(i => i !== path));
    } else {
      let obj = {path:path}
      setSelectedImages([...selectedImages, path]);
    }
    
  };

  const handleSelectAll = () => {
    const allImagePaths = gallaryArr.map(item => item.path);
    setSelectedImages(allImagePaths);
  };

  const handleCancelAll = () => {
    setSelectedImages([]);
  };

  // console.log(JSON.stringify(selectedImages));

  return (
    <div className={styles.Profile}>
      <div className={styles.user}>
        <div className={styles.userProfile}>
          <Image className={styles.userProfileImg}
            width={100}
            height={100}
            // className={styles.userProfileImg}
            src={user.photoURL}
            alt="profile-picture"
          />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.contact}>
            <p>
              snap
              {user._id
                .substr(user._id.length - 4, user._id.length)
                .toLowerCase()}
            </p>
            <p
              className={`${styles.phoneEmail}  ${
                contact.length > 19 ? styles.bigEmail : ""
              }`}
            >
              {user.email ? user.email : user.phoneNumber}
            </p>
          </div>
          {/* <button className={`btn1 ${styles.btn}`}>Edit Profile</button> */}
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.top}>
          <p className={styles.txt}>Gallery</p>
          {gallaryArr.length > 0 && (
            <div className={styles.select}>
              <input
                type="checkbox"
                id="select"
                onChange={e => setSelect(e.target.checked)}
                checked={select}
                className={styles.input}
              />
              <label htmlFor="select" className={styles.label}>
                {select ? "Select" : "Select to Download"}
              </label>
            </div>
          )}
          {select && (
            <div className={`flex-row-center ${styles.download}`}>
              <div onClick={handleCancelAll} className={styles.cancel}>
                <MdCancel />
              </div>
              <div onClick={handleSelectAll} className={styles.selectAll}>
                Select All
              </div>
              <div className={styles.downloadBtn} onClick={downloadImageHandler}>
                <FaDownload />
              </div>
            </div>
          )}
        </div>
        <div className={`flex-row-center ${styles.bottom}`}>
          {gallaryArr?.map((item, index) => (
            <div key={index} className={styles.imgContainer}>
              <a
                href={UserDB.getServerURI() + "/" + item.path}
                target="_blank"
                className={styles.a}
              >
                <Image
                  src={UserDB.getServerURI() + "/" + item.path}
                  width={150}
                  height={150}
                  alt="img"
                  className={styles.img}
                  // onClick={downloadImageHandler}
                />
                {select && (
                  <input
                    type="checkbox"
                    className={styles.selectImg}
                    onChange={() => handleImageSelect(item.path)}
                    checked={selectedImages.includes(item.path)}
                  />
                )}
              </a>
            </div>
          ))}
        </div>
        {/* {gallaryArr.length == 0 ? "" : <p className={styles.seeAll}>See All</p>} */}
      </div>
      <p className={styles.logout} onClick={logOutClickHandler}>
        Log Out
      </p>

      {/* close */}
      <div
        onClick={() => {
          setIsProfileOpen(false);
        }}
        className={styles.close}
      >
        <Image width={100} height={100} src={close} alt="close" />
      </div>
    </div>
  );
}
