import { redirect } from "next/navigation"
import {BoxesDb,createBox} from "/app/lib/db/boxDb"
import {create} from "/app/lib/box/box"
import {cookies} from "next/headers"

export async function POST(req){
    const owner = req.cookies.get("name").value
    const formData = await req.formData()
    const name = formData.get("name")
    await create({
        name: name,
        owner: owner,
        req: req
    })
    // return Response.json(formData.get("name"))
    redirect('/box')
}