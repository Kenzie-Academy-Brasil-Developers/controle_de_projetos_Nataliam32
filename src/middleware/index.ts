import error from "./handleError.middleware";
import uniqueEmail from "./uniqueEmail.middleware";
import verifyIdExists from "./verifyIfIdExists.middleware";
import verifyDevInfoExists from "./verifyDevInfoExists.middleware";
import verifyIfProjectExists from "./verifyIdProjectExists.middleware";
import verifyIfDevExists from "./verifyIfDevExists.middleware";

export default { error, uniqueEmail, verifyIdExists, verifyDevInfoExists, verifyIfProjectExists, verifyIfDevExists };