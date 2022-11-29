
export const fetching = async (url:string)=>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data
    }catch(err){
        console.error(err)
    }
}