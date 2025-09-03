"use client"

import React, { useState } from "react";
import { RefreshCcw, X, Minimize2 } from "lucide-react";

export default function AgentOverviewPerformanceMetrics() {
    const [isFullscreen, setIsFullScreen] = useState(false)

    return (
        <div className="flex flex-col md:flex-row  p-4">
            <div className={`${isFullscreen ? (
                'fixed inset-0 z-50 bg-slate-900 p-4'
            ) : ('bg-slate-800')}`}>
              <div className="px-3 py-1.5 border-b border-slate-700 flex items-center justify-between">
                <h3 className="text-sm text-sky-400">Agents' Performance</h3>
                <div className="flex items-center gap-4">
                    <button className="text-slate-400 cursor-pointer">
                    <RefreshCcw className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setIsFullScreen(!isFullscreen)}
                        className="text-slate-400 cursor-pointer">
                        {isFullscreen ? (
                            <X className="w-4 h-4" />
                        ) : (
                            <Minimize2 className="w-4 h-4" />
                        )}
                    </button>
                </div>
            </div>
                <div className="overflow-x-auto min-h-screen px-2 py-2">
                    <table className="w-full border-collapse">
                        <thead className="">
                            <tr className="px-4">
                                <th className="text-left border border-slate-700 text-sky-300 px-2 py-2">Agent</th>
                                <th className="text-left border border-slate-700 text-sky-300 px-4 py-2">Total Calls</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                agent: "Doris Glimp",
                                total_calls: "72"
                                },
                                {
                                    agent: "Britta Shop",
                                    total_calls: "79"
                                },
                                {
                                    agent: "Mark Simon",
                                    total_calls: "88"
                                },
                                {
                                    agent: "Susan Yavolsky",
                                    total_calls: "90"
                                },
                                {
                                    agent: "Mary Homer",
                                    total_calls: "97"
                                }
                            ].map((row, i) => (
                                <tr key={i}>
                                    <td className="text-left text-sky-100 border border-slate-700 px-4 py-1">{row.agent}</td>
                                    <td className="text-left text-sky-100 border border-slate-700 px-4 py-1">{row.total_calls}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex-1 px-4">
               <div className="flex items-center justify-between border-b border-slate-700">
                 <h3 className="text-sky-300 mb-2">Summary</h3>
                 <div className="flex items-center gap-6">
                    <button>
                        <RefreshCcw className="w-4 h-4" />
                    </button>
                    <button>
                        <Minimize2 className="w-4 h-4" />
                    </button>
                 </div>
               </div>

               <div>
                
               </div>
            </div>
        </div>
    )
}