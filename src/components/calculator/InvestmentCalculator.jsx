
import { useMemo, useState } from 'react';
import { Calculator, CheckCircle2, Wallet, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';

import useLanguage from '../../hooks/useLanguage';
import Container from '../common/Container';

const InvestmentCalculator = () => {
    const { language } = useLanguage();
    const isBangla = language === 'bn';

    const [plotSize, setPlotSize] = useState(3);
    const [pricePerKatha, setPricePerKatha] = useState(300000);
    const [downPaymentPercent, setDownPaymentPercent] = useState(20);
    const [installmentMonths, setInstallmentMonths] = useState(96);

    const currency = (amount) =>
        new Intl.NumberFormat('en-BD', {
            style: 'currency',
            currency: 'BDT',
            maximumFractionDigits: 0,
        }).format(amount);

    const calculation = useMemo(() => {
        const totalPrice = plotSize * pricePerKatha;
        const bookingMoney = Math.min(30000, totalPrice);
        const downPayment = Math.round(
            (totalPrice * downPaymentPercent) / 100
        );

        const remainingAmount = Math.max(
            0,
            totalPrice - downPayment
        );

        const monthlyInstallment =
            installmentMonths > 0
                ? Math.ceil(remainingAmount / installmentMonths)
                : 0;

        return {
            totalPrice,
            bookingMoney,
            downPayment,
            remainingAmount,
            monthlyInstallment,
        };
    }, [plotSize, pricePerKatha, downPaymentPercent, installmentMonths]);

    const summaryItems = [
        {
            label: isBangla ? 'মোট জমির মূল্য' : 'Total Land Price',
            value: currency(calculation.totalPrice),
            icon: Wallet,
        },
        {
            label: isBangla ? 'বুকিং মানি' : 'Booking Money',
            value: currency(calculation.bookingMoney),
            icon: CheckCircle2,
        },
        {
            label: isBangla ? 'ডাউন পেমেন্ট' : 'Down Payment',
            value: currency(calculation.downPayment),
            icon: Wallet,
        },
        {
            label: isBangla ? 'অবশিষ্ট টাকা' : 'Remaining Amount',
            value: currency(calculation.remainingAmount),
            icon: CalendarDays,
        },
    ];

    const inputClass =
        'w-full rounded-xl border border-[#e5e9e5] bg-white px-4 py-3 text-sm font-semibold text-[#18352d] outline-none transition focus:border-[#b98a52] focus:ring-2 focus:ring-[#b98a52]/10';

    return (
        <section className="bg-[#f7f6f1] py-20 sm:py-24">
            <Container>
                <div className="mx-auto max-w-6xl">

                    {/* Heading */}
                    <div className="mb-12 text-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#e9eee9] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#18352d]">
                            <Calculator size={15} />
                            {isBangla ? 'স্মার্ট ক্যালকুলেটর' : 'Smart Calculator'}
                        </span>

                        <h2 className="mt-5 font-display text-3xl font-bold text-[#18352d] sm:text-5xl">
                            {isBangla ? 'স্মার্ট ল্যান্ড ক্যালকুলেটর' : 'Smart Land Calculator'}
                        </h2>

                        <p className="mt-4 text-sm text-slate-500">
                            {isBangla
                                ? 'আপনার জমির বিনিয়োগের একটি আনুমানিক হিসাব তৈরি করুন।'
                                : 'Calculate an illustrative estimate for your land investment.'}
                        </p>

                        <p className="mt-2 text-xs text-[#b98a52]">
                            {isBangla
                                ? 'ডেমো হিসাব · মূল্য শুধুমাত্র উদাহরণ'
                                : 'Demo calculation · Illustrative price only'}
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">

                        {/* Calculator Controls */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-9"
                        >
                            {/* Plot Size */}
                            <div className="mb-9">
                                <div className="mb-4 flex items-center justify-between">
                                    <label className="text-sm font-bold text-[#18352d]">
                                        {isBangla ? 'জমির পরিমাণ' : 'Plot Size'}
                                    </label>

                                    <span className="text-xl font-bold text-[#18352d]">
                                        {plotSize} {isBangla ? 'কাঠা' : 'Katha'}
                                    </span>
                                </div>

                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    step="1"
                                    value={plotSize}
                                    onChange={(e) => setPlotSize(Number(e.target.value))}
                                    className="h-2 w-full cursor-pointer accent-[#18352d]"
                                />

                                <div className="mt-2 flex justify-between text-xs text-slate-400">
                                    <span>১ {isBangla ? 'কাঠা' : 'Katha'}</span>
                                    <span>১০ {isBangla ? 'কাঠা' : 'Katha'}</span>
                                </div>
                            </div>

                            {/* Price per Katha */}
                            <div className="mb-9">
                                <label className="mb-3 block text-sm font-bold text-[#18352d]">
                                    {isBangla ? 'প্রতি কাঠার মূল্য' : 'Price Per Katha'}
                                </label>

                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-[#b98a52]">
                                        ৳
                                    </span>

                                    <input
                                        type="number"
                                        min="1"
                                        value={pricePerKatha}
                                        onChange={(e) =>
                                            setPricePerKatha(Math.max(0, Number(e.target.value)))
                                        }
                                        className={`${inputClass} pl-9`}
                                        placeholder="300000"
                                    />
                                </div>
                            </div>

                            {/* Down Payment */}
                            <div className="mb-9">
                                <div className="mb-4 flex items-center justify-between">
                                    <label className="text-sm font-bold text-[#18352d]">
                                        {isBangla ? 'ডাউন পেমেন্ট' : 'Down Payment'}
                                    </label>

                                    <span className="text-xl font-bold text-[#18352d]">
                                        {downPaymentPercent}%
                                    </span>
                                </div>

                                <input
                                    type="range"
                                    min="10"
                                    max="80"
                                    step="5"
                                    value={downPaymentPercent}
                                    onChange={(e) =>
                                        setDownPaymentPercent(Number(e.target.value))
                                    }
                                    className="h-2 w-full cursor-pointer accent-[#18352d]"
                                />

                                <div className="mt-2 flex justify-between text-xs text-slate-400">
                                    <span>10%</span>
                                    <span>80%</span>
                                </div>
                            </div>

                            {/* Installment Duration */}
                            <div>
                                <label className="mb-3 block text-sm font-bold text-[#18352d]">
                                    {isBangla ? 'কিস্তির মেয়াদ' : 'Installment Duration'}
                                </label>

                                <select
                                    value={installmentMonths}
                                    onChange={(e) =>
                                        setInstallmentMonths(Number(e.target.value))
                                    }
                                    className={inputClass}
                                >
                                    {[12, 24, 48, 96].map((month) => (
                                        <option key={month} value={month}>
                                            {month} {isBangla ? 'মাস' : 'Months'}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </motion.div>

                        {/* Calculation Results */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="rounded-3xl bg-[#18352d] p-6 text-white shadow-xl sm:p-9"
                        >
                            <div className="mb-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4b58c]">
                                    {isBangla ? 'আপনার বিনিয়োগের সারাংশ' : 'Investment Summary'}
                                </p>

                                <h3 className="mt-3 font-display text-2xl font-bold">
                                    {isBangla ? 'হিসাবের বিবরণ' : 'Calculation Details'}
                                </h3>
                            </div>

                            <div className="space-y-5">
                                {summaryItems.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.label}
                                            className="flex items-center justify-between gap-3 border-b border-white/10 pb-5"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#d4b58c]">
                                                    <Icon size={18} />
                                                </div>

                                                <span className="text-sm text-white/70">
                                                    {item.label}
                                                </span>
                                            </div>

                                            <span className="text-right text-sm font-bold sm:text-base">
                                                {item.value}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-8 rounded-2xl border border-[#d4b58c]/30 bg-white/5 p-6">
                                <p className="text-sm text-white/70">
                                    {isBangla ? 'আনুমানিক মাসিক কিস্তি' : 'Estimated Monthly Installment'}
                                </p>

                                <h3 className="mt-3 font-display text-3xl font-bold text-[#e2c49c] sm:text-4xl">
                                    {currency(calculation.monthlyInstallment)}
                                </h3>

                                <p className="mt-2 text-xs text-white/50">
                                    {installmentMonths} {isBangla ? 'মাসের জন্য' : 'monthly installments'}
                                </p>
                            </div>

                            <p className="mt-5 text-xs leading-6 text-white/50">
                                {isBangla
                                    ? 'বুকিং মানি ডাউন পেমেন্টের অন্তর্ভুক্ত। এই হিসাবটি আনুমানিক; প্রকৃত মূল্য, বুকিং শর্ত, কিস্তি ও অন্যান্য চার্জ কর্তৃপক্ষের সঙ্গে যাচাই করতে হবে।'
                                    : 'Booking money is included in the down payment. This is an estimate; actual pricing, booking terms, installments and additional charges must be confirmed with the company.'}
                            </p>
                        </motion.div>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default InvestmentCalculator;
