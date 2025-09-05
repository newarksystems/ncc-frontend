"use client"

import React, { useState } from "react";
import { Minimize2, Phone, RefreshCcw, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
// import { AgentPerformanceDash } from "@/components/agents/agentperformancedash";
import { AgentLiveActionStats } from "@/components/agents/agentliveactionstats";

export default function AgentsLiveActions() {
    const [isFullscreen, setIsFullScreen] = useState(false)
    return (
        <div className="p-4">
            <AgentLiveActionStats />
            <div className={`${isFullscreen 
            ? 'fixed inset-0 z-50 bg-slate-900'
            : 'bg-slate-800'
        }`}>
            <div className="px-3 py-1.5 border-b border-slate-700 flex items-center justify-between">
              <h3 className="text-sm text-sky-400">Agents' Live Action</h3>
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
            <div className="overflow-x-auto px-2 py-2 ">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="text-slate-200">
                      <th
                        className="bg-slate-700 border border-slate-600 px-4 py-2 text-sky-300"
                        colSpan={2}
                      ></th>
                      <th
                        className="bg-slate-900 border border-slate-600 px-4 py-2 text-sky-300"
                        colSpan={2}
                      >Talking</th>
                      <th
                        className="bg-slate-700 border border-slate-600 px-4 py-2 text-sky-300"
                        colSpan={3}
                      >Call</th>
                      <th
                        className="bg-slate-900 border border-slate-600 px-4 py-2 text-sky-300"
                        colSpan={2}
                      >Logged In</th>
                      <th
                        className="bg-red-400/90 border border-slate-600 px-4 py-2"
                        colSpan={2}
                      >Logged Out</th>
                  </tr>

                  <tr className="text-left text-slate-300">
                    {/* agent info row */}
                    <th className="border border-slate-600 bg-slate-700 px-4 py-2">Agent</th>
                    <th className="border border-slate-600 bg-slate-700 px-4 py-2">Availability</th>

                    <th className="border border-slate-600 bg-slate-900 px-4 py-2">To</th>
                    <th className="border border-slate-600 bg-slate-900 px-4 py-2">For</th>
                    {/* calls row */}
                    <th className="border border-slate-600 p-2 bg-slate-700 text-slate-300">Outbound Calls</th>
                    <th className="border border-slate-600 p-2 bg-slate-700 text-slate-300">Inbound Calls</th>
                    <th className="border border-slate-600 p-2 bg-slate-700 text-slate-300">Status</th>
                    {/* logged in info */}
                    <th className="border border-slate-600 bg-slate-900 px-4 py-2">At</th>
                    <th className="border border-slate-600 bg-slate-900 px-4 py-2">For</th>
                    {/* logged out info */}
                    <th className="bg-red-400 border border-slate-600 p-2 text-slate-300">At</th>
                    <th className="bg-red-400 border border-slate-600 p-2 text-slate-300">For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      agent: "Doris Glimp",
                      availability: "Available",
                      // phone: "5554448842",
                      amount_collected: "10000",
                      outbound_calls: "20",
                      avg_handling_time: "7:31",
                      talking_to: "Ruth Catch(0790909091)",
                      talking_for: "00:30",
                      inbound_calss: "5",
                      status: "Disconnected",
                      li_at: "08:00",
                      li_for: "9:20",
                      lo_at: "02:13",
                      lo_for: "2:14",
                      
                    },
                    {
                      agent: "Mark Simon",
                      availability: "Available",
                      // phone: "5554448842",
                      amount_collected: "10000",
                      outbound_calls: "50",
                      avg_handling_time: "5:31",
                      talking_to: "Rafael Bunge(0788880020)",
                      talking_for: "00:25",
                      inbound_calss: "15",
                      status: "Connected",
                      li_at: "08:00",
                      li_for: "8:20",
                      lo_at: "02:45",
                      lo_for: "2:34",
                      
                    },
                    {
                      agent: "Susan Yalovsky",
                      availability: "Away",
                      // phone: "5554448842",
                      amount_collected: "20000",
                      outbound_calls: "80",
                      avg_handling_time: "2:33",
                      talking_to: "Jusii Rom(0765809070)",
                      talking_for: "00:20",
                      inbound_calss: "10",
                      status: "Disconnected",
                      li_at: "08:15",
                      li_for: "6:20",
                      lo_at: "01:30",
                      lo_for: "2:14",
                      
                    },
                    {
                      agent: "Mary Homer",
                      availability: "Do Not Disturb",
                      // phone: "5554448842",
                      amount_collected: "30000",
                      outbound_calls: "25",
                      avg_handling_time: "7:31",
                      talking_to: "Alehandro Gim(0710203040)",
                      talking_for: "00:38",
                      inbound_calss: "25",
                      status: "Connected",
                      li_at: "08:00",
                      li_for: "9:20",
                      lo_at: "02:13",
                      lo_for: "2:14",
                      
                    },
                    {
                      agent: "Britta Shoop",
                      availability: "Available",
                      // phone: "5554448842",
                      amount_collected: "60000",
                      outbound_calls: "90",
                      avg_handling_time: "5:10",
                      talking_to: "Alex Nuke(011203049)",
                      talking_for: "00:30",
                      inbound_calss: "2",
                      status: "Disconnected",
                      li_at: "06:00",
                      li_for: "9:20",
                      lo_at: "02:30",
                      lo_for: "2:14",
                      
                    },
                  ].map((row, i) => (
                    <tr key={i} className="text-white">
                      <td className="p-2 border border-slate-600">
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3 text-orange-400" />
                          {row.agent}
                        </div>
                      </td>
                      <td className="p-2 border border-slate-600">
                        <Badge
                          variant="secondary"
                          className={`text-xs ${
                            row.availability === "Available"
                              ? "bg-green-500/70 text-white"
                              : row.availability === "Do Not Disturb"
                                ? "bg-red-500/90 text-white"
                                : row.availability === "Away"
                                  ? "bg-orange-500/80 text-white"
                                  : "bg-blue-600 text-white"
                          }`}
                        >
                          {row.availability}
                        </Badge>
                      </td>
                      <td className="p-2 border border-slate-600">{row.talking_to}</td>
                      <td className="p-2 border border-slate-600">{row.talking_for}</td>
                      {/* <td className="p-2 border border-slate-600">{row.amount_collected}</td> */}
                      <td className="p-2 border border-slate-600">
                          {row.outbound_calls}
                      </td>
                      {/* <td className="p-2 border border-slate-600">{row.avg_handling_time}</td> */}
                      <td className="p-2 border border-slate-600">{row.inbound_calss}</td>
                      <td className={`${row.status === "Connected" ? 'p-2 border border-slate-600 text-cyan-400' : 'p-2 border border-slate-600 text-rose-400'}`}>{row.status}</td>
                      <td className="p-2 border border-slate-600">{row.li_at}</td>
                      <td className="p-2 border border-slate-600">{row.li_for}</td>
                      <td className="p-2 border border-slate-600">{row.lo_at}</td>
                      <td className="p-2 border border-slate-600">{row.lo_for}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    )
}