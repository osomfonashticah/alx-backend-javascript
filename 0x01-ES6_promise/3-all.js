import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoData, userData]) => {
      console.log(
        `First Name: ${photoData.body.firstName}, Last Name: ${photoData.body.lastName}`
      );
    })
    .catch((error) => {
      console.error("Signup system offline:", error.message);
    });
}
