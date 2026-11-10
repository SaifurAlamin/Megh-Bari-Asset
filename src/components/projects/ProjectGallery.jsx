
import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

const ProjectGallery = ({ project, isBangla }) => {
    const images = project.gallery?.length
        ? project.gallery
        : [project.image];

    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="space-y-4">

            {/* Main Image */}
            <div className="group relative h-[300px] overflow-hidden rounded-3xl bg-slate-200 sm:h-[450px] lg:h-[520px]">

                <img
                    src={activeImage}
                    alt={isBangla ? project.nameBn : project.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                        {isBangla ? 'প্রকল্প গ্যালারি' : 'Project Gallery'}
                    </p>

                    <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                        {isBangla ? project.nameBn : project.name}
                    </h2>
                </div>

                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                    <ImageIcon size={15} />
                    {images.length} {isBangla ? 'টি ছবি' : 'Photos'}
                </div>

            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">

                    {images.map((image, index) => (
                        <button
                            key={`${image}-${index}`}
                            type="button"
                            onClick={() => setActiveImage(image)}
                            className={`h-24 overflow-hidden rounded-xl border-2 transition sm:h-28 ${activeImage === image
                                ? 'border-[#b98a52]'
                                : 'border-transparent opacity-70 hover:opacity-100'
                                }`}
                        >
                            <img
                                src={image}
                                alt={`${project.name} ${index + 1}`}
                                className="h-full w-full object-cover"
                            />
                        </button>
                    ))}

                </div>
            )}

            {images.length === 1 && (
                <p className="text-xs text-slate-400">
                    {isBangla
                        ? 'আরও প্রকল্পের ছবি শীঘ্রই যুক্ত করা হবে।'
                        : 'More official project photos can be added here.'}
                </p>
            )}

        </div>
    );
};

export default ProjectGallery;
