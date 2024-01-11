import { redirect } from "next/navigation"
import register from "/app/lib/register";

export async function POST(req) {
  const formData = await req.formData()
  const name = formData.get("name")
  const password = formData.get("password")
//   let loginStatus = {}
  if(typeof(name)==="string" && typeof(password) === "string"){
    const registerData = {
      name: name,
      password: password,
      req: req
    }
    await register(registerData)
  }
  redirect('/login')
}