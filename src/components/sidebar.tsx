"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  Users,
  Phone,
  ChevronRight,
  ChevronDown,
  PanelLeft,
  Home,
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleDropdown = (menu: string) => {
    if (isOpen) {
      setOpenDropdown(openDropdown === menu ? null : menu);
      setOpenNestedDropdown(null);
    } else {
      setHoveredMenu(menu);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setHoveredMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={sidebarRef}
      className={`min-h-screen bg-slate-900 text-slate-200 flex flex-col border-r border-slate-700 transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Top section with Hamburger */}
      <div className="flex items-center justify-between p-2 border-b border-slate-700">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-slate-800"
          title={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          <Menu size={22} />
        </button>
        {isOpen && (
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-slate-800"
            title={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            <PanelLeft size={18} />
          </button>
        )}
      </div>

      {/* Sidebar Menu */}
      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-2">
          <li className="relative">
            <button
              className="flex items-center w-full p-2 rounded-md hover:bg-slate-800"
              onClick={() => handleDropdown("admindash")}
              onMouseEnter={() => !isOpen && setHoveredMenu("admindash")}
            >
                <Link 
                    href={'/admindashcc'}
                    className="flex"
                >
                <Home size={20} />
                {isOpen && <span className="ml-3">Home</span>}
                </Link>
              {/* {isOpen &&
                (openDropdown === "admindash" ? (
                  <ChevronDown className="ml-auto" size={16} />
                ) : (
                  <ChevronRight className="ml-auto" size={16} />
                ))} */}
            </button>
          </li>
          {/* Agents */}
          <li className="relative">
            <button
              className="flex items-center w-full p-2 rounded-md hover:bg-slate-800"
              onClick={() => handleDropdown("agents")}
              onMouseEnter={() => !isOpen && setHoveredMenu("agents")}
            >
              <Users size={20} />
              {isOpen && <span className="ml-3">Agents</span>}
              {isOpen &&
                (openDropdown === "agents" ? (
                  <ChevronDown className="ml-auto" size={16} />
                ) : (
                  <ChevronRight className="ml-auto" size={16} />
                ))}
            </button>

            {/* Expanded Dropdown (only when sidebar is open) */}
            {isOpen && openDropdown === "agents" && (
              <ul className="ml-10 mt-1 space-y-1 text-sm">
                <li className="hover:bg-slate-800 rounded p-2 cursor-pointer">
                  <Link
                    href={'/live-actions/activity/agents'}
                  >
                    Live Actions
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setOpenNestedDropdown(
                      openNestedDropdown === "agentDetails" ? null : "agentDetails"
                    )}
                    className="flex items-center w-full p-2 rounded hover:bg-slate-800"
                  >
                    Agent Details
                    {openNestedDropdown === "agentDetails" ? (
                      <ChevronDown className="ml-auto" size={14} />
                    ) : (
                      <ChevronRight className="ml-auto" size={14} />
                    )}
                  </button>
                  {openNestedDropdown === "agentDetails" && (
                    <ul className="ml-6 mt-1 space-y-1 text-xs">
                      <Link
                          href={'/agent-details/calls'}
                        >
                      <li className="hover:bg-slate-800 rounded p-2 cursor-pointer">
                          Call Details
                      </li>
                      </Link>
                      <li className="hover:bg-slate-800 rounded p-2 cursor-pointer">
                        Login History
                      </li>
                    </ul>
                  )}
                </li>
                <Link 
                href={'/agent-performance'}
                >
                <li className="hover:bg-slate-800 rounded p-2 cursor-pointer">
                  Agent Performance
                </li>
                </Link>
              </ul>
            )}

            {/* Floating Modal (only when collapsed) */}
            {!isOpen && hoveredMenu === "agents" && (
              <div
                onMouseEnter={() => setHoveredMenu("agents")}
                onMouseLeave={() => setHoveredMenu("null")}
                className="fixed top-20 left-16 w-52 bg-slate-900 border border-slate-700 shadow-lg py-2 z-50"
            >
                <ul className="space-y-1 text-sm">
                  <Link
                    href={'/live-actions/activity/agents'}
                    >
                  <li className="hover:bg-slate-700 px-3 py-2 cursor-pointer">
                    Live Actions
                  </li>
                  </Link>
                  <li>
                    <button
                      onClick={() => setOpenNestedDropdown(
                        openNestedDropdown === "agentDetails" ? null : "agentDetails"
                      )}
                      className="flex items-center w-full px-3 py-2 hover:bg-slate-700"
                    >
                      Agent Details
                      {openNestedDropdown === "agentDetails" ? (
                        <ChevronDown className="ml-auto" size={14} />
                      ) : (
                        <ChevronRight className="ml-auto" size={14} />
                      )}
                    </button>
                    {openNestedDropdown === "agentDetails" && (
                      <ul className="ml-4 mt-1 space-y-1 text-xs">
                        <Link
                            href={'/agent-details/calls'}
                        >
                        <li className="hover:bg-slate-700 px-3 py-2 cursor-pointer">
                            Call Details
                        </li>
                        </Link>
                        <li className="hover:bg-slate-700 px-3 py-2 cursor-pointer">
                          Login History
                        </li>
                      </ul>
                    )}
                  </li>
                  <Link href={'/agent-performance'}>
                  <li className="hover:bg-slate-700 px-3 py-2 cursor-pointer">
                    Agent Performance
                  </li>
                  </Link>
                </ul>
              </div>
            )}
          </li>

          {/* Calls */}
          <li className="relative">
            <button
              className="flex items-center w-full p-2 rounded-md hover:bg-slate-800"
              onClick={() => handleDropdown("calls")}
              onMouseEnter={() => !isOpen && setHoveredMenu("calls")}
            >
              <Phone size={20} />
              {isOpen && <span className="ml-3">Calls</span>}
              {isOpen &&
                (openDropdown === "calls" ? (
                  <ChevronDown className="ml-auto" size={16} />
                ) : (
                  <ChevronRight className="ml-auto" size={16} />
                ))}
            </button>

            {isOpen && openDropdown === "calls" && (
              <ul className="ml-10 mt-1 space-y-1 text-sm">
                <Link href={"/live-actions/activity/calls"}>
                  <li className="hover:bg-slate-800 rounded p-2 cursor-pointer">
                    Live Calls
                  </li>
                </Link>
                <Link href={"/call-details/call-logs/"}>
                  <li className="hover:bg-slate-800 rounded p-2 cursor-pointer">
                    Call Logs
                  </li>
                </Link>
                <li className="hover:bg-slate-800 rounded p-2 cursor-pointer">
                  Call Statistics
                </li>
              </ul>
            )}

            {!isOpen && hoveredMenu === "calls" && (
              <div
                onMouseEnter={() => setHoveredMenu("calls")}
                onMouseLeave={() => setHoveredMenu("null")}
                className="fixed top-20 left-16 w-52 bg-slate-900 border border-slate-700 shadow-lg py-2 z-50"
            >
                <ul className="space-y-1 text-sm">
                  <Link href={"/live-actions/activity/calls"}>
                    <li className="hover:bg-slate-700 px-3 py-2 cursor-pointer">
                      Live Calls
                    </li>
                  </Link>
                  <Link href={"/call-details/call-logs/"}>
                    <li className="hover:bg-slate-800 rounded p-2 cursor-pointer">
                      Call Logs
                    </li>
                  </Link>
                  <li className="hover:bg-slate-700 px-3 py-2 cursor-pointer">
                    Call Statistics
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
