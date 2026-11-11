
import {
    Users,
    UserRoundPlus,
    CalendarCheck,
    MapPinned,
    ArrowUpRight,
    Clock3
} from 'lucide-react';

import StatCard from '../../components/admin/dashboard/StatCard';
import AnalyticsChart from '../../components/admin/dashboard/AnalyticsChart';
import RecentBookings from '../../components/admin/dashboard/RecentBookings';

const Dashboard = () => {
    return (
        <div className="space-y-7">

            {/* Page Heading */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <p className="text-xs font-medium text-slate-400">
                        Pages / Dashboard
                    </p>

                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#18352d]">
                        Dashboard Overview
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Welcome back! Here's what's happening with Megh Bari.
                    </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5">
                    <p className="text-xs font-medium text-slate-500">
                        <Clock3 size={14} className="mr-2 inline" />
                        Admin Overview
                    </p>
                </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Total Visitors"
                    value="1,284"
                    change="+12.5%"
                    description="vs last month"
                    icon={Users}
                    iconBg="bg-blue-50"
                    iconColor="text-blue-600"
                />

                <StatCard
                    title="Total Leads"
                    value="186"
                    change="+8.2%"
                    description="vs last month"
                    icon={UserRoundPlus}
                    iconBg="bg-purple-50"
                    iconColor="text-purple-600"
                />

                <StatCard
                    title="Visit Bookings"
                    value="42"
                    change="+15.4%"
                    description="vs last month"
                    icon={CalendarCheck}
                    iconBg="bg-emerald-50"
                    iconColor="text-emerald-600"
                />

                <StatCard
                    title="Available Plots"
                    value="--"
                    change="Live data"
                    description="Connect plot records"
                    icon={MapPinned}
                    iconBg="bg-amber-50"
                    iconColor="text-amber-600"
                />

            </div>

            {/* Analytics */}
            <AnalyticsChart />

            {/* Recent Bookings */}
            <RecentBookings />

            {/* Quick Information */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-[#18352d]">
                            Project Overview
                        </h3>

                        <ArrowUpRight size={18} className="text-slate-400" />
                    </div>

                    <div className="mt-5 flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                            <p className="text-sm font-semibold text-slate-700">
                                Megh Bari
                            </p>
                            <p className="mt-1 text-xs text-slate-400">
                                Rajanagar, Sirajdikhan
                            </p>
                        </div>

                        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-600">
                            Ongoing
                        </span>
                    </div>

                    <div className="mt-4 flex justify-between text-sm">
                        <span className="text-slate-500">Upcoming Projects</span>
                        <span className="font-semibold text-[#18352d]">02</span>
                    </div>
                </div>

                <div className="rounded-2xl bg-[#18352d] p-5 text-white shadow-sm">
                    <p className="text-sm font-medium text-white/60">
                        Quick Reminder
                    </p>

                    <h3 className="mt-3 text-xl font-bold">
                        Manage your new leads
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">
                        Keep track of customer inquiries and follow-ups to maintain a smooth sales process.
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#d9c3a6]">
                        <UserRoundPlus size={16} />
                        Lead management
                    </div>
                </div>

            </div>

            <p className="text-center text-[11px] text-slate-400">
                Megh Bari Asset Limited · Admin Management Portal
            </p>

        </div>
    );
};

export default Dashboard;
