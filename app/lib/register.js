// import type {UserLogin, AlertProps} from "./types/dtypes"
import connectMongo from "./mongodb"
import {UserDb, createUser} from "./userDb"
import {cookies} from "next/headers"

const login = async (data) => {
    const cookieStore = cookies()
    await connectMongo()
    const exits = await UserDb.find({name: data.name, password: data.password})
    console.log(exits)
    const status = exits.length == 1 ? {code: 1,title: "error",msg: "account already created"} : {code: 0,title: "success",msg: "created!"}
    status.code == 0 ? createUser(UserDb, {name: data.name, password: data.password}) && cookieStore.set("name", data.name, data.req) : ''
    cookieStore.set("alert", JSON.stringify({title:status.title, text:status.msg, code:status.code}), data.req)
    // return status
}

export default login