
import { NavLink } from 'react-router-dom';

import {
    LayoutDashboard,
    Building2,
    Map,
    Calculator,
    CalendarDays,
    Users,
    UserRoundPlus,
    Images,
    FileText,
    UserRoundCog,
    PanelsTopLeft,
    ChartNoAxesCombined,
    Settings,
    ChevronLeft,
    X
} from 'lucide-react';

const menuGroups = [
    {
        title: 'MAIN MENU',
        items: [
            { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
            { label: 'Projects', path: '/admin/projects', icon: Building2 },
            { label: 'Plot Management', path: '/admin/plots', icon: Map },
            { label: 'Calculator Settings', path: '/admin/calculator-settings', icon: Calculator },
            { label: 'Visit Bookings', path: '/admin/bookings', icon: CalendarDays },
        ]
    },
    {
        title: 'MANAGEMENT',
        items: [
            { label: 'Customers', path: '/admin/customers', icon: Users },
            { label: 'Leads', path: '/admin/leads', icon: UserRoundPlus },
            { label: 'Gallery', path: '/admin/gallery', icon: Images },
            { label: 'Documents', path: '/admin/documents', icon: FileText },
            { label: 'Management Team', path: '/admin/management', icon: UserRoundCog },
        ]
    },
    {
        title: 'WEBSITE',
        items: [
            { label: 'Website Content', path: '/admin/website-content', icon: PanelsTopLeft },
            { label: 'Reports', path: '/admin/reports', icon: ChartNoAxesCombined },
            { label: 'Settings', path: '/admin/settings', icon: Settings },
        ]
    }
];

const Sidebar = ({ open, onClose }) => {
    return (
        <>
            {open && (
                <button
                    type="button"
                    aria-label="Close sidebar"
                    onClick={onClose}
                    className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
                />
            )}

            <aside
                className={`
          fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col
          border-r border-slate-200 bg-white
          transition-transform duration-300
          lg:static lg:translate-x-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                {/* Logo */}
                <div className="flex h-[76px] items-center justify-between border-b border-slate-100 px-6">
                    <NavLink to="/admin/dashboard" className="text-2xl font-bold tracking-tight">
                        <span className="text-blue-600">MEGH</span>{' '}
                        <span className="text-green-600">BARI</span>
                        <span className="ml-2 text-[10px] font-semibold text-slate-400">
                            ADMIN
                        </span>
                    </NavLink>

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-7 overflow-y-auto px-4 py-6">
                    {menuGroups.map((group) => (
                        <div key={group.title}>
                            <p className="mb-3 px-3 text-[10px] font-bold tracking-[1.5px] text-slate-400">
                                {group.title}
                            </p>

                            <div className="space-y-1">
                                {group.items.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            onClick={onClose}
                                            className={({ isActive }) => `
                        group flex items-center gap-3 rounded-xl px-3 py-3
                        text-[13px] font-medium transition-all
                        ${isActive
                                                    ? 'bg-[#eaf3ef] text-[#18352d]'
                                                    : 'text-slate-500 hover:bg-slate-50 hover:text-[#18352d]'
                                                }
                      `}
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    <Icon
                                                        size={18}
                                                        strokeWidth={isActive ? 2.3 : 1.8}
                                                    />
                                                    <span>{item.label}</span>

                                                    {isActive && (
                                                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#245344]" />
                                                    )}
                                                </>
                                            )}
                                        </NavLink>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Sidebar Footer */}
                <div className="border-t border-slate-100 p-4">
                    <div className="rounded-xl bg-[#f4f7f5] p-3">
                        <p className="text-xs font-semibold text-[#18352d]">
                            Megh Bari Asset Limited
                        </p>
                        <p className="mt-1 text-[11px] text-slate-500">
                            Admin Management Portal
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
