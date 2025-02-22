import type React from "react"
import "../globals.css"


export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 flex flex-col">
            <div className="flex-grow">{children}</div>
        </div>

    )
}

