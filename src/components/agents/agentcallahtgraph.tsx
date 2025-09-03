"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { RefreshCcw, Minimize2, X } from "lucide-react"

type AgentAHTData = {
  agent: string
  avgHandlingTime: number // in minutes
}

const sampleData: AgentAHTData[] = [
  { agent: "Doris", avgHandlingTime: 5.2 },
  { agent: "Mark", avgHandlingTime: 4.7 },
  { agent: "SUsan", avgHandlingTime: 6.1 },
  { agent: "Mary", avgHandlingTime: 3.9 },
  { agent: "Britta", avgHandlingTime: 4.3 },
]

export default function AgentAvgHandlingTimeChart() {
  const [isFullscreen, setIsFullScreen] = useState(false)

  return (
    <div
      className={`${
        isFullscreen
          ? "fixed inset-0 z-50 bg-slate-900 px-2"
          : "bg-slate-800 border border-slate-900"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between py-1.5 px-3 border-b border-slate-700">
        <h2 className="text-sm text-sky-400">Average Handling Time (AHT)</h2>
        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-slate-200">
            <RefreshCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullScreen(!isFullscreen)}
            className="text-slate-400 hover:text-slate-200 transition"
          >
            {isFullscreen ? (
              <X className="w-4 h-4" />
            ) : (
              <Minimize2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className={`${isFullscreen ? "h-[1000px] w-full" : "h-80 w-full"}`}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sampleData} barCategoryGap="25%">
            <XAxis dataKey="agent" stroke="#94a3b8" />
            <YAxis
              stroke="#94a3b8"
              label={{
                value: "Minutes",
                angle: -90,
                position: "insideLeft",
                fill: "#94a3b8",
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#e2e8f0" }}
            />
            <Legend />
            <Bar
              dataKey="avgHandlingTime"
              fill="#5af63bff"
              name="Avg Handling Time (min)"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
