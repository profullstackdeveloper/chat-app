import { ReactNode } from "react";
import AppHeader from "../components/headers/AppHeader";
import AppSidebar from "../components/sidebar/AppSidebar";

export default function MasterLayout({children}: {children: ReactNode}) {
    return (
        <div className="w-full h-full flex flex-col overflow-hidden">
            <div className="flex-shrink-0 flex-grow-0">
                <AppHeader />
            </div>
            <div className="w-full h-full overflow-hidden bg-slate-300 flex">
                <AppSidebar />
                <div className="w-full h-full">
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}