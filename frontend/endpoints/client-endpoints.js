import { CREATE, HOME, ROOMS } from "@/constants/routes-constants";

export default function endpoints(id){
    return {
        rooms : ROOMS,
        create : CREATE,
        home : HOME,
        room : `${ROOMS}/${id}`
    }
}