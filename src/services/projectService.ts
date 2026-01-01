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

export function updateProject(project_id:number, data){
    return clienteAxios.patch(`/projects/${project_id}`,data)
}

export function deleteProject(id:number){
    return clienteAxios.delete(`/projects/${id}`)
}

export function changeProjectState(project_id:number, status_id:number){
    return clienteAxios.post(`/change-project-state/${project_id}`,{status_id})
}

export function assignProject(data:Object){
    return clienteAxios.post('/assign-projects',data)
}

export function unassignProject(data:Object){
    return clienteAxios.post('/unassign-projects',data)
}