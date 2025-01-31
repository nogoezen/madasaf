import { NextResponse } from "next/server"
import prisma from "../../../lib/prisma"
import bcrypt from "bcrypt"

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, password } = body

  if (!name || !email || !password) {
    return new NextResponse("Missing name, email or password", { status: 400 })
  }

  const exist = await prisma.user.findUnique({
    where: {
      email: email
    }
  })

  if (exist) {
    return new NextResponse("User already exists", { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword
    }
  })

  return NextResponse.json(user)
}