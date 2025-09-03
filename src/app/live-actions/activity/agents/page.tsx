"use client"

import React from "react";
import { AgentPerformanceDash } from "@/components/agents/agentperformancedash";
import { div } from "framer-motion/client";
import { AgentLiveActionStats } from "@/components/agents/agentliveactionstats";

export default function AgentsLiveActions() {
    return (
        <div className="p-4">
            <AgentLiveActionStats />
            <AgentPerformanceDash />
        </div>
    )
}