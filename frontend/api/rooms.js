import endpoints from "@/endpoints/endpoints"

export const getRooms = async ()=>{
    const response = await fetch(endpoints().rooms)
    return await response.json()
}