import { BoxesDb } from "/app/lib/db/boxDb"
import { UserDb } from "/app/lib/db/userDb"
import { cookies } from "next/headers"

export const get = async (req) =>{
    const cookie = cookies()
    const name = req.name
    const password = req.password
    console.log(req)
    const userExist = await UserDb.find({name:name, password:password})

    if (userExist.length == 1){
        return await BoxesDb.find({owner:name})
    } else {
        return {msg:"none"}
    }
}