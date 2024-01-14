import { redirect } from "next/navigation"
import {get} from "/app/lib/box/get"

export async function GET(req){
    const name = req.cookies.get("name").value
    const password = req.cookies.get("pwd").value

    console.log(name, password)
    await get({name: name,password: password})
    // return Response.json({})
    redirect('/box')
}