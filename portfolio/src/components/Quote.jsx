import React from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function QuoteSection({ 
  primary = "white", 
  secondary = "green-600", 
  background = "black" 
}) {
  return (
    <section
      className={`container mx-auto w-full flex flex-col md:flex-row items-center justify-center px-4 py-16 bg-${background}`}
    >
      <Card className="w-full md:w-1/2 bg-transparent border-none shadow-none">
        <CardContent className="text-center md:text-left mb-8 md:mb-0 relative p-0">
          <p
            className="text-xl md:text-2xl leading-relaxed font-medium px-10 py-8"
            style={{
              background: "linear-gradient(to right, #c0c0c0, #ffffff, #c0c0c0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            "The only way to do great work is to love what you do. If you haven't
            found it yet, keep looking. Don't settle."
          </p>

          <p className="text-right mt-4 pr-10 text-gray-400">
            - Steve Jobs
          </p>
        </CardContent>
      </Card>
    </section>
  )
}