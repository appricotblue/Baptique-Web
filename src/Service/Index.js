import { commonnRequest } from "./CommonRequest";

  export const getBanner = async () => {
    return commonnRequest("GET", "admin/getBanner");
  };
  export const verifyOtp = async (body) => {
        return commonnRequest('POST','admin/loginVerifyOtp',body)
      };
      export const getAll = async () => {
        return commonnRequest("GET", "admin/getAll");
      };

 
  



  // export const createItem = async (body) => {
//     return commonnRequest(
//       "POST",
//       "admin/createItem",
//       body,
//       "multipart/form-data"
//     );
//   };
  
//   export const getRoutes = async () => {
//     return commonnRequest("GET", "user/getLocation");
//   };
  
//   export const addNewRoute = async (body) => {
//     return commonnRequest(
//       'POST',
//       'admin/createLocation',
//       body
//     )
//   }