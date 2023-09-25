import React from "react";

export default function Root({ children }: { children: React.ReactNode }) {
    return <>
        <section className="min-h-screen">
            {children}
        </section>
    </>
}