import {BaseService} from './config';

export const CreateLoginUser = async params =>
  await BaseService.post('/createUser', params);

 export const getKitchens =async () =>{
 const realData= await BaseService.get('/User/getKitchens')
return realData
};
export const getCatagories=async () =>{
  const realData= await BaseService.get('/User/getCatagories')
 return realData
 };

 export const getMyOrders=async () =>{
  const realData= await BaseService.get('/User/getAllOrders')
 return realData
 };
 export const getKitchensByCatagories=async (id) =>{
  const realData= await BaseService.get(`/Kitchen/getKitchensFromCatagories/${id}`)
 return realData
 };
 export const getKitchenMenu=async (id) =>{
  const realData= await BaseService.get(`/Kitchen/getProducts/${id}`)
 return realData
 };