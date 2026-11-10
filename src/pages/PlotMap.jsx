
import { FileText, Download, ExternalLink, Map, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';

import useLanguage from '../hooks/useLanguage';
import Container from '../components/common/Container';

const documents = [
    {
        id: 1,
        icon: Map,
        titleEn: 'Megh Bari Master Layout',
        titleBn: 'মেঘ বাড়ি মাস্টার লেআউট',
        descEn: 'Explore the official master layout and plot arrangement.',
        descBn: 'অফিসিয়াল মাস্টার লেআউট ও প্লটের অবস্থান দেখুন।',
        image: 'https://www.meghbariasset.com/assets/docs/master-layout.webp',
        file: '/megh-bari-master-layout.pdf',
        buttonEn: 'View Full Map PDF',
        buttonBn: 'পূর্ণ ম্যাপ PDF দেখুন',
        tagEn: 'Plot Map',
        tagBn: 'প্লট ম্যাপ'
    },
    {
        id: 2,
        icon: FileText,
        titleEn: 'Megh Bari Plot Price List',
        titleBn: 'প্লট প্রাইস লিস্ট',
        descEn: 'Official uploaded plot price list, effective from 1 September 2026.',
        descBn: '১ সেপ্টেম্বর ২০২৬ থেকে কার্যকর আপলোড করা মূল্য তালিকা।',
        image: 'https://www.meghbariasset.com/assets/docs/price-list.webp',
        file: '/megh-bari-price-list-september-2026.pdf',
        buttonEn: 'View Full Price List',
        buttonBn: 'পূর্ণ মূল্য তালিকা দেখুন',
        tagEn: 'Price List',
        tagBn: 'মূল্য তালিকা'
    },
    {
        id: 3,
        icon: FileText,
        titleEn: 'Official Booking Form',
        titleBn: 'অফিসিয়াল বুকিং ফর্ম',
        descEn: 'View the official booking form document.',
        descBn: 'অফিসিয়াল বুকিং ফর্মটি দেখুন।',
        image: 'https://www.meghbariasset.com/assets/docs/booking-form.webp',
        file: '/megh-bari-booking-form.pdf',
        buttonEn: 'View Booking Form',
        buttonBn: 'বুকিং ফর্ম দেখুন',
        tagEn: 'Booking Form',
        tagBn: 'বুকিং ফর্ম'
    },
    {
        id: 4,
        icon: FileText,
        titleEn: 'Booking Terms & Conditions',
        titleBn: 'বুকিং ফর্মের শর্তাবলি',
        descEn: 'Read the booking terms and conditions in the official document.',
        descBn: 'অফিসিয়াল ডকুমেন্ট থেকে বুকিংয়ের শর্তাবলি পড়ুন।',
        image: 'https://www.meghbariasset.com/assets/docs/booking-terms.webp',
        file: '/megh-bari-booking-form.pdf',
        buttonEn: 'View Terms & Conditions',
        buttonBn: 'শর্তাবলি দেখুন',
        tagEn: 'Terms & Conditions',
        tagBn: 'শর্তাবলি'
    }
];

const PlotMap = () => {
    const { language } = useLanguage();
    const isBangla = language === 'bn';

    return (
        <main className="bg-[#f7f6f1]">

            {/* Hero */}
            <section className="bg-[#18352d] py-20 md:py-28">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d9c3a6]">
                            {isBangla ? 'মেঘ বাড়ি ডকুমেন্টস' : 'Megh Bari Documents'}
                        </span>

                        <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
                            {isBangla ? 'প্লট ম্যাপ ও ডকুমেন্টস' : 'Plot Map & Documents'}
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/70 md:text-base">
                            {isBangla
                                ? 'মেঘ বাড়ির মাস্টার লেআউট, প্লটের মূল্য তালিকা, বুকিং ফর্ম ও শর্তাবলি এখানে দেখুন।'
                                : 'Explore the Megh Bari master layout, plot price list, official booking form and terms & conditions.'}
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Documents */}
            <section className="py-20 md:py-24">
                <Container>

                    <div className="mb-12 text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b98a52]">
                            {isBangla ? 'অফিসিয়াল ডকুমেন্টস' : 'Official Documents'}
                        </span>

                        <h2 className="mt-3 font-display text-3xl font-semibold text-[#18352d] md:text-4xl">
                            {isBangla ? 'মেঘ বাড়ি ডকুমেন্ট লাইব্রেরি' : 'Megh Bari Document Library'}
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5f5549]">
                            {isBangla
                                ? 'নিচের ডকুমেন্টগুলো দেখুন অথবা সম্পূর্ণ PDF খুলে বিস্তারিত পড়ুন।'
                                : 'Browse the documents below or open the full PDF for more details.'}
                        </p>
                    </div>

                    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                        {documents.map((doc, index) => {
                            const Icon = doc.icon;

                            return (
                                <motion.article
                                    key={doc.id}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="group overflow-hidden rounded-2xl border border-[#e8e4da] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    {/* Document Preview */}
                                    <a
                                        href={doc.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative block h-64 overflow-hidden bg-[#eeeae2]"
                                    >
                                        <img
                                            src={doc.image}
                                            alt={isBangla ? doc.titleBn : doc.titleEn}
                                            loading="lazy"
                                            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                        />

                                        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#18352d] shadow-sm">
                                            {isBangla ? doc.tagBn : doc.tagEn}
                                        </span>

                                        <div className="absolute inset-0 flex items-center justify-center bg-[#18352d]/0 transition duration-300 group-hover:bg-[#18352d]/20">
                                            <div className="grid h-12 w-12 scale-90 place-items-center rounded-full bg-white text-[#18352d] opacity-0 shadow-lg transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                                                <ExternalLink size={20} />
                                            </div>
                                        </div>
                                    </a>

                                    {/* Content */}
                                    <div className="flex min-h-[235px] flex-col p-6">
                                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5eee4] text-[#b98a52]">
                                            <Icon size={21} />
                                        </div>

                                        <h3 className="font-display text-lg font-semibold text-[#18352d]">
                                            {isBangla ? doc.titleBn : doc.titleEn}
                                        </h3>

                                        <p className="mt-3 flex-1 text-sm leading-7 text-[#5f5549]">
                                            {isBangla ? doc.descBn : doc.descEn}
                                        </p>

                                        <a
                                            href={doc.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#18352d] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#245344]"
                                        >
                                            {isBangla ? doc.buttonBn : doc.buttonEn}
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>

                    {/* Important Note */}
                    <div className="mt-12 rounded-xl border border-[#e8e4da] bg-white p-5 md:p-6">
                        <div className="flex items-start gap-3">
                            <CalendarDays className="mt-1 shrink-0 text-[#b98a52]" size={21} />

                            <p className="text-sm leading-7 text-[#5f5549]">
                                {isBangla
                                    ? 'এগুলো নমুনা ও আপলোড করা ডকুমেন্ট। নির্দিষ্ট প্লটের প্রাপ্যতা, অবস্থান ও মূল্য অফিসে নিশ্চিত করুন।'
                                    : 'These are sample and uploaded documents. Please confirm specific plot availability, location and pricing with the office.'}
                            </p>
                        </div>
                    </div>

                </Container>
            </section>
        </main>
    );
};

export default PlotMap;
