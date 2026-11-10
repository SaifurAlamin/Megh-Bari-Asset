
import {
    MapPin,
    Navigation,
    ExternalLink,
    MapPinned
} from 'lucide-react';

import { motion } from 'framer-motion';

import Container from '../common/Container';
import useLanguage from '../../hooks/useLanguage';

const ProjectLocation = ({ project }) => {
    const { language } = useLanguage();
    const isBangla = language === 'bn';

    if (!project) return null;

    const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
        project.mapQuery
    )}&z=15&output=embed`;

    const isUpcoming = project.status === 'Upcoming';

    return (
        <section className="bg-white py-20 sm:py-24">
            <Container>

                {/* Heading */}
                <div className="mb-12">

                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b98a52]">
                        {isBangla ? 'প্রকল্পের অবস্থান' : 'Project Location'}
                    </p>

                    <h2 className="font-display text-3xl font-semibold text-[#18352d] sm:text-4xl">
                        {isBangla
                            ? `${project.nameBn} কোথায় অবস্থিত?`
                            : `Where Is ${project.name} Located?`}
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5549] sm:text-base">
                        {isUpcoming
                            ? (
                                isBangla
                                    ? 'এই প্রকল্পটি আসন্ন। প্রকল্পের নির্দিষ্ট অবস্থান ও বিস্তারিত তথ্য পরবর্তীতে জানানো হবে।'
                                    : 'This project is upcoming. The confirmed project location and further details will be announced later.'
                            )
                            : (
                                isBangla
                                    ? 'প্রকল্পের অবস্থান সম্পর্কে জানুন এবং গুগল ম্যাপে এলাকা দেখে নিন।'
                                    : 'Explore the project area and view its location on Google Maps.'
                            )}
                    </p>

                </div>

                {/* Details + Map */}
                <div className="grid overflow-hidden rounded-3xl border border-[#e8e4d9] bg-[#f7f6f1] lg:grid-cols-[0.85fr_1.5fr]">

                    {/* Left: Location Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center p-7 sm:p-10 lg:p-12"
                    >

                        <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18352d] text-[#d9b783]">
                            <MapPinned size={27} />
                        </div>

                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b98a52]">
                            {isBangla ? 'প্রকল্প এলাকা' : 'Project Area'}
                        </span>

                        <h3 className="mt-3 font-display text-2xl font-semibold text-[#18352d] sm:text-3xl">
                            {isBangla ? project.nameBn : project.name}
                        </h3>

                        <div className="mt-5 flex items-start gap-3">

                            <MapPin
                                size={20}
                                className="mt-1 shrink-0 text-[#b98a52]"
                            />

                            <p className="text-sm leading-7 text-[#5f5549]">
                                {isBangla
                                    ? project.locationBn
                                    : project.location}
                            </p>

                        </div>

                        <div className="my-8 h-px bg-[#e4ded2]" />

                        {/* Project Status */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#8b8174]">
                                {isBangla ? 'প্রকল্পের অবস্থা' : 'Project Status'}
                            </p>

                            <span
                                className={`mt-3 inline-flex rounded-full px-4 py-2 text-xs font-bold ${isUpcoming
                                        ? 'bg-amber-100 text-amber-800'
                                        : 'bg-green-100 text-green-800'
                                    }`}
                            >
                                {isBangla
                                    ? project.statusBn
                                    : project.status}
                            </span>
                        </div>

                        {/* Location Note */}
                        <div className="mt-7 rounded-xl border border-[#e8e0d2] bg-white p-4">

                            <p className="text-sm leading-7 text-[#5f5549]">
                                {isBangla
                                    ? project.mapNoteBn
                                    : project.mapNote}
                            </p>

                        </div>

                        {/* Google Maps Button */}
                        <a
                            href={project.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex w-fit items-center justify-center gap-3 rounded-full bg-[#18352d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#245344]"
                        >
                            <Navigation size={17} />

                            {isBangla
                                ? 'গুগল ম্যাপে দেখুন'
                                : 'Open Google Maps'}

                            <ExternalLink size={15} />
                        </a>

                    </motion.div>

                    {/* Right: Google Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="min-h-[350px] bg-[#e9e6dc] lg:min-h-[600px]"
                    >

                        <iframe
                            title={`${project.name} location map`}
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            className="min-h-[350px] border-0 lg:min-h-[600px]"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </motion.div>

                </div>

            </Container>
        </section>
    );
};

export default ProjectLocation;
