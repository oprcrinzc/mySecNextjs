// import type {UserLogin, AlertProps} from "./types/dtypes"
import connectMongo from "./mongodb"
import {UserDb} from "./userDb"
import {cookies} from "next/headers"
import user from './user'

const login = async (data) => {
    const cookieStore = cookies()
    await connectMongo()
    const exits = await UserDb.find({name: data.name, password: data.password})
    const status = exits.length == 0 ? {code: 1,title: "error",msg: "account not found"} : {code: 0,title: "success",msg: "login success"}
    status.code == 0 ? cookieStore.set("name", data.name) : ''
    cookieStore.set("alert", JSON.stringify({title:status.title, text:status.msg, code:status.code}))
    // return status
}

export default login