import { SERVER_URL } from "@/constants/api-constants";

export default function endpoints(){
    return {
        rooms : `${SERVER_URL}/rooms`
    }
}