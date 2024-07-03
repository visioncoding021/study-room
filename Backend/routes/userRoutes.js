import {Router} from "express";
import { addToPlaylist, changepassword, forgotPassword, getMyProfile, login, logout, removeFromPlaylist, resetPassword, resister, updateProfile, updateProfilePicture } from "../controllers/userController.js";
import { isAuthenticate } from "../middlewares/auth.js";
const router = Router();
router.route('/resister').post(resister);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route("/me").get(isAuthenticate,getMyProfile);
router.route("/changepassword").put(isAuthenticate,changepassword);
router.route("/updateprofile").put(isAuthenticate,updateProfile);
router.route("/updateprofilepicture").put(isAuthenticate,updateProfilePicture);
router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword/:token").put(resetPassword);
router.route("/addtoplaylist").post(isAuthenticate,addToPlaylist);
router.route("/removefromplaylist").delete(isAuthenticate,removeFromPlaylist);

export default router;
