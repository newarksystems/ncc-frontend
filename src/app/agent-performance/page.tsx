"use client"

import React, { useState } from "react";
import { RefreshCcw, X, Minimize2, ChevronDown, Phone, Users, MoreHorizontal, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card";
import { FaUserCircle } from "react-icons/fa";

const agents = [
    {
        agent: "Doris Glimp",
        total_calls: "72",
        ext: "1002", 
        selected: false
    },
    {
        agent: "Britta Shop",
        total_calls: "79",
        ext: "1003",
        selected: false
    },
    {
        agent: "Mark Simon",
        total_calls: "88",
        ext: "1004",
        selected: false
    },
    {
        agent: "Susan Yavolsky",
        total_calls: "90",
        ext: "1005",
        selected: false
    },
    {
        agent: "Mary Homer",
        total_calls: "97",
        ext: "1006",
        selected: false
    }
]

const agentData = {
  "1002": {
    name: "Doris Glimp",
    initials: "TT",
    totalCalls: 72,
    inbound: 25,
    outbound: 35,
    internal: 3,
    avgSpeed: "00:08",
    avgHandled: "02:45",
    longestTalk: "12:30",
    talkingTime: "1:45:20",
    voicemail: 2,
    avgRinging: "00:18",
    avgTalkingOut: "01:25",
    longestTalkOut: "15:45",
    talkingTimeOut: "3:20:15",
  },
  "1003": {
    name: "Britta Shoop",
    initials: "RW",
    totalCalls: 79,
    inbound: 4,
    outbound: 5,
    internal: 1,
    avgSpeed: "00:12",
    avgHandled: "03:20",
    longestTalk: "08:15",
    talkingTime: "0:25:30",
    voicemail: 0,
    avgRinging: "00:25",
    avgTalkingOut: "02:10",
    longestTalkOut: "09:30",
    talkingTimeOut: "1:15:45",
  },
  "1004": {
    name: "Mark Simon",
    initials: "RE",
    totalCalls: 88,
    inbound: 49,
    outbound: 219,
    internal: 8,
    avgSpeed: "00:05",
    avgHandled: "03:59",
    longestTalk: "14:09",
    talkingTime: "2:36:00",
    voicemail: 0,
    avgRinging: "00:22",
    avgTalkingOut: "01:40",
    longestTalkOut: "17:17",
    talkingTimeOut: "6:24:29",
  },
  "1005": {
    name: "Susan Yavolsky",
    initials: "GG",
    totalCalls: 90,
    inbound: 12,
    outbound: 14,
    internal: 2,
    avgSpeed: "00:07",
    avgHandled: "04:15",
    longestTalk: "18:22",
    talkingTime: "1:12:45",
    voicemail: 1,
    avgRinging: "00:19",
    avgTalkingOut: "02:05",
    longestTalkOut: "13:40",
    talkingTimeOut: "2:45:30",
  },
  "1006": {
    name: "Mary Homer",
    initials: "JM",
    totalCalls: 23,
    inbound: 8,
    outbound: 13,
    internal: 2,
    avgSpeed: "00:09",
    avgHandled: "03:30",
    longestTalk: "11:45",
    talkingTime: "0:58:20",
    voicemail: 0,
    avgRinging: "00:21",
    avgTalkingOut: "01:55",
    longestTalkOut: "14:20",
    talkingTimeOut: "2:10:15",
  },
//   "1007": {
//     name: "Dylan Margheim",
//     initials: "DM",
//     totalCalls: 97,
//     inbound: 35,
//     outbound: 58,
//     internal: 4,
//     avgSpeed: "00:06",
//     avgHandled: "03:45",
//     longestTalk: "16:30",
//     talkingTime: "2:15:40",
//     voicemail: 3,
//     avgRinging: "00:17",
//     avgTalkingOut: "01:50",
//     longestTalkOut: "19:25",
//     talkingTimeOut: "4:35:20",
//   },
}

export default function AgentOverviewPerformanceMetrics() {
    const [isFullscreen, setIsFullScreen] = useState(false)
    const [selectedAgents, setSelectedAgents] = useState<string>("1002")
    const [activeAgent, setActiveAgent] = useState<string>("1002")

    // const handleAgentToggle = (ext: string) => {
    //     setSelectedAgents((prev) => (prev.includes(ext) ? prev.filter((id) => !== ext) : [...prev, ext]))
    // }

    // const handleAgentClick = (ext: string) => {
    //     setActiveAgent(ext)
    //     if (!selectedAgents.includes(ext)) {
    //         setSelectedAgents([ext])
    //     }
    // }

    const currentAgentData = agentData[activeAgent as keyof typeof agentData] || agentData["1002"]

    return (
        <div className="">
            <div className="bg-slate-800 border-b border-slate-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-slate-300">
              <span>Agents</span>
              <span>{" > "}</span>
              <span>Overview</span>
              <span>{" > "}</span>
              <span className="text-white">All Calls</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <span>-- SAVED FILTERS --</span>
              <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                -- Select -- <ChevronDown className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <span>FILTERS</span>
            </div>
            <Badge variant="secondary" className="bg-red-600 text-white text-xs">
              Last 7 Days
            </Badge>
            {/* <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
              <Headphones className="w-3 h-3 mr-1" />
              Extensions
            </Button> */}
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
              <Users className="w-3 h-3 mr-1" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 px-2">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-2 text-xs text-slate-400">
          <span>Applied Filters ⊗</span>
          <span>Date Range: Last 7 Days ⊗</span>
          <span>Extension: {activeAgent} ⊗</span>
        </div>
      </div>
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
                            {agents.map((row, i) => (
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
                    <button className="text-slate-400 cursor-pointer">
                        <RefreshCcw className="w-4 h-4" />
                    </button>
                    <button className="text-slate-400 cursor-pointer">
                        <Minimize2 className="w-4 h-4" />
                    </button>
                 </div>
               </div>

               <div className="flex">
                <div className="flex text-center items-center gap-4 px-4 py-2">
                    <div className="">
                        <FaUserCircle className="text-slate-500 w-10 h-10 md:w-20 md:h-20"/>
                    </div>
                    <div className="space-y-1">
                    <p className="text-slate-400 text-xl md:text-3xl">Doris Glimp</p>
                    <div className="flex space-x-4 text-slate-300">
                        <Phone className="w-5"/>
                        <Mail className="w-5"/>
                    </div>
                    </div>
                </div>

                <div className="flex-1 col-span-9 mt-4">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="text-center">
                        <h4 className="text-sm md:text-xl text-slate-400 mb-4">TOTAL CALLS</h4>
                        <CircularProgress value={currentAgentData.totalCalls} label="" color="rgb(251, 146, 60)" />
                        </div>
                        <div className="text-center">
                        <h4 className="text-sm md:text-xl text-slate-400 mb-4">INBOUND CALLS</h4>
                        <CircularProgress value={currentAgentData.inbound} label="" color="rgb(34, 197, 94)" />
                        </div>
                        <div className="text-center">
                        <h4 className="text-sm md:text-xl text-slate-400 mb-4">OUTBOUND CALLS</h4>
                        <CircularProgress value={currentAgentData.outbound} label="" color="rgb(34, 197, 94)" />
                        </div>
                        <div className="text-center">
                        <h4 className="text-sm md:text-xl text-slate-400 mb-4">INTERNAL CALLS</h4>
                        <CircularProgress value={currentAgentData.internal} label="" color="rgb(239, 68, 68)" />
                        </div>
                    </div>
            </div>
            </div>

             <div className="col-span-6">
              <h4 className="text-lg font-semibold text-white mb-4">Outbound Calls</h4>
              <div className="grid grid-cols-5 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-green-500 mr-2"></div>
                    <span className="text-2xl font-bold text-white">{currentAgentData.avgSpeed}</span>
                  </div>
                  <span className="text-xs text-slate-400">AVERAGE SPEED OF ANSWER</span>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-blue-500 mr-2"></div>
                    <span className="text-2xl font-bold text-white">{currentAgentData.avgHandled}</span>
                  </div>
                  <span className="text-xs text-slate-400">AVERAGE HANDLED TIME</span>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-red-500 mr-2"></div>
                    <span className="text-2xl font-bold text-white">{currentAgentData.longestTalk}</span>
                  </div>
                  <span className="text-xs text-slate-400">LONGEST TALKING TIME</span>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-blue-400 mr-2"></div>
                    <span className="text-2xl font-bold text-white">{currentAgentData.talkingTime}</span>
                  </div>
                  <span className="text-xs text-slate-400">TALKING TIME</span>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-orange-500 mr-2"></div>
                    <span className="text-2xl font-bold text-white">{currentAgentData.voicemail}</span>
                  </div>
                  <span className="text-xs text-slate-400">VOICEMAIL</span>
                </div>
              </div>
            </div>

            <div className="col-span-6">
              <h4 className="text-lg font-semibold text-white mb-4">Inbound Calls</h4>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-green-500 mr-2"></div>
                    <span className="text-2xl font-bold text-white">{currentAgentData.avgRinging}</span>
                  </div>
                  <span className="text-xs text-slate-400">AVERAGE RINGING TIME</span>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-blue-500 mr-2"></div>
                    <span className="text-2xl font-bold text-white">{currentAgentData.avgTalkingOut}</span>
                  </div>
                  <span className="text-xs text-slate-400">AVERAGE TALKING TIME</span>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-red-500 mr-2"></div>
                    <span className="text-2xl font-bold text-white">{currentAgentData.longestTalkOut}</span>
                  </div>
                  <span className="text-xs text-slate-400">LONGEST TALKING TIME</span>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-blue-400 mr-2"></div>
                    <span className="text-2xl font-bold text-white">{currentAgentData.talkingTimeOut}</span>
                  </div>
                  <span className="text-xs text-slate-400">TALKING TIME</span>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="col-span-6">
              <Card className="bg-slate-800 border-slate-700 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-400">Call Volume By Hour</h4>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Minimize2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <div className="h-48 bg-slate-700/50 flex items-end justify-between px-4 pb-4">
                  {/* Simplified bar chart representation */}
                  <div className="flex items-end space-x-2 h-full">
                    {[4, 28, 47, 37, 37, 16, 61, 61, 23].map((height, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div
                          className="w-8 bg-gradient-to-t from-purple-500 to-pink-500"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-slate-400 mt-1">{9 + i}:00 AM</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <div className="col-span-6">
              <Card className="bg-slate-800 border-slate-700 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-400">Occupancy Rate</h4>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Minimize2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <div className="h-48 bg-slate-700/50 flex items-center justify-center">
                  <span className="text-slate-400">Area Chart Placeholder</span>
                </div>
              </Card>
            </div>

            {/* Bottom Tables */}
            <div className="col-span-6">
              <Card className="bg-slate-800 border-slate-700 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-400">Call Volume By Day</h4>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Minimize2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="text-left p-2 text-slate-400"></th>
                        {Array.from({ length: 24 }, (_, i) => (
                          <th key={i} className="text-center p-1 text-slate-400">
                            {i}:00
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, i) => (
                        <tr key={day} className="border-b border-slate-700">
                          <td className="p-2 font-medium">{day}</td>
                          {Array.from({ length: 24 }, (_, j) => (
                            <td key={j} className="text-center p-1">
                              {Math.floor(Math.random() * 20)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            <div className="col-span-6">
              <Card className="bg-slate-800 border-slate-700 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-400">Internal Calls</h4>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Minimize2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <div className="h-48 bg-slate-700/50 flex items-center justify-center">
                  <span className="text-slate-400">Line Chart Placeholder</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
        
    </div>
    )
}

function CircularProgress({
    value,
    max,
    label,
    color,
} : { value: number; max?: number; label: string; color: string }) {
    const percentage = max ? (value / max) * 100 : value
    const circumference = 2 * Math.PI * 45
    const strokeDasharray = circumference 
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="rgb(51, 65, 85)" strokeWidth="11" fill="none" />
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke={color}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{value}</span>
                </div>
            </div>
        <span className="text-sm text-slate-400 mt-2 text-center">{label}</span>
    </div>
    )
}