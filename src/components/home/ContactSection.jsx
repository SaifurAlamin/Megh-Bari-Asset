
import {
    MapPin,
    Phone,
    Headset,
    MessageCircle,
    Mail,
    FileText,
    ArrowUpRight,
    ExternalLink
} from 'lucide-react';

import { motion } from 'framer-motion';

import useLanguage from '../../hooks/useLanguage';
import Container from '../common/Container';

const ContactSection = () => {
    const { language } = useLanguage();
    const isBangla = language === 'bn';

    const mapUrl =
        'https://www.google.com/maps?cid=15951255431176637794&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF';

    const contactItems = [
        {
            icon: Phone,
            title: isBangla ? 'অফিস' : 'Office',
            value: '02-4712-0813',
            link: 'tel:0247120813'
        },
        {
            icon: Headset,
            title: isBangla ? '২৪/৭ হটলাইন' : '24/7 Hotline',
            value: '01321-178111',
            link: 'tel:01321178111'
        },
        {
            icon: MessageCircle,
            title: isBangla ? 'হোয়াটসঅ্যাপ' : 'WhatsApp',
            value: '01321-178111',
            link: 'https://wa.me/8801321178111'
        },
        {
            icon: Mail,
            title: isBangla ? 'ইমেইল' : 'Email',
            value: 'meghbariasset@gmail.com',
            link: 'mailto:meghbariasset@gmail.com'
        }
    ];

    return (
        <section id="contact" className="bg-[#f7f6f1] py-20 md:py-24">
            <Container>

                {/* 1. Heading */}
                <div className="mb-10 max-w-2xl">
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#b98a52]"
                    >
                        {isBangla ? 'যোগাযোগ করুন' : 'Get In Touch'}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-3xl font-semibold leading-tight text-[#18352d] md:text-5xl"
                    >
                        {isBangla
                            ? 'আমাদের সাথে যোগাযোগ করুন'
                            : 'We Are Here to Help You'}
                    </motion.h2>

                    <p className="mt-5 leading-7 text-gray-600">
                        {isBangla
                            ? 'প্রকল্প সম্পর্কে জানতে, সরাসরি কথা বলতে অথবা আমাদের কার্যালয়ে ভিজিট করতে যোগাযোগ করুন।'
                            : 'Have questions about our project? Get in touch with our team or visit our office for more information.'}
                    </p>
                </div>

                {/* 2. Company Brochure */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 flex flex-col justify-between gap-5 rounded-2xl border border-[#e8e4da] bg-white p-6 sm:flex-row sm:items-center md:p-8"
                >
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f7f6f1] text-[#b98a52]">
                            <FileText size={24} />
                        </div>

                        <div>
                            <h3 className="font-semibold text-[#18352d]">
                                {isBangla ? 'কোম্পানি ব্রোশিওর' : 'Company Brochure'}
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                {isBangla
                                    ? 'আমাদের ব্রোশিওর দেখে কোম্পানি ও প্রকল্প সম্পর্কে বিস্তারিত জানুন।'
                                    : 'Explore our company brochure to learn more about our company and project.'}
                            </p>
                        </div>
                    </div>

                    <a
                        href="/Brochure.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#18352d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#245344]"
                    >
                        {isBangla ? 'ব্রোশিওর দেখুন' : 'View Brochure'}
                        <ArrowUpRight size={17} />
                    </a>
                </motion.div>

                {/* 3. Office Address + Contact Information */}
                <div className="grid gap-6 lg:grid-cols-2">

                    {/* Office Address */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl bg-[#18352d] p-7 text-white md:p-9"
                    >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#d9c3a6]">
                            <MapPin size={23} />
                        </div>

                        <h3 className="text-2xl font-semibold">
                            {isBangla ? 'মতিঝিল কার্যালয়' : 'Motijheel Office'}
                        </h3>

                        <p className="mt-4 max-w-md leading-8 text-white/75">
                            {isBangla
                                ? '৮২, মতিঝিল সি/এ, আলহাজ টাওয়ার, ৭ম তলা, ঢাকা-১০০০'
                                : '82, Motijheel C/A, Al Haj Tower, Level 7, Dhaka-1000, Bangladesh'}
                        </p>

                        <a
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#18352d]"
                        >
                            <MapPin size={17} />
                            {isBangla ? 'গুগল ম্যাপে দেখুন' : 'View on Google Maps'}
                            <ExternalLink size={15} />
                        </a>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="rounded-2xl border border-[#e8e4da] bg-white p-7 md:p-9"
                    >
                        <h3 className="mb-7 text-2xl font-semibold text-[#18352d]">
                            {isBangla ? 'যোগাযোগের তথ্য' : 'Contact Information'}
                        </h3>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {contactItems.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={index}
                                        href={item.link}
                                        target={item.link.startsWith('https') ? '_blank' : undefined}
                                        rel={item.link.startsWith('https') ? 'noopener noreferrer' : undefined}
                                        className="group flex items-start gap-4"
                                    >
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f7f6f1] text-[#b98a52] transition group-hover:bg-[#18352d] group-hover:text-white">
                                            <Icon size={20} />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-sm text-gray-500">
                                                {item.title}
                                            </p>

                                            <p className="mt-1 break-all font-medium text-[#18352d] transition group-hover:text-[#245344]">
                                                {item.value}
                                            </p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* 4. Google Maps */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 overflow-hidden rounded-2xl border border-[#e8e4da] bg-white shadow-sm"
                >
                    <div className="flex flex-col justify-between gap-3 p-6 md:flex-row md:items-center md:px-8">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b98a52]">
                                {isBangla ? 'আমাদের ঠিকানা' : 'Find Us'}
                            </span>

                            <h3 className="mt-2 text-xl font-semibold text-[#18352d] md:text-2xl">
                                {isBangla ? 'ম্যাপে আমাদের অবস্থান' : 'Find Our Office on Map'}
                            </h3>
                        </div>

                        <a
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#18352d] transition hover:text-[#245344]"
                        >
                            {isBangla ? 'বড় করে দেখুন' : 'Open in Google Maps'}
                            <ExternalLink size={16} />
                        </a>
                    </div>

                    <div className="h-[320px] w-full md:h-[430px]">
                        <iframe
                            title="Megh Bari Asset Limited Office Location"
                            src="https://www.google.com/maps?output=embed&cid=15951255431176637794"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </motion.div>

            </Container>
        </section>
    );
};

export default ContactSection;
