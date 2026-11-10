
import {
  Building2,
  Compass,
  Handshake,
  Leaf
} from 'lucide-react';

import useLanguage from '../../hooks/useLanguage';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import AnimatedSection from '../common/AnimatedSection';

const features = [
  {
    icon: Compass,
    en: 'Thoughtful Planning',
    bn: 'পরিকল্পিত উন্নয়ন',
    descEn: 'A considered approach to location and community planning.',
    descBn: 'লোকেশন ও কমিউনিটি পরিকল্পনায় সচেতন দৃষ্টিভঙ্গি।'
  },
  {
    icon: Building2,
    en: 'Clear Information',
    bn: 'স্বচ্ছ তথ্য',
    descEn: 'Understand project details before making a decision.',
    descBn: 'সিদ্ধান্ত নেওয়ার আগে প্রকল্প সম্পর্কে বিস্তারিত জানুন।'
  },
  {
    icon: Handshake,
    en: 'Personal Guidance',
    bn: 'ব্যক্তিগত পরামর্শ',
    descEn: 'Our team can guide you through the enquiry process.',
    descBn: 'আপনার প্রয়োজন অনুযায়ী আমাদের টিমের পরামর্শ নিন।'
  },
  {
    icon: Leaf,
    en: 'Future-focused Spaces',
    bn: 'আগামীর উপযোগী পরিবেশ',
    descEn: 'Explore places with room for your plans to take shape.',
    descBn: 'নিজের পরিকল্পনা বাস্তবায়নের সম্ভাবনাময় জায়গা খুঁজুন।'
  }
];

const TrustSection = () => {
  const { language } = useLanguage();

  const isBangla = language === 'bn';

  return (
    <section
      id="about"
      className="bg-white py-20 sm:py-24 md:py-28"
    >
      <Container>

        {/* Section Heading */}
        <AnimatedSection>
          <SectionHeading
            align="center"
            eyebrow={
              isBangla
                ? 'কেন মেঘ বাড়ি'
                : 'The Megh Bari Approach'
            }
            title={
              isBangla
                ? 'বিশ্বাস ও পরিকল্পনায় গড়ে উঠুক আগামীর ঠিকানা'
                : 'A Considered Approach to Your Next Chapter'
            }
            description={
              isBangla
                ? 'জমি কেনার সিদ্ধান্তে সঠিক তথ্য, পরিষ্কার যোগাযোগ এবং পরিকল্পনা গুরুত্বপূর্ণ।'
                : 'Choosing land is an important decision. We believe it should begin with useful information and thoughtful guidance.'
            }
          />
        </AnimatedSection>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <AnimatedSection
                key={feature.en}
                delay={index * 0.08}
              >
                <div className="group h-full border-t border-[#e8e5dc] pt-7 transition-all duration-300 hover:border-[#18352d]">

                  {/* Icon */}
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-xl bg-[#f5eee4] text-[#b98a52] transition-all duration-300 group-hover:bg-[#18352d] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold text-[#18352d] transition-colors duration-300 group-hover:text-[#245344]">
                    {isBangla
                      ? feature.bn
                      : feature.en}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-7 text-[#5f5549]">
                    {isBangla
                      ? feature.descBn
                      : feature.descEn}
                  </p>

                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

export default TrustSection;
