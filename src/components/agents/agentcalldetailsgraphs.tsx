"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { RefreshCcw, X, Minimize2 } from "lucide-react";

type AgentCallData = {
  agent: string;
  successful: number;
  unsuccessful: number;
};

const sampleData: AgentCallData[] = [
  { agent: "Doris", successful: 30, unsuccessful: 12 },
  { agent: "Mark", successful: 25, unsuccessful: 15 },
  { agent: "Susan", successful: 40, unsuccessful: 8 },
  { agent: "Mary", successful: 35, unsuccessful: 10 },
  { agent: "Britta", successful: 28, unsuccessful: 18 },
];

export function AgentsCallDetailsLineGraph() {
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
        <h2 className="text-sm text-sky-400">
          Successful/Unsuccessful Calls <span className="text-xs text-sky-200">(Since last database update)</span>
        </h2>
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
          <LineChart data={sampleData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="agent" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#e2e8f0" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="successful"
              stroke="#22c55e"
              strokeWidth={2}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
              name="Successful Calls"
            />
            <Line
              type="monotone"
              dataKey="unsuccessful"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
              name="Unsuccessful Calls"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


