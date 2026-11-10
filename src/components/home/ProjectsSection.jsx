
import {
  ArrowUpRight,
  MapPin
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import projects from '../../data/projects';
import useLanguage from '../../hooks/useLanguage';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

const ProjectsSection = () => {
  const { language } = useLanguage();
  const isBangla = language === 'bn';

  return (
    <section
      id="projects"
      className="bg-[#f7f6f1] py-24 sm:py-28"
    >
      <Container>

        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <SectionHeading
            eyebrow={
              isBangla
                ? 'আমাদের প্রকল্প'
                : 'Our Developments'
            }
            title={
              isBangla
                ? 'আপনার ভবিষ্যতের জন্য সম্ভাবনাময় ঠিকানা'
                : 'Places Shaped Around Possibility'
            }
            description={
              isBangla
                ? 'আমাদের চলমান ও আসন্ন প্রকল্পগুলো ঘুরে দেখুন এবং আপনার পছন্দের ঠিকানা সম্পর্কে জানুন।'
                : 'Explore our ongoing and upcoming developments and discover a location that fits your future plans.'
            }
          />

        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {projects.map((project, index) => {
            const isUpcoming = project.status === 'Upcoming';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12
                }}
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_15px_50px_rgba(22,49,40,0.06)]"
              >

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">

                  <img
                    src={project.image}
                    alt={isBangla ? project.nameBn : project.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#234237]">
                    {isBangla ? 'মেঘ বাড়ি' : 'Megh Bari'}
                  </span>

                  {/* Project Status */}
                  <span
                    className={`absolute right-5 top-5 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wider ${isUpcoming
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-green-100 text-green-800'
                      }`}
                  >
                    {isBangla
                      ? project.statusBn
                      : project.status}
                  </span>

                </div>

                {/* Project Information */}
                <div className="p-7">

                  <p className="mb-3 flex items-center gap-2 text-xs font-medium text-slate-500">

                    <MapPin
                      size={14}
                      className="shrink-0 text-green-700"
                    />

                    {isBangla
                      ? project.locationBn
                      : project.location}

                  </p>

                  <h3 className="font-display text-2xl font-semibold text-[#18352d]">
                    {isBangla
                      ? project.nameBn
                      : project.name}
                  </h3>

                  <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">
                    {isBangla
                      ? project.descriptionBn
                      : project.description}
                  </p>

                  <Link
                    to={`/projects/${project.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-800 transition hover:text-green-600 group-hover:gap-3"
                  >
                    {isBangla
                      ? 'বিস্তারিত জানুন'
                      : 'Discover Project'}

                    <ArrowUpRight size={16} />
                  </Link>

                </div>

              </motion.article>
            );
          })}

        </div>

      </Container>
    </section>
  );
};

export default ProjectsSection;
