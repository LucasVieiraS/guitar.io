import React from "react";

export default function Spacing({ children }: { children: React.ReactNode }) {
    return <div className="p-6 py-5 min-h-[82vh]">
        {children}
    </div>
}
