import prismadb from "@/lib/prismadb"
import { hash } from "bcrypt"
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
) {
    console.log("request ", req)
    try {
        const body = await req.json();
        console.log("body", body)
        const {
            email,
            password,
        } = body;

        if (!email?.trim()) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }
        if (!password.trim()) {
            return NextResponse.json({ error: "Password is required" }, { status: 400 });
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
        }

        if (password.length < 6) {
            return NextResponse.json({ error: "Password must be at least 6 characters long" }, { status: 400 });
        }

        const existingUser = await prismadb.admin.findFirst({
            where: {
                email,
            }
        })

        if (existingUser) {
            return NextResponse.json({ error: "Email already in use" }, { status: 409 });
        }

        const hashedPassword = await hash(password, 10)

        const user = await prismadb.admin.create({
            data: {
                email,
                password: hashedPassword,

            }
        })

        return NextResponse.json({
            message: "Registration successful",
            user: {
                id: user.id,
                email: user.email,

            }
        }, { status: 201 });

    } catch (error) {
        console.error("[REGISTRATION_ERROR]", error)

        if (error instanceof Error) {
            if (error.message.includes("Unique constraint")) {
                return NextResponse.json({ error: "Email is already in use" }, { status: 409 })
            }
        }
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
