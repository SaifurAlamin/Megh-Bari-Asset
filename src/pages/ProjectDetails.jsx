
import { Link, useParams } from 'react-router-dom';

import {
    ArrowLeft,
    ArrowRight,
    MapPin,
    Building2,
    Trees,
    ShieldCheck,
    Car,
    Phone,
    CalendarDays,
    CheckCircle2
} from 'lucide-react';

import { motion } from 'framer-motion';

import projects from '../data/projects';
import useLanguage from '../hooks/useLanguage';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import Container from '../components/common/Container';

import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectLocation from '../components/projects/ProjectLocation';
const ProjectDetails = () => {
    const { projectId } = useParams();
    const { language } = useLanguage();

    const isBangla = language === 'bn';

    const project = projects.find(
        (item) => item.id === projectId
    );

    const amenities = [
        {
            icon: Trees,
            title: isBangla ? 'খোলামেলা পরিবেশ' : 'Open Environment',
            description: isBangla
                ? 'প্রকল্পের পরিবেশ ও খোলা জায়গা সম্পর্কে বিস্তারিত জানুন।'
                : 'Explore the available open spaces and surroundings.'
        },
        {
            icon: Building2,
            title: isBangla ? 'পরিকল্পিত প্রকল্প' : 'Planned Development',
            description: isBangla
                ? 'প্রকল্পের পরিকল্পনা ও বিন্যাস সম্পর্কে জানুন।'
                : 'Learn about the project layout and planning.'
        },
        {
            icon: ShieldCheck,
            title: isBangla ? 'প্রকল্পের তথ্য' : 'Project Information',
            description: isBangla
                ? 'প্রকল্পের প্রয়োজনীয় তথ্য সরাসরি জেনে নিন।'
                : 'Get accurate project information from our team.'
        },
        {
            icon: Car,
            title: isBangla ? 'যোগাযোগ ব্যবস্থা' : 'Connectivity',
            description: isBangla
                ? 'প্রকল্পে যাতায়াতের ব্যবস্থা সম্পর্কে জানুন।'
                : 'Ask our team about access and transportation.'
        }
    ];

    if (!project) {
        return (
            <>  <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#f7f6f1] px-5 text-center">

                <h1 className="font-display text-5xl font-bold text-[#18352d]">
                    404
                </h1>

                <p className="mt-4 text-slate-600">
                    {isBangla
                        ? 'দুঃখিত, প্রকল্পটি খুঁজে পাওয়া যায়নি।'
                        : 'Sorry, the requested project could not be found.'}
                </p>

                <Link
                    to="/#projects"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#18352d] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#b98a52]"
                >
                    <ArrowLeft size={16} />

                    {isBangla ? 'প্রকল্পসমূহ দেখুন' : 'Back to Projects'}
                </Link>

            </div>

                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />

            <main className="bg-[#f7f6f1]">

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-[#18352d] py-20 text-white sm:py-28">

                    <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#b98a52]/20 blur-3xl" />

                    <Container>

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10"
                        >

                            <Link
                                to="/#projects"
                                className="mb-10 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                            >
                                <ArrowLeft size={16} />

                                {isBangla ? 'সকল প্রকল্প' : 'All Projects'}
                            </Link>

                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#d9b783]">
                                {isBangla ? 'আমাদের প্রকল্প' : 'Our Development'}
                            </p>

                            <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                                {isBangla ? project.nameBn : project.name}
                            </h1>

                            <p className="mt-6 flex items-center gap-2 text-sm text-white/75 sm:text-base">

                                <MapPin size={18} className="shrink-0 text-[#d9b783]" />

                                {isBangla
                                    ? project.locationBn
                                    : project.location}

                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">

                                <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-medium backdrop-blur-md">
                                    {isBangla
                                        ? (project.typeBn || 'আবাসিক প্রকল্প')
                                        : project.type}
                                </span>

                                <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-medium backdrop-blur-md">
                                    {isBangla
                                        ? project.statusBn
                                        : project.status}
                                </span>

                            </div>

                        </motion.div>

                    </Container>
                </section>

                {/* Project Gallery */}
                <section className="py-16 sm:py-20">

                    <Container>

                        <ProjectGallery
                            key={project.id}
                            project={project}
                            isBangla={isBangla}
                        />

                    </Container>

                </section>

                {/* Overview */}
                <section className="pb-16 sm:pb-20">

                    <Container>

                        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">

                            <div>

                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b98a52]">
                                    {isBangla ? 'প্রকল্প পরিচিতি' : 'Project Overview'}
                                </p>

                                <h2 className="font-display text-3xl font-semibold leading-tight text-[#18352d] sm:text-4xl">
                                    {isBangla
                                        ? 'আপনার আগামী দিনের ঠিকানা সম্পর্কে জানুন'
                                        : 'Discover More About Your Future Address'}
                                </h2>

                                <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
                                    {isBangla
                                        ? project.descriptionBn
                                        : project.description}
                                </p>

                                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                                    {isBangla
                                        ? 'প্রকল্পের জমির পরিমাণ, মূল্য, কিস্তি, অনুমোদন এবং অন্যান্য বিস্তারিত তথ্য জানতে আমাদের সঙ্গে যোগাযোগ করুন।'
                                        : 'Contact our team to learn about plot sizes, pricing, payment plans, approvals and other project-specific information.'}
                                </p>

                            </div>

                            {/* Project Information Card */}
                            <div className="rounded-3xl border border-[#e8e4d9] bg-white p-7 shadow-[0_15px_50px_rgba(22,49,40,0.04)]">

                                <h3 className="font-display text-xl font-semibold text-[#18352d]">
                                    {isBangla ? 'প্রকল্পের তথ্য' : 'Project Information'}
                                </h3>

                                <div className="mt-6 space-y-5">

                                    <div className="flex items-start gap-4">

                                        <div className="rounded-xl bg-[#f7f6f1] p-3 text-[#b98a52]">
                                            <MapPin size={20} />
                                        </div>

                                        <div>
                                            <p className="text-xs text-slate-400">
                                                {isBangla ? 'অবস্থান' : 'Location'}
                                            </p>

                                            <p className="mt-1 text-sm font-semibold leading-6 text-[#18352d]">
                                                {isBangla
                                                    ? project.locationBn
                                                    : project.location}
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-start gap-4">

                                        <div className="rounded-xl bg-[#f7f6f1] p-3 text-[#b98a52]">
                                            <Building2 size={20} />
                                        </div>

                                        <div>
                                            <p className="text-xs text-slate-400">
                                                {isBangla ? 'প্রকল্পের ধরন' : 'Project Type'}
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#18352d]">
                                                {isBangla
                                                    ? (project.typeBn || 'আবাসিক প্রকল্প')
                                                    : project.type}
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-start gap-4">

                                        <div className="rounded-xl bg-[#f7f6f1] p-3 text-[#b98a52]">
                                            <CheckCircle2 size={20} />
                                        </div>

                                        <div>
                                            <p className="text-xs text-slate-400">
                                                {isBangla ? 'প্রকল্পের অবস্থা' : 'Project Status'}
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#18352d]">
                                                {isBangla
                                                    ? project.statusBn
                                                    : project.status}
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                <Link
                                    to="/#contact"
                                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#18352d] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#b98a52]"
                                >
                                    {isBangla ? 'যোগাযোগ করুন' : 'Contact Us'}

                                    <ArrowRight size={17} />
                                </Link>

                            </div>

                        </div>

                    </Container>

                </section>

                {/* Features */}
                <section className="bg-white py-20 sm:py-24">

                    <Container>

                        <div className="mx-auto mb-12 max-w-2xl text-center">

                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b98a52]">
                                {isBangla ? 'প্রকল্পের বৈশিষ্ট্য' : 'Project Highlights'}
                            </p>

                            <h2 className="font-display text-3xl font-semibold text-[#18352d] sm:text-4xl">
                                {isBangla
                                    ? 'যেসব বিষয় জানা গুরুত্বপূর্ণ'
                                    : 'What You Should Know'}
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-slate-500">
                                {isBangla
                                    ? 'প্রকল্পের সুবিধা ও বিস্তারিত তথ্য আমাদের টিমের কাছ থেকে নিশ্চিত করুন।'
                                    : 'Get accurate information about project facilities and available features from our team.'}
                            </p>

                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                            {amenities.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.45,
                                            delay: index * 0.1
                                        }}
                                        className="rounded-2xl border border-[#e8e4d9] bg-[#f7f6f1] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                    >

                                        <div className="mb-5 inline-flex rounded-2xl bg-[#18352d] p-4 text-[#d9b783]">
                                            <Icon size={24} />
                                        </div>

                                        <h3 className="font-display text-lg font-semibold text-[#18352d]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-500">
                                            {item.description}
                                        </p>

                                    </motion.div>
                                );
                            })}

                        </div>

                    </Container>

                </section>
                {/* Project Location */}
                <ProjectLocation project={project} />
                {/* CTA */}
                <section className="bg-[#f7f6f1] py-20 sm:py-24">

                    <Container>

                        <div className="relative overflow-hidden rounded-3xl bg-[#18352d] px-7 py-14 text-center text-white sm:px-14 sm:py-20">

                            <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#b98a52]/20 blur-3xl" />

                            <div className="relative z-10 mx-auto max-w-2xl">

                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#d9b783]">
                                    {isBangla ? 'আপনার পরবর্তী পদক্ষেপ' : 'Your Next Step'}
                                </p>

                                <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                                    {isBangla
                                        ? 'প্রকল্পটি সরাসরি ঘুরে দেখতে চান?'
                                        : 'Would You Like to Explore This Project?'}
                                </h2>

                                <p className="mt-5 text-sm leading-7 text-white/70">
                                    {isBangla
                                        ? 'প্রকল্প সম্পর্কে আরও জানতে অথবা সাইট ভিজিটের জন্য আমাদের সঙ্গে যোগাযোগ করুন।'
                                        : 'Contact our team to learn more or arrange a visit to the project location.'}
                                </p>

                                <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

                                    <Link
                                        to="/#contact"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b98a52] px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#18352d]"
                                    >
                                        <CalendarDays size={17} />

                                        {isBangla ? 'সাইট ভিজিট বুক করুন' : 'Book a Site Visit'}
                                    </Link>

                                    <Link
                                        to="/#contact"
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#18352d]"
                                    >
                                        <Phone size={17} />

                                        {isBangla ? 'যোগাযোগ করুন' : 'Get in Touch'}
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </Container>

                </section>

            </main>
        </>
    );
};

export default ProjectDetails;
