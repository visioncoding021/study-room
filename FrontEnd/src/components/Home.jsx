import { CgYoutube, CgFacebook, CgInstagram, CgTwitter } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import sideHome from '../assets/side-home.jpg';

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row justify-between p-6 bg-gray-100">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">LEARN FROM THE EXPERT</h1>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illum enim doloribus culpa odit.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Explore Now
          </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src={sideHome} alt="png" className="mx-auto" />
        </div>
      </div>
      <div className="brands flex flex-col md:flex-row justify-around items-center bg-gray-200 p-6">
        <div className="space-x-4 text-3xl mb-6 md:mb-0">
            <p className="text-center">Follow us</p>
            <div className="flex space-x-4 text-3xl mb-6 md:mb-0">
         <CgFacebook className="text-blue-800" />
          <CgInstagram className="text-pink-500" />
          <CgYoutube className="text-red-600" />
          <CgTwitter className="text-blue-400" />
          <FcGoogle />
            </div>
         
        </div>
        <div className="text-center">
          <p className="mb-4">Download Mobile App</p>
          <div className="flex justify-center space-x-4 text-3xl">
            <IoLogoGooglePlaystore />
            <FaAppStore />
          </div>
        </div>
      </div>
      <div className="video-container bg-gray-100 p-6">
        <h1 className="text-center">Explore The Word</h1>
        <video
          src=""
          controls
          controlsList="nodownload"
          className="w-1/2 m-auto my-36"
        />
      </div>
    </>
  );
};

export default Home;
