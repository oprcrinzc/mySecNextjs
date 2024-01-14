// import type {UserLogin, AlertProps} from "./types/dtypes"
import connectMongo from "/app/lib/db/mainDb"
import {UserDb, createUser} from "/app/lib/db/userDb"
import {cookies} from "next/headers"

const login = async (data) => {
    const cookieStore = cookies()
    await connectMongo()
    const exist = await UserDb.find({name: data.name})
    // console.log(exist)
    const status = exist.length >= 1 ? {code: 1,title: "error",msg: "account already created"} : {code: 0,title: "success",msg: "created!"}
    status.code == 0 ? createUser(UserDb, {name: data.name, password: data.password}) && cookieStore.set("name", data.name, data.req) : ''
    cookieStore.set("alert", JSON.stringify({title:status.title, text:status.msg, code:status.code}), data.req)
    // return status
}

export default login