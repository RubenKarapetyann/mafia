import { CREATE, HOME, LOBBY, ROOMS } from "@/constants/routes-constants";

export default function endpoints(id){
    return {
        rooms : ROOMS,
        create : CREATE,
        home : HOME,
        lobby : `${ROOMS}/${id}${LOBBY}`
    }
}