
const StatCard = ({
    title,
    value,
    change,
    description,
    icon: Icon,
    iconBg,
    iconColor,
    positive = true
}) => {
    return (
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-500">
                        {title}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#18352d]">
                        {value}
                    </h3>
                </div>

                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBg}`}>
                    <Icon size={21} className={iconColor} />
                </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
                <span
                    className={`rounded-md px-2 py-1 text-[11px] font-semibold ${positive
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'bg-rose-50 text-rose-600'
                        }`}
                >
                    {change}
                </span>

                <span className="text-xs text-slate-400">
                    {description}
                </span>
            </div>
        </div>
    );
};

export default StatCard;
