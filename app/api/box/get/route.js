import { redirect } from "next/navigation"
import {get} from "/app/lib/box/get"

export async function GET(req){
    try {
        const name = req.cookies.get("name").value
        const password = req.cookies.get("pwd").value
        const d = await get({name: name,password: password})
        return Response.json(d)
    } catch(e){
        return Response.json({msg:"none"})
    }

    // console.log(name, password)
    
    console.log(d)
    
    redirect('/box')
}