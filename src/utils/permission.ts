export function identification(val:any) {
    return !(JSON.parse(sessionStorage.getItem("userMessage")||"")?.permissions?.includes(val))
}