
import { useEffect, useState } from 'react';

import {
    X,
    Play,
    ArrowUpRight,
    Image as ImageIcon
} from 'lucide-react';

import { AnimatePresence, motion } from 'framer-motion';

import galleryItems from '../../data/gallery';

import useLanguage from '../../hooks/useLanguage';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

const GallerySection = () => {
    const { language } = useLanguage();

    const isBangla = language === 'bn';

    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);

    const categories = [
        {
            id: 'all',
            label: 'All',
            labelBn: 'সব'
        },
        {
            id: 'expo',
            label: 'Expo',
            labelBn: 'মেলা'
        },
        {
            id: 'office',
            label: 'Office',
            labelBn: 'অফিস'
        },
        {
            id: 'projects',
            label: 'Projects',
            labelBn: 'প্রকল্প'
        },
        {
            id: 'videos',
            label: 'Videos',
            labelBn: 'ভিডিও'
        }
    ];

    const filteredItems =
        activeCategory === 'all'
            ? galleryItems
            : galleryItems.filter(
                (item) => item.category === activeCategory
            );

    const closeLightbox = () => {
        setSelectedItem(null);
    };

    // Close modal with Escape key and prevent background scrolling.
    useEffect(() => {
        if (!selectedItem) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeLightbox();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [selectedItem]);

    return (
        <section
            id="gallery"
            className="bg-[#f7f6f1] py-20 sm:py-24 md:py-28"
        >
            <Container>

                {/* Section Heading */}
                <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">

                    <div>
                        <SectionHeading
                            eyebrow={
                                isBangla ? 'আমাদের গ্যালারি' : 'OUR GALLERY'
                            }
                            title={
                                isBangla
                                    ? 'মেঘ বাড়ির কিছু মুহূর্ত'
                                    : 'A Glimpse of Megh Bari'
                            }
                            description={
                                isBangla
                                    ? 'আমাদের অফিস, প্রকল্পের পরিবেশ এবং বিভিন্ন কার্যক্রমের কিছু ছবি ও ভিডিও দেখুন।'
                                    : 'Explore moments from our office, project locations and activities through photos and videos.'
                            }
                        />
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium text-[#5f5549]">
                        <ImageIcon size={18} className="text-[#b98a52]" />
                        <span>
                            {galleryItems.length}{' '}
                            {isBangla ? 'টি মিডিয়া' : 'Media Items'}
                        </span>
                    </div>

                </div>

                {/* Category Filters */}
                <div className="mb-9 flex flex-wrap items-center gap-2">

                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                                ? 'bg-[#18352d] text-white shadow-md'
                                : 'border border-[#e6e0d5] bg-white text-[#5f5549] hover:border-[#18352d] hover:text-[#18352d]'
                                }`}
                        >
                            {isBangla ? category.labelBn : category.label}
                        </button>
                    ))}

                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >

                    <AnimatePresence mode="popLayout">

                        {filteredItems.map((item, index) => (
                            <motion.button
                                layout
                                key={item.id}
                                type="button"
                                onClick={() => setSelectedItem(item)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.04
                                }}
                                className={`group relative block w-full overflow-hidden rounded-2xl bg-[#e9e5dc] text-left ${item.featured ? 'sm:row-span-1' : ''
                                    }`}
                            >

                                <div className="relative aspect-[4/3] h-full min-h-[230px] overflow-hidden">

                                    <img
                                        src={
                                            item.type === 'video'
                                                ? item.thumbnail
                                                : item.image
                                        }
                                        alt={
                                            isBangla ? item.titleBn : item.title
                                        }
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                                    {/* Video Icon */}
                                    {item.type === 'video' && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-white/20 text-white shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#18352d]">
                                                <Play size={23} fill="currentColor" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Bottom Content */}
                                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">

                                        <div>
                                            <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                                                {item.type === 'video'
                                                    ? isBangla
                                                        ? 'ভিডিও'
                                                        : 'VIDEO'
                                                    : item.category === 'office'
                                                        ? isBangla
                                                            ? 'অফিস'
                                                            : 'OFFICE'
                                                        : isBangla
                                                            ? 'প্রকল্প'
                                                            : 'PROJECT'}
                                            </span>

                                            <h3 className="text-lg font-semibold text-white">
                                                {isBangla ? item.titleBn : item.title}
                                            </h3>
                                        </div>

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#18352d] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                                            <ArrowUpRight size={19} />
                                        </div>

                                    </div>

                                </div>

                            </motion.button>
                        ))}

                    </AnimatePresence>

                </motion.div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <div className="py-16 text-center text-[#5f5549]">
                        {isBangla
                            ? 'এই ক্যাটাগরিতে এখনো কোনো ছবি বা ভিডিও নেই।'
                            : 'No gallery items found in this category.'}
                    </div>
                )}

            </Container>

            {/* Lightbox / Modal */}
            <AnimatePresence>

                {selectedItem && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >

                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={closeLightbox}
                            aria-label="Close gallery"
                            className="absolute right-4 top-4 z-[102] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-[#18352d] sm:right-8 sm:top-8"
                        >
                            <X size={24} />
                        </button>

                        {/* Media Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onClick={(event) => event.stopPropagation()}
                            className="relative flex max-h-[90vh] w-full max-w-6xl flex-col items-center"
                        >

                            {selectedItem.type === 'video' ? (
                                <video
                                    key={selectedItem.id}
                                    src={selectedItem.video}
                                    controls
                                    autoPlay
                                    playsInline
                                    className="max-h-[78vh] w-full rounded-xl bg-black object-contain"
                                />
                            ) : (
                                <img
                                    src={selectedItem.image}
                                    alt={
                                        isBangla
                                            ? selectedItem.titleBn
                                            : selectedItem.title
                                    }
                                    className="max-h-[78vh] w-full rounded-xl object-contain"
                                />
                            )}

                            <div className="mt-5 text-center">
                                <h3 className="text-lg font-semibold text-white sm:text-xl">
                                    {isBangla
                                        ? selectedItem.titleBn
                                        : selectedItem.title}
                                </h3>

                                <p className="mt-1 text-sm text-white/60">
                                    {isBangla
                                        ? 'বন্ধ করতে বাইরে ক্লিক করুন অথবা Esc চাপুন'
                                        : 'Click outside or press Esc to close'}
                                </p>
                            </div>

                        </motion.div>

                    </motion.div>
                )}

            </AnimatePresence>

        </section>
    );
};

export default GallerySection;
