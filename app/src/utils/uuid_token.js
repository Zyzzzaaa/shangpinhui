import { v4 as uuidv4 } from "uuid";
//随机生成一个字符串，且每次执行不能发生变化，游客身份持久储存
export const getUUID=()=>{
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    if(!uuid_token){
        uuid_token=uuidv4();
        localStorage.setItem('UUIDTOKEN',uuid_token)
    }
    return uuid_token;
}