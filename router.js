import { Router } from "express"
import * as controller from "./controller.js"
const router=Router()
router.route("/gettask").get(controller.getTask)
router.route("/addtask").post(controller.addTask);
router.route("/deltask/:id").delete(controller.delTask);
router.route("/edittask/:id").patch(controller.editTask);
export default router;