import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload"
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { CreateUserController } from "@modules/accounts/UseCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/UseCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
    "/avatar",
    ensureAuthenticate, 
    uploadAvatar.single("avatar"), 
    updateUserAvatarController.handle
);
    
export { usersRoutes }