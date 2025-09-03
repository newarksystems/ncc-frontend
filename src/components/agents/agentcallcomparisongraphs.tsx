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

type TotalCallsData = {
  hour: string;
  Doris: number;
  Mark: number;
  Susan: number;
  Mary: number;
  Britta: number;
};

const sampleData: TotalCallsData[] = [
  { hour: "08:00", Doris: 12, Mark: 10, Susan: 15, Mary: 9, Britta: 11 },
  { hour: "09:00", Doris: 20, Mark: 12, Susan: 18, Mary: 15, Britta: 14 },
  { hour: "10:00", Doris: 25, Mark: 14, Susan: 20, Mary: 18, Britta: 16 },
  { hour: "11:00", Doris: 22, Mark: 19, Susan: 24, Mary: 20, Britta: 18 },
  { hour: "12:00", Doris: 30, Mark: 25, Susan: 28, Mary: 23, Britta: 21 },
];

export default function AgentsTotalCallsComparison() {
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
          Agents Total Calls Comparison
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
          <LineChart
            data={sampleData}
            margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="hour" stroke="#94a3b8" />
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

            {/* Each Agent → Own Line */}
            <Line
              type="monotone"
              dataKey="Doris"
              stroke="#22c55e"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Doris"
            />
            <Line
              type="monotone"
              dataKey="Mark"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Mark"
            />
            <Line
              type="monotone"
              dataKey="Susan"
              stroke="#f97316"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Susan"
            />
            <Line
              type="monotone"
              dataKey="Mary"
              stroke="#a855f7"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Mary"
            />
            <Line
              type="monotone"
              dataKey="Britta"
              stroke="#eab308"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Britta"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
