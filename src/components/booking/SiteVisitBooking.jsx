
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
    CalendarDays,
    Clock3,
    ArrowLeft,
    ArrowRight,
    MapPin,
    CheckCircle2,
    Send,
    Pencil,
} from 'lucide-react';

import projects from '../../data/projects';
import useLanguage from '../../hooks/useLanguage';
import Container from '../common/Container';

const SiteVisitBooking = () => {
    const { language } = useLanguage();
    const isBangla = language === 'bn';

    const [weekStart, setWeekStart] = useState(() => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    });

    const [selectedDate, setSelectedDate] = useState(() => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    });

    const [selectedTime, setSelectedTime] = useState('12:00 PM');

    const [formData, setFormData] = useState({
        project: '',
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const dates = useMemo(() => {
        return Array.from({ length: 8 }, (_, index) => {
            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + index);
            return date;
        });
    }, [weekStart]);

    const timeSlots = [
        '11:00 AM',
        '11:30 AM',
        '12:00 PM',
        '12:30 PM',
        '1:00 PM',
        '1:30 PM',
        '2:00 PM',
        '2:30 PM',
        '3:00 PM',
        '3:30 PM',
        '4:00 PM',
        '4:30 PM',
        '5:00 PM',
        '5:30 PM',
        '6:00 PM',
        '6:30 PM',
    ];

    const formatDate = (date, options) =>
        new Intl.DateTimeFormat(isBangla ? 'bn-BD' : 'en-US', options).format(date);

    const isSameDate = (first, second) =>
        first.toDateString() === second.toDateString();

    const handleDateNavigation = (direction) => {
        const nextDate = new Date(weekStart);
        nextDate.setDate(weekStart.getDate() + direction * 8);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (nextDate < today) return;

        setWeekStart(nextDate);
        setSelectedDate(nextDate);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);
    };

    const inputClass =
        'w-full rounded-xl border border-slate-200 bg-[#fafafa] px-4 py-3 text-sm text-[#18352d] outline-none transition placeholder:text-slate-400 focus:border-[#b98a52] focus:bg-white focus:ring-2 focus:ring-[#b98a52]/10';

    const labelClass = 'mb-2 block text-sm font-semibold text-[#18352d]';

    return (
        <section className="bg-[#f7f6f1] py-14 sm:py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-[0.85fr_1.4fr]"
                >

                    {/* Left Panel */}
                    <div className="relative flex min-h-[420px] flex-col overflow-hidden bg-[#102c25] p-7 text-white sm:p-10 lg:min-h-[760px]">

                        <div className="relative z-10">
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4b58c]">
                                {isBangla ? 'মেঘ বাড়ি' : 'MEGH BARI'}
                            </span>

                            <h1 className="mt-5 max-w-sm font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                                {isBangla ? (
                                    <>
                                        আপনার
                                        <br />
                                        ভ্রমণের সময়
                                        <br />
                                        নির্ধারণ করুন
                                    </>
                                ) : (
                                    <>
                                        Schedule
                                        <br />
                                        a Tour
                                    </>
                                )}
                            </h1>

                            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
                                {isBangla
                                    ? 'আমাদের প্রকল্প ঘুরে দেখুন এবং আপনার পছন্দের জমি সম্পর্কে বিস্তারিত জানুন।'
                                    : 'Explore our projects in person and discover the right place for your future.'}
                            </p>
                        </div>

                        {/* Calendar Illustration */}
                        <div className="relative mt-auto flex min-h-[260px] items-center justify-center pt-10">

                            <div className="absolute bottom-4 left-1/2 h-56 w-64 -translate-x-1/2 rotate-[-10deg] rounded-[30px] bg-[#b9c5d2] shadow-2xl sm:h-64 sm:w-72">

                                <div className="absolute inset-x-0 top-0 h-20 rounded-t-[30px] bg-[#b98a52]" />

                                <div className="absolute -top-5 left-5 right-5 flex justify-between">
                                    {Array.from({ length: 7 }).map((_, index) => (
                                        <div
                                            key={index}
                                            className="h-12 w-5 rounded-full border-4 border-[#9aa9ba] bg-[#dce3e9] shadow-md"
                                        />
                                    ))}
                                </div>

                                <div className="absolute inset-x-4 top-24 grid grid-cols-5 gap-2">
                                    {Array.from({ length: 15 }).map((_, index) => (
                                        <div
                                            key={index}
                                            className="flex aspect-square items-center justify-center rounded-lg border-2 border-[#a7b5c4] bg-white/90 text-xs font-semibold text-[#18352d]"
                                        >
                                            {index + 1}
                                        </div>
                                    ))}
                                </div>

                            </div>

                            {/* Clock */}
                            <div className="absolute bottom-0 right-0 flex h-32 w-32 items-center justify-center rounded-full border-[12px] border-[#d4b58c] bg-white shadow-xl sm:h-40 sm:w-40">
                                <div className="relative h-full w-full rounded-full">
                                    <div className="absolute left-1/2 top-5 h-10 w-1.5 -translate-x-1/2 rounded-full bg-[#18352d]" />
                                    <div className="absolute bottom-1/2 left-1/2 h-1.5 w-9 origin-left rotate-45 rounded-full bg-[#18352d]" />
                                    <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b98a52]" />
                                </div>
                            </div>

                            {/* Pencil */}
                            <div className="absolute bottom-32 right-3 rotate-[-40deg] text-[#d4b58c]">
                                <Pencil size={64} strokeWidth={5} />
                            </div>

                        </div>

                        <div className="relative z-10 mt-8 flex items-center gap-3 text-xs text-white/60">
                            <MapPin size={16} className="text-[#d4b58c]" />
                            {isBangla
                                ? 'আপনার পছন্দের প্রকল্পে ভিজিট করুন'
                                : 'Visit your preferred project'}
                        </div>

                    </div>

                    {/* Right Panel */}
                    <div className="p-5 sm:p-8 lg:p-10">

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex min-h-[600px] flex-col items-center justify-center text-center"
                            >
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
                                    <CheckCircle2 size={42} />
                                </div>

                                <h2 className="mt-6 text-2xl font-bold text-[#18352d]">
                                    {isBangla ? 'ধন্যবাদ!' : 'Thank You!'}
                                </h2>

                                <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                                    {isBangla
                                        ? 'আপনার সাইট ভিজিট ফর্মটি সম্পন্ন হয়েছে। এটি বর্তমানে ডেমো; অনুরোধটি সার্ভারে পাঠানো হয়নি।'
                                        : 'Your site visit form is complete. This is currently a demo; the request has not been sent to a server.'}
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="mt-7 rounded-full bg-[#18352d] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#b98a52]"
                                >
                                    {isBangla ? 'আবার বুক করুন' : 'Book Another Tour'}
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit}>

                                {/* Date Selection */}
                                <div>
                                    <div className="mb-4 flex items-center justify-between">
                                        <h2 className="text-sm font-bold text-[#18352d]">
                                            {isBangla ? 'তারিখ নির্বাচন করুন' : 'Select Date'}
                                        </h2>

                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={() => handleDateNavigation(-1)}
                                                disabled={isSameDate(weekStart, new Date())}
                                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#18352d] transition hover:bg-[#18352d] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                                                aria-label="Previous dates"
                                            >
                                                <ArrowLeft size={16} />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => handleDateNavigation(1)}
                                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#18352d] transition hover:bg-[#18352d] hover:text-white"
                                                aria-label="Next dates"
                                            >
                                                <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
                                        {dates.map((date) => {
                                            const active = isSameDate(date, selectedDate);

                                            return (
                                                <button
                                                    key={date.toISOString()}
                                                    type="button"
                                                    onClick={() => setSelectedDate(date)}
                                                    className={`flex min-h-[92px] flex-col items-center justify-center rounded-xl border px-1 py-3 transition ${active
                                                            ? 'border-[#b98a52] bg-[#f7f1e8] text-[#18352d] shadow-sm'
                                                            : 'border-slate-200 bg-white text-slate-600 hover:border-[#b98a52]'
                                                        }`}
                                                >
                                                    <span className="text-[11px]">
                                                        {formatDate(date, { month: 'short' })}
                                                    </span>

                                                    <span className="my-1 text-2xl font-bold">
                                                        {formatDate(date, { day: 'numeric' })}
                                                    </span>

                                                    <span className="text-[11px]">
                                                        {formatDate(date, { weekday: 'short' })}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Time Selection */}
                                <div className="mt-9">
                                    <h2 className="mb-4 text-sm font-bold text-[#18352d]">
                                        {isBangla ? 'সময় নির্বাচন করুন' : 'Select Time'}
                                    </h2>

                                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                                        {timeSlots.map((time) => {
                                            const active = selectedTime === time;

                                            return (
                                                <button
                                                    key={time}
                                                    type="button"
                                                    onClick={() => setSelectedTime(time)}
                                                    className={`rounded-lg border px-2 py-3 text-xs font-medium transition sm:text-sm ${active
                                                            ? 'border-[#b98a52] bg-[#f7f1e8] font-bold text-[#18352d]'
                                                            : 'border-slate-200 text-slate-600 hover:border-[#b98a52] hover:bg-[#faf8f4]'
                                                        }`}
                                                >
                                                    {time}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Project */}
                                <div className="mt-9">
                                    <label className={labelClass}>
                                        {isBangla ? 'প্রকল্প নির্বাচন' : 'Select Project'} *
                                    </label>

                                    <select
                                        name="project"
                                        value={formData.project}
                                        onChange={handleChange}
                                        required
                                        className={inputClass}
                                    >
                                        <option value="">
                                            {isBangla ? 'প্রকল্প নির্বাচন করুন' : 'Choose a project'}
                                        </option>

                                        {projects.map((project) => (
                                            <option key={project.id} value={project.id}>
                                                {isBangla ? project.nameBn : project.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Visitor Details */}
                                <div className="mt-6 grid gap-5 sm:grid-cols-2">

                                    <div>
                                        <label className={labelClass}>
                                            {isBangla ? 'আপনার নাম' : 'Name'} *
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder={isBangla ? 'আপনার পূর্ণ নাম' : 'Your full name'}
                                            required
                                            className={inputClass}
                                        />
                                    </div>

                                    <div>
                                        <label className={labelClass}>
                                            {isBangla ? 'ফোন নম্বর' : 'Phone Number'} *
                                        </label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="01XXXXXXXXX"
                                            pattern="01[3-9][0-9]{8}"
                                            title="Enter a valid Bangladesh mobile number"
                                            required
                                            className={inputClass}
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className={labelClass}>
                                            {isBangla ? 'ইমেইল' : 'Email'}
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="example@email.com"
                                            className={inputClass}
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className={labelClass}>
                                            {isBangla ? 'বার্তা' : 'Message'}
                                        </label>

                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="3"
                                            placeholder={
                                                isBangla
                                                    ? 'আপনার কোনো প্রশ্ন বা বিশেষ অনুরোধ থাকলে লিখুন...'
                                                    : 'Write any questions or special requests...'
                                            }
                                            className={`${inputClass} resize-none`}
                                        />
                                    </div>

                                </div>

                                {/* Selected Appointment */}
                                <div className="mt-6 flex flex-wrap items-center gap-2 rounded-xl bg-[#f7f6f1] p-4 text-xs text-[#18352d]">
                                    <CalendarDays size={16} className="text-[#b98a52]" />

                                    <span className="font-semibold">
                                        {formatDate(selectedDate, {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </span>

                                    <span className="text-slate-400">|</span>

                                    <Clock3 size={15} className="text-[#b98a52]" />

                                    <span className="font-semibold">{selectedTime}</span>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#18352d] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#b98a52]"
                                >
                                    <Send size={16} />
                                    {isBangla ? 'ভিজিট নিশ্চিত করার অনুরোধ পাঠান' : 'Confirm Appointment'}
                                </button>

                                <p className="mt-4 text-center text-xs leading-6 text-slate-400">
                                    {isBangla
                                        ? 'এটি একটি ডেমো ফর্ম। প্রকৃত বুকিংয়ের জন্য সার্ভার সংযুক্ত করা প্রয়োজন।'
                                        : 'Demo form only. Server integration is required for actual appointment requests.'}
                                </p>

                            </form>
                        )}

                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default SiteVisitBooking;
