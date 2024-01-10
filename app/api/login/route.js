import { redirect } from "next/navigation"
import login from "/app/lib/login";

export async function POST(req) {
  const formData = await req.formData()
  const name = formData.get("name")
  const password = formData.get("password")
  let loginStatus = {}
  if(typeof(name)==="string" && typeof(password) === "string"){
    const loginData = {
      name: name,
      password: password
    }
    loginStatus = await login(loginData)
  }
  redirect('/login')
}