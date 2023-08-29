import { CREATE, HOME, ROOMS } from "@/constants/routes-constants";

export default function endpoints(){
    return {
        rooms : ROOMS,
        create : CREATE,
        home : HOME
    }
}