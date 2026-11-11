
import {
    Menu,
    Search,
    Bell,
    ChevronDown,
    UserRound
} from 'lucide-react';

const Header = ({ onMenuClick }) => {
    return (
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur-md sm:px-6 lg:px-8">

            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={onMenuClick}
                    className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
                >
                    <Menu size={22} />
                </button>

                <div className="hidden items-center gap-2 rounded-xl bg-slate-50 px-4 py-2.5 md:flex">
                    <Search size={17} className="text-slate-400" />

                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="w-52 bg-transparent text-sm outline-none placeholder:text-slate-400"
                    />

                    <span className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400">
                        /
                    </span>
                </div>

                <p className="text-sm font-semibold text-slate-700 md:hidden">
                    Admin Dashboard
                </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-5">
                <button
                    type="button"
                    aria-label="Notifications"
                    className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100"
                >
                    <Bell size={19} />

                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-rose-500" />
                </button>

                <div className="hidden h-8 w-px bg-slate-200 sm:block" />

                <button
                    type="button"
                    className="flex items-center gap-2"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf3ef] text-[#245344]">
                        <UserRound size={18} />
                    </div>

                    <div className="hidden text-left sm:block">
                        <p className="text-xs font-semibold text-slate-700">
                            Administrator
                        </p>
                        <p className="mt-0.5 text-[10px] text-slate-400">
                            Super Admin
                        </p>
                    </div>

                    <ChevronDown size={15} className="hidden text-slate-400 sm:block" />
                </button>
            </div>
        </header>
    );
};

export default Header;
