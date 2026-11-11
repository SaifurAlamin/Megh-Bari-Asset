
import { ArrowUpRight, CalendarDays } from 'lucide-react';

const bookings = [
    {
        id: 'MB-1001',
        name: 'Rahim Ahmed',
        project: 'Megh Bari',
        date: '11 Nov, 2026',
        status: 'Pending'
    },
    {
        id: 'MB-1002',
        name: 'Karim Hasan',
        project: 'Megh Bari',
        date: '10 Nov, 2026',
        status: 'Approved'
    },
    {
        id: 'MB-1003',
        name: 'Sadia Islam',
        project: 'Megh Bari',
        date: '10 Nov, 2026',
        status: 'Rescheduled'
    },
    {
        id: 'MB-1004',
        name: 'Tanvir Hossain',
        project: 'Megh Bari',
        date: '09 Nov, 2026',
        status: 'Pending'
    }
];

const statusStyles = {
    Pending: 'bg-amber-50 text-amber-600',
    Approved: 'bg-emerald-50 text-emerald-600',
    Rescheduled: 'bg-blue-50 text-blue-600'
};

const RecentBookings = () => {
    return (
        <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">

            <div className="flex items-center justify-between border-b border-slate-100 p-5">
                <div>
                    <h3 className="text-base font-bold text-[#18352d]">
                        Recent Visit Bookings
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                        Latest customer visit requests
                    </p>
                </div>

                <CalendarDays size={20} className="text-slate-400" />
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left">
                    <thead>
                        <tr className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-400">
                            <th className="px-5 py-3 font-semibold">Customer</th>
                            <th className="px-5 py-3 font-semibold">Booking ID</th>
                            <th className="px-5 py-3 font-semibold">Visit Date</th>
                            <th className="px-5 py-3 font-semibold">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookings.map((booking) => (
                            <tr
                                key={booking.id}
                                className="border-t border-slate-100 transition hover:bg-slate-50/70"
                            >
                                <td className="px-5 py-4">
                                    <p className="text-sm font-semibold text-slate-700">
                                        {booking.name}
                                    </p>
                                    <p className="mt-1 text-xs text-slate-400">
                                        {booking.project}
                                    </p>
                                </td>

                                <td className="px-5 py-4 text-xs font-medium text-slate-500">
                                    {booking.id}
                                </td>

                                <td className="px-5 py-4 text-xs text-slate-500">
                                    {booking.date}
                                </td>

                                <td className="px-5 py-4">
                                    <span className={`rounded-full px-3 py-1.5 text-[10px] font-semibold ${statusStyles[booking.status]}`}>
                                        {booking.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="border-t border-slate-100 p-4">
                <button
                    type="button"
                    className="flex items-center gap-2 text-xs font-semibold text-[#245344] hover:text-[#18352d]"
                >
                    View all bookings
                    <ArrowUpRight size={15} />
                </button>
            </div>
        </div>
    );
};

export default RecentBookings;
