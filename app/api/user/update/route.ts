import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return new NextResponse("Non autorisé", { status: 401 })
  }

  const body = await req.json()
  const { name, email, password } = body

  if (!name && !email && !password) {
    return new NextResponse("Aucune donnée à mettre à jour", { status: 400 })
  }

  const updateData: Partial<{
    name: string;
    email: string;
    hashedPassword: string;
  }> = {}
  if (name) updateData.name = name
  if (email) updateData.email = email
  if (password) updateData.hashedPassword = await bcrypt.hash(password, 10)

  try {
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: updateData,
    })

    return NextResponse.json({ message: "Profil mis à jour avec succès" })
  } catch (error) {
    console.error("Échec de la mise à jour de l'utilisateur:", error)
    return new NextResponse("Échec de la mise à jour du profil", { status: 500 })
  }
}