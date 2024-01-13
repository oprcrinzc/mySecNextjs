// import type {UserLogin, AlertProps} from "./types/dtypes"
import connectMongo from "/app/lib/db/maindb"
import {UserDb} from "/app/lib/db/userDb"
import {cookies} from "next/headers"

const login = async (data) => {
    const cookieStore = cookies()
    await connectMongo()
    const exits = await UserDb.find({name: data.name, password: data.password})
    const status = exits.length == 0 ? {code: 1,title: "error",msg: "account not found"} : {code: 0,title: "success",msg: "login success"}
    status.code == 0 ? cookieStore.set("name", data.name, data.req) : ''
    cookieStore.set("alert", JSON.stringify({title:status.title, text:status.msg, code:status.code}), data.req)
    // return status
}

export default login