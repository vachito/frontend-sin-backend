import clienteAxios from "@/config/axios";

export function getProjects(){
    return clienteAxios.get('/projects')
}

export function getProjectDetails(id:number){
    return clienteAxios.get(`/projects/${id}`)
}

export function saveProject(data:object){
    return clienteAxios.post('/projects',data)
}

export function deleteProject(id:number){
    return clienteAxios.delete(`/projects/${id}`)
}