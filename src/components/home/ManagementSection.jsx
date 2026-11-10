
import { motion } from 'framer-motion';
import { ArrowRight, Quote, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

import management from '../../data/management';
import useLanguage from '../../hooks/useLanguage';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

const ManagementSection = () => {
    const { language } = useLanguage();
    const isBangla = language === 'bn';

    const fadeUp = {
        hidden: { opacity: 0, y: 35 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: 'easeOut' }
        }
    };

    return (
        <section className="overflow-hidden bg-white py-20 sm:py-24 md:py-28">
            <Container>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-14"
                >
                    <SectionHeading
                        eyebrow={
                            isBangla ? 'নেতৃত্বের বার্তা' : 'LEADERSHIP MESSAGES'
                        }
                        title={
                            isBangla
                                ? 'আমাদের নেতৃত্ব, আমাদের অঙ্গীকার'
                                : 'Leadership That Values Transparency'
                        }
                        description={
                            isBangla
                                ? 'মেঘ বাড়ির লক্ষ্য, কাজের নীতি এবং গ্রাহকদের প্রতি আমাদের অঙ্গীকার সম্পর্কে জানুন আমাদের নেতৃত্বের বক্তব্য থেকে।'
                                : 'Discover the values, vision and commitment behind Megh Bari through messages from our leadership.'
                        }
                    />
                </motion.div>

                <div className="space-y-10 md:space-y-14">

                    {management.map((person, index) => (
                        <motion.article
                            key={person.id}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ delay: index * 0.1 }}
                            className="group grid overflow-hidden rounded-[28px] border border-[#eee9e0] bg-[#f7f6f1] shadow-sm transition-all duration-500 hover:shadow-xl lg:grid-cols-[340px_1fr]"
                        >

                            {/* Profile */}
                            <div className="relative min-h-[360px] overflow-hidden bg-[#18352d] sm:min-h-[440px]">

                                {person.image ? (
                                    <img
                                        src={person.image}
                                        alt={isBangla ? person.nameBn : person.name}
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-white/50">
                                        <UserRound size={100} strokeWidth={1} />
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102b25] via-[#102b25]/10 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                                    <span className="mb-3 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                                        {isBangla ? person.roleBn : person.role}
                                    </span>

                                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                                        {isBangla ? person.nameBn : person.name}
                                    </h3>

                                    <div className="mt-4 h-1 w-14 rounded-full bg-[#b98a52]" />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="relative p-6 sm:p-9 lg:p-12">

                                <Quote
                                    size={48}
                                    strokeWidth={1}
                                    className="absolute right-7 top-7 text-[#b98a52]/20 sm:right-10 sm:top-10"
                                />

                                <div className="relative z-10">

                                    <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#b98a52]">
                                        {isBangla
                                            ? `${person.roleBn} এর বক্তব্য`
                                            : `MESSAGE FROM THE ${person.role.toUpperCase()}`}
                                    </p>

                                    <div className="space-y-5 text-sm leading-8 text-[#5f5549] sm:text-[15px] sm:leading-[2.1]">

                                        {(isBangla
                                            ? person.paragraphsBn
                                            : person.paragraphs
                                        ).map((paragraph, paragraphIndex) => (
                                            <motion.p
                                                key={paragraphIndex}
                                                initial={{ opacity: 0, y: 12 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: paragraphIndex * 0.08
                                                }}
                                            >
                                                {paragraph}
                                            </motion.p>
                                        ))}

                                    </div>

                                    <div className="mt-8 border-t border-[#e6dfd3] pt-7">
                                        <Link
                                            to="/book-site-visit"
                                            className="group/link inline-flex items-center gap-3 rounded-full bg-[#18352d] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#245344]"
                                        >
                                            {isBangla
                                                ? 'অফিস ভিজিট বুক করুন'
                                                : 'Book an Office Visit'}

                                            <ArrowRight
                                                size={17}
                                                className="transition-transform duration-300 group-hover/link:translate-x-1"
                                            />
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </motion.article>
                    ))}

                </div>
            </Container>
        </section>
    );
};

export default ManagementSection;
