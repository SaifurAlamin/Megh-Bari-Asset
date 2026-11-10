
import {
    ArrowUpRight,
    MapPin,
    Eye,
    ShieldCheck,
    FileCheck
} from 'lucide-react';

import { motion } from 'framer-motion';

import useLanguage from '../../hooks/useLanguage';
import Container from '../common/Container';

const AboutSection = () => {
    const { language } = useLanguage();
    const isBangla = language === 'bn';

    const features = [
        {
            icon: MapPin,
            title: isBangla ? 'প্রকল্প পরিদর্শন' : 'Visit the Project',
            description: isBangla
                ? 'সরাসরি প্রকল্প এলাকা ঘুরে দেখুন এবং অবস্থান সম্পর্কে জানুন।'
                : 'Visit the project location and understand the surroundings firsthand.'
        },
        {
            icon: Eye,
            title: isBangla ? 'বিস্তারিত জানুন' : 'Understand the Details',
            description: isBangla
                ? 'প্রকল্পের অবস্থান, সুযোগ-সুবিধা ও ক্রয় সংক্রান্ত তথ্য বুঝে নিন।'
                : 'Explore project location, available facilities and purchase information.'
        },
        {
            icon: ShieldCheck,
            title: isBangla ? 'নিজে যাচাই করুন' : 'Verify Independently',
            description: isBangla
                ? 'সিদ্ধান্ত নেওয়ার আগে প্রয়োজনীয় কাগজপত্র নিজ দায়িত্বে যাচাই করুন।'
                : 'Review relevant documents independently before making a decision.'
        }
    ];

    return (
        <section className="bg-white py-20 md:py-24">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#b98a52]">
                            {isBangla ? 'আমাদের সম্পর্কে' : 'About Megh Bari'}
                        </span>

                        <h2 className="font-display text-3xl font-semibold leading-tight text-[#18352d] md:text-5xl">
                            {isBangla
                                ? 'জমি কেনার সিদ্ধান্ত হোক তথ্যভিত্তিক'
                                : 'A Clearer Way to Explore Your Future Land'}
                        </h2>

                        <p className="mt-6 leading-8 text-gray-600">
                            {isBangla
                                ? 'Megh Bari Asset Limited ক্রেতাদের জন্য প্রকল্পের অবস্থান, প্রাসঙ্গিক তথ্য এবং সরাসরি পরিদর্শনের সুযোগ তুলে ধরতে কাজ করে। আমাদের লক্ষ্য হলো ক্রেতারা যেন প্রয়োজনীয় তথ্য বুঝে ও যাচাই করে নিজেদের সিদ্ধান্ত নিতে পারেন।'
                                : 'Megh Bari Asset Limited focuses on presenting project location, relevant information and opportunities for direct site visits. Our goal is to help buyers understand the available information and make their own informed decisions.'}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="https://www.facebook.com/meghbariasset"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-[#18352d] px-6 py-3 font-medium text-white transition hover:bg-[#245344]"
                            >
                                {isBangla ? 'আমাদের সম্পর্কে জানুন' : 'Know More About Us'}
                                <ArrowUpRight size={18} />
                            </a>
                        </div>

                        {/* Company Verification */}
                        <div className="mt-10 rounded-xl border border-[#e8e4da] bg-[#f7f6f1] p-5">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#245344]">
                                    <FileCheck size={24} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#18352d]">
                                        {isBangla ? 'কোম্পানি যাচাই' : 'Company Verification'}
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-500">
                                        {isBangla ? 'ট্রেড লাইসেন্স নম্বর' : 'Trade License Number'}
                                    </p>

                                    <p className="mt-1 font-semibold text-[#18352d]">
                                        TRAD/DSCC/037653/2025
                                    </p>

                                    <a
                                        href="https://www.facebook.com/meghbariasset"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#245344] transition hover:text-[#b98a52]"
                                    >
                                        Facebook Page
                                        <ArrowUpRight size={15} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl bg-[#18352d] p-7 md:p-10"
                    >
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9c3a6]">
                            {isBangla ? 'আমাদের কার্যপদ্ধতি' : 'Our Approach'}
                        </span>

                        <h3 className="mt-4 font-display text-3xl font-semibold leading-snug text-white">
                            {isBangla
                                ? 'দেখুন, বুঝুন, যাচাই করুন, তারপর সিদ্ধান্ত নিন।'
                                : 'Visit. Understand. Verify. Then Decide.'}
                        </h3>

                        <div className="mt-9 space-y-7">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;

                                return (
                                    <div key={index} className="flex gap-5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#d9c3a6]">
                                            <Icon size={22} />
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-white">
                                                {feature.title}
                                            </h4>

                                            <p className="mt-2 text-sm leading-7 text-white/65">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-10 border-t border-white/15 pt-6">
                            <p className="text-sm text-white/60">
                                {isBangla ? 'আমাদের প্রকল্প' : 'Our Project'}
                            </p>

                            <h4 className="mt-2 text-xl font-semibold text-white">
                                Megh Bari
                            </h4>

                            <p className="mt-2 flex items-center gap-2 text-sm text-white/65">
                                <MapPin size={16} className="shrink-0 text-[#d9c3a6]" />
                                {isBangla
                                    ? 'রাজানগর ইউনিয়ন, সিরাজদিখান, মুন্সিগঞ্জ'
                                    : 'Rajanagar Union, Sirajdikhan, Munshiganj'}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
};

export default AboutSection;
