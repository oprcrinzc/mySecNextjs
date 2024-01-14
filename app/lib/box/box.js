import {BoxesDb,createBox} from "/app/lib/db/boxDb"
import {cookies} from "next/headers"


export async function create(data){
    if(data != null && data.name != null && data.owner != null){
        await createBox(BoxesDb, {
            name: data.name,
            owner: data.owner
        })
    }
    else {
        let errorString = ""
        data == null ? errorString += " data" : ""
        data.name == null ? errorString += " box name" : ""
        data.owner == null ? errorString += " who" : ""
        errorString += " error"
        cookieStore.set("alert", JSON.stringify({title:"Error", text:errorString, code:1}), data.req)
    }
}