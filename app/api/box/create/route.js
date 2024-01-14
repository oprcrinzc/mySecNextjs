import { redirect } from "next/navigation"
import {BoxesDb,createBox} from "/app/lib/db/boxDb"
import {create} from "/app/lib/box/box"
import {cookies} from "next/headers"

export async function POST(req){
    const cookieStore = cookies()
    try {
        const owner = req.cookies.get("name").value
        const formData = await req.formData()
        const name = formData.get("name")
        await create({
            name: name,
            owner: owner,
            req: req
        })
    } catch(e){
        cookieStore.set("alert", JSON.stringify({title:"Error", text:"Please login", code:1}), req)
    }
    // return Response.json(formData.get("name"))
    redirect('/box')
}