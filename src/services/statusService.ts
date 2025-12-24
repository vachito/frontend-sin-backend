import clienteAxios from "@/config/axios";

export function getStatuses(){
    return clienteAxios.get('/statuses')
}

export function saveStatuses(data:string){
    return clienteAxios.post('/statuses',{name:data})
}

export function updateStatuses(id:number,name:string){
    return clienteAxios.put(`/statuses/${id}`,{name})
}

export function deleteStatuses(id:number){
    return clienteAxios.delete  (`/statuses/${id}`)
}