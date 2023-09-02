import { SERVER_URL } from "@/constants/api-constants";

export default function endpoints(id){
    return {
        rooms : `${SERVER_URL}/rooms`,
    }
}