import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function QuoteSection(
) {
  return (
    <section
      className={`container mx-auto w-full flex flex-col md:flex-row items-center justify-center px-4 py-16`}
    >
      <Card className="w-full md:w-1/2 bg-transparent border-none shadow-none">
        <CardContent className="text-center md:text-left mb-8 md:mb-0 relative p-0">
          <p
            className="text-xl md:text-2xl leading-relaxed font-medium px-10 py-8"
          >
            "Sometimes you've gotta run before you can walk"
          </p>

          <p className="text-right mt-4 pr-10">-Tony Stark </p>
        </CardContent>
      </Card>
    </section>
  );
}
