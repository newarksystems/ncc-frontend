"use client"

import React, { useState } from "react"
import { ChevronDown, ChevronRight, Phone, Play, Calendar, Filter, MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface CallLog {
  id: string
  callStart: string
  callEnd: string
  status: "Answered" | "Unanswered"
  duration: string
  caller: string
  callerDisplay?: string
  callee: string
  inboundRule: string
  recordings: boolean
  details: {
    start: string
    answered: string
    end: string
    ringing: string
    talking: string
    status: string
    caller: string
    destination: string
    description: string
    direction: string
  }
}

const mockCallLogs: CallLog[] = [
  {
    id: "1",
    callStart: "9/6/2025 11:23:12 PM",
    callEnd: "9/6/2025 11:26:50 PM",
    status: "Answered",
    duration: "03:38",
    caller: "5554444900",
    callerDisplay: "(5714444900)",
    callee: "5554441400",
    inboundRule: "",
    recordings: false,
    details: {
      start: "9/6/2025 11:23:12 PM",
      answered: "9/6/2025 11:23:12 PM",
      end: "9/6/2025 11:26:50 PM",
      ringing: "00:00",
      talking: "03:38",
      status: "Unanswered",
      caller: "5554444900",
      destination: "5554440065",
      description: "Forwarded to 5554440065",
      direction: "External To Internal",
    },
  },
  {
    id: "2",
    callStart: "9/6/2025 11:18:14 PM",
    callEnd: "9/6/2025 11:19:12 PM",
    status: "Answered",
    duration: "00:58",
    caller: "7628 (7628)",
    callee: "",
    inboundRule: "",
    recordings: false,
    details: {
      start: "9/6/2025 11:18:14 PM",
      answered: "9/6/2025 11:18:14 PM",
      end: "9/6/2025 11:19:12 PM",
      ringing: "00:00",
      talking: "00:58",
      status: "Answered",
      caller: "7628 (7628)",
      destination: "",
      description: "",
      direction: "",
    },
  },
  {
    id: "3",
    callStart: "9/6/2025 11:11:13 PM",
    callEnd: "9/6/2025 11:12:24 PM",
    status: "Answered",
    duration: "01:11",
    caller: "5554444616",
    callerDisplay: "(9714444616)",
    callee: "5554441400",
    inboundRule: "",
    recordings: false,
    details: {
      start: "9/6/2025 11:11:13 PM",
      answered: "9/6/2025 11:11:13 PM",
      end: "9/6/2025 11:12:24 PM",
      ringing: "00:00",
      talking: "01:11",
      status: "Answered",
      caller: "5554444616 (9714444616)",
      destination: "5554441400",
      description: "",
      direction: "",
    },
  },
  {
    id: "4",
    callStart: "9/6/2025 11:09:33 PM",
    callEnd: "9/6/2025 11:13:12 PM",
    status: "Answered",
    duration: "03:39",
    caller: "7628 (7628)",
    callee: "",
    inboundRule: "",
    recordings: false,
    details: {
      start: "9/6/2025 11:09:33 PM",
      answered: "9/6/2025 11:09:33 PM",
      end: "9/6/2025 11:13:12 PM",
      ringing: "00:00",
      talking: "03:39",
      status: "Answered",
      caller: "7628 (7628)",
      destination: "",
      description: "",
      direction: "",
    },
  },
  {
    id: "5",
    callStart: "9/6/2025 11:00:06 PM",
    callEnd: "9/6/2025 11:02:27 PM",
    status: "Answered",
    duration: "02:21",
    caller: "7628 (7628)",
    callee: "",
    inboundRule: "",
    recordings: false,
    details: {
      start: "9/6/2025 11:00:06 PM",
      answered: "9/6/2025 11:00:06 PM",
      end: "9/6/2025 11:02:27 PM",
      ringing: "00:00",
      talking: "02:21",
      status: "Answered",
      caller: "7628 (7628)",
      destination: "",
      description: "",
      direction: "",
    },
  },
  {
    id: "6",
    callStart: "9/6/2025 10:58:32 PM",
    callEnd: "9/6/2025 10:59:53 PM",
    status: "Answered",
    duration: "01:21",
    caller: "5554440066",
    callerDisplay: "(5174440066)",
    callee: "5554441400",
    inboundRule: "",
    recordings: false,
    details: {
      start: "9/6/2025 10:58:32 PM",
      answered: "9/6/2025 10:58:32 PM",
      end: "9/6/2025 10:59:53 PM",
      ringing: "00:00",
      talking: "01:21",
      status: "Answered",
      caller: "5554440066 (5174440066)",
      destination: "5554441400",
      description: "",
      direction: "",
    },
  },
  {
    id: "7",
    callStart: "9/6/2025 10:56:00 PM",
    callEnd: "9/6/2025 10:58:28 PM",
    status: "Answered",
    duration: "02:28",
    caller: "5554440066",
    callerDisplay: "(5174440066)",
    callee: "5554441400",
    inboundRule: "",
    recordings: false,
    details: {
      start: "9/6/2025 10:56:00 PM",
      answered: "9/6/2025 10:56:00 PM",
      end: "9/6/2025 10:58:28 PM",
      ringing: "00:00",
      talking: "02:28",
      status: "Answered",
      caller: "5554440066 (5174440066)",
      destination: "5554441400",
      description: "",
      direction: "",
    },
  },
  {
    id: "8",
    callStart: "9/6/2025 10:55:34 PM",
    callEnd: "9/6/2025 10:55:58 PM",
    status: "Unanswered",
    duration: "00:24",
    caller: "5554440066",
    callerDisplay: "(5174440066)",
    callee: "5554441400",
    inboundRule: "",
    recordings: false,
    details: {
      start: "9/6/2025 10:55:34 PM",
      answered: "",
      end: "9/6/2025 10:55:58 PM",
      ringing: "00:00",
      talking: "00:24",
      status: "Unanswered",
      caller: "5554440066 (5174440066)",
      destination: "5554441400",
      description: "",
      direction: "",
    },
  },
  {
    id: "9",
    callStart: "9/6/2025 10:55:23 PM",
    callEnd: "9/6/2025 10:55:24 PM",
    status: "Unanswered",
    duration: "00:01",
    caller: "5554440066",
    callerDisplay: "(5174440066)",
    callee: "5554441400",
    inboundRule: "",
    recordings: false,
    details: {
      start: "9/6/2025 10:55:23 PM",
      answered: "",
      end: "9/6/2025 10:55:24 PM",
      ringing: "00:00",
      talking: "00:01",
      status: "Unanswered",
      caller: "5554440066 (5174440066)",
      destination: "5554441400",
      description: "",
      direction: "",
    },
  },
  {
    id: "10",
    callStart: "9/6/2025 10:48:12 PM",
    callEnd: "9/6/2025 10:51:38 PM",
    status: "Answered",
    duration: "03:26",
    caller: "5554442382",
    callerDisplay: "(6264442382)",
    callee: "5554441400",
    inboundRule: "",
    recordings: false,
    details: {
      start: "9/6/2025 10:48:12 PM",
      answered: "9/6/2025 10:48:12 PM",
      end: "9/6/2025 10:51:38 PM",
      ringing: "00:00",
      talking: "03:26",
      status: "Answered",
      caller: "5554442382 (6264442382)",
      destination: "5554441400",
      description: "",
      direction: "",
    },
  },
]

export default function CallLogsPage() {
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null)

  const toggleRow = (id: string) => {
    setExpandedRowId(expandedRowId === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-[#1a2332] text-white p-6">
      {/* Header */}
      <div className="bg-[#1a2332] border-b border-[#2a3441] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[#7fb3d3]">Calls</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-white">Details</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">SAVED FILTERS</div>
            <select className="bg-[#2a3441] border border-[#3a4551] text-white px-3 py-1 text-sm rounded-md">
              <option>-- Select --</option>
            </select>
            <div className="text-sm text-gray-400">FILTERS</div>
            <Button variant="outline" size="sm" className="bg-[#2a3441] border-[#3a4551] text-white hover:bg-[#3a4551] rounded-md">
              <Calendar className="w-4 h-4 mr-2" />
              Today
            </Button>
            <Button variant="outline" size="sm" className="bg-[#2a3441] border-[#3a4551] text-white hover:bg-[#3a4551] rounded-md">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="sm" className="bg-[#2a3441] border-[#3a4551] text-white hover:bg-[#3a4551] rounded-md">
              <MoreHorizontal className="w-4 h-4 mr-2" />
              More
            </Button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto px-2 py-2 mt-4">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="text-slate-200">
              <th className="bg-slate-700 border border-slate-600 px-4 py-2 text-sky-300" colSpan={2}></th>
              <th className="bg-slate-900 border border-slate-600 px-4 py-2 text-sky-300" colSpan={2}>Call</th>
              <th className="bg-slate-700 border border-slate-600 px-4 py-2 text-sky-300" colSpan={3}></th>
            </tr>
            <tr className="text-left text-slate-300">
              <th className="border border-slate-600 bg-slate-700 px-4 py-2">Call Start</th>
              <th className="border border-slate-600 bg-slate-700 px-4 py-2">Call End</th>
              <th className="border border-slate-600 bg-slate-900 px-4 py-2">Call Status</th>
              <th className="border border-slate-600 bg-slate-900 px-4 py-2">Total Duration</th>
              <th className="border border-slate-600 p-2 bg-slate-700 text-slate-300">Caller</th>
              <th className="border border-slate-600 p-2 bg-slate-700 text-slate-300">Callee</th>
              <th className="border border-slate-600 p-2 bg-slate-700 text-slate-300">Recordings</th>
            </tr>
          </thead>
          <tbody>
            {mockCallLogs.map((log) => (
              <React.Fragment key={log.id}>
                <tr className="text-white hover:bg-slate-600/30 transition-colors duration-200">
                  <td className="p-2 border border-slate-600">
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto mr-2 text-gray-300 hover:text-white"
                        onClick={() => toggleRow(log.id)}
                      >
                        {expandedRowId === log.id ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </Button>
                      {log.callStart}
                    </div>
                  </td>
                  <td className="p-2 border border-slate-600">{log.callEnd}</td>
                  <td className="p-2 border border-slate-600">
                    <Badge
                      className={`px-2 py-1 text-xs font-medium ${
                        log.status === "Answered" ? "bg-green-400/10 text-green-400" : "bg-red-400/10 text-red-400"
                      }`}
                    >
                      {log.status}
                    </Badge>
                  </td>
                  <td className="p-2 border border-slate-600">{log.duration}</td>
                  <td className="p-2 border border-slate-600">
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-orange-400" />
                      {log.caller} {log.callerDisplay && `${log.callerDisplay}`}
                    </div>
                  </td>
                  <td className="p-2 border border-slate-600">{log.callee || "-"}</td>
                  <td className="p-2 border border-slate-600">{log.recordings ? "Yes" : "No"}</td>
                </tr>
                {expandedRowId === log.id && (
                  <tr className="bg-slate-600/20">
                    <td colSpan={7} className="p-2 border border-slate-600">
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="text-slate-200">
                            <th className="bg-slate-700 border border-slate-600 px-2 py-1 text-sky-300">Start</th>
                            <th className="bg-slate-900 border border-slate-600 px-2 py-1 text-sky-300">End</th>
                            <th className="bg-slate-700 border border-slate-600 px-2 py-1 text-sky-300">Ringing</th>
                            <th className="bg-slate-900 border border-slate-600 px-2 py-1 text-sky-300">Talking</th>
                            <th className="bg-slate-700 border border-slate-600 px-2 py-1 text-sky-300">Status</th>
                            <th className="bg-slate-900 border border-slate-600 px-2 py-1 text-sky-300">Caller</th>
                            <th className="bg-slate-700 border border-slate-600 px-2 py-1 text-sky-300">Description</th>
                            <th className="bg-slate-900 border border-slate-600 px-2 py-1 text-sky-300">Direction</th>
                            <th className="bg-pink-700/90 border border-slate-600 px-2 py-1">Play</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-white">
                            <td className="p-2 border border-slate-600">{log.details.start}</td>
                            <td className="p-2 border border-slate-600">{log.details.end}</td>
                            <td className="p-2 border border-slate-600">{log.details.ringing}</td>
                            <td className="p-2 border border-slate-600">{log.details.talking}</td>
                            <td className="p-2 border border-slate-600">
                              <Badge
                                className={`px-2 py-1 text-xs font-medium ${
                                  log.details.status === "Answered" ? "bg-green-400/10 text-green-400" : "bg-red-400/10 text-red-400"
                                }`}
                              >
                                {log.details.status}
                              </Badge>
                            </td>
                            <td className="p-2 border border-slate-600">{log.details.caller}</td>
                            <td className="p-2 border border-slate-600">{log.details.description || "-"}</td>
                            <td className="p-2 border border-slate-600">{log.details.direction || "-"}</td>
                            <td className="p-2 border border-slate-600">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-1 h-auto text-slate-300 hover:text-white"
                                disabled={!log.details.description}
                              >
                                <Play className="w-4 h-4" />
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="bg-[#2a3441] border-[#3a4551] text-white hover:bg-[#3a4551] rounded-md">
            ‹‹
          </Button>
          <Button variant="outline" size="sm" className="bg-[#2a3441] border-[#3a4551] text-white hover:bg-[#3a4551] rounded-md">
            ‹
          </Button>
          <span className="text-white mx-2">1</span>
          <Button variant="outline" size="sm" className="bg-[#2a3441] border-[#3a4551] text-white hover:bg-[#3a4551] rounded-md">
            2
          </Button>
          <Button variant="outline" size="sm" className="bg-[#2a3441] border-[#3a4551] text-white hover:bg-[#3a4551] rounded-md">
            3
          </Button>
          <Button variant="outline" size="sm" className="bg-[#2a3441] border-[#3a4551] text-white hover:bg-[#3a4551] rounded-md">
            4
          </Button>
          <Button variant="outline" size="sm" className="bg-[#2a3441] border-[#3a4551] text-white hover:bg-[#3a4551] rounded-md">
            5
          </Button>
          <Button variant="outline" size="sm" className="bg-[#2a3441] border-[#3a4551] text-white hover:bg-[#3a4551] rounded-md">
            ›
          </Button>
          <Button variant="outline" size="sm" className="bg-[#2a3441] border-[#3a4551] text-white hover:bg-[#3a4551] rounded-md">
            ››
          </Button>
        </div>
        <div className="text-gray-400">1 - 10 of 239 items</div>
      </div>
    </div>
  )
}