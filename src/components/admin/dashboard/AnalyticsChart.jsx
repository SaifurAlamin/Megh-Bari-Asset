
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const chartData = [
    { month: 'Jan', leads: 32, bookings: 12 },
    { month: 'Feb', leads: 45, bookings: 18 },
    { month: 'Mar', leads: 38, bookings: 15 },
    { month: 'Apr', leads: 60, bookings: 24 },
    { month: 'May', leads: 52, bookings: 21 },
    { month: 'Jun', leads: 75, bookings: 32 },
    { month: 'Jul', leads: 68, bookings: 29 },
    { month: 'Aug', leads: 85, bookings: 38 },
    { month: 'Sep', leads: 72, bookings: 34 },
    { month: 'Oct', leads: 95, bookings: 45 },
    { month: 'Nov', leads: 88, bookings: 41 },
    { month: 'Dec', leads: 105, bookings: 52 }
];

const AnalyticsChart = () => {
    return (
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">

            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h3 className="text-base font-bold text-[#18352d]">
                        Booking & Lead Analytics
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                        Monthly performance overview
                    </p>
                </div>

                <select
                    defaultValue="year"
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none focus:border-[#245344]"
                >
                    <option value="year">This Year</option>
                    <option value="month">This Month</option>
                </select>
            </div>

            <div className="mb-5 flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#245344]" />
                    <span className="text-xs text-slate-500">Leads</span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#b98a52]" />
                    <span className="text-xs text-slate-500">Bookings</span>
                </div>
            </div>

            <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={chartData}
                        margin={{ top: 10, right: 5, left: -20, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="leadGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#245344" stopOpacity={0.18} />
                                <stop offset="95%" stopColor="#245344" stopOpacity={0} />
                            </linearGradient>

                            <linearGradient id="bookingGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#b98a52" stopOpacity={0.18} />
                                <stop offset="95%" stopColor="#b98a52" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            stroke="#edf0f2"
                            strokeDasharray="4 4"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                            dy={10}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                        />

                        <Tooltip
                            contentStyle={{
                                borderRadius: '12px',
                                border: '1px solid #edf0f2',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                                fontSize: '12px'
                            }}
                        />

                        <Area
                            type="monotone"
                            dataKey="leads"
                            name="Leads"
                            stroke="#245344"
                            strokeWidth={2.5}
                            fill="url(#leadGradient)"
                            activeDot={{ r: 5 }}
                        />

                        <Area
                            type="monotone"
                            dataKey="bookings"
                            name="Bookings"
                            stroke="#b98a52"
                            strokeWidth={2.5}
                            fill="url(#bookingGradient)"
                            activeDot={{ r: 5 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnalyticsChart;
