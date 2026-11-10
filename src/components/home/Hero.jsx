
import {
  ArrowRight,
  Play,
  MapPin,
  MoveDown,
  CheckCircle2,
  Calculator,
  CalendarDays
} from 'lucide-react';

import { motion } from 'framer-motion';

import useLanguage from '../../hooks/useLanguage';

import Container from '../common/Container';
import Button from '../common/Button';

const Hero = () => {
  const { language } = useLanguage();

  const isBangla = language === 'bn';

  const content = {
    en: {
      eyebrow: 'A place to grow',
      title: 'Find your place in a',
      highlight: 'better tomorrow.',
      description:
        'Discover thoughtfully planned land opportunities at Megh Bari. Explore the location, understand the details, and make your decision with confidence.',
      explore: 'Explore Our Projects',
      discover: 'Discover Megh Bari',
      calculator: 'Calculate Investment',
      visit: 'Book a Visit',
      location: 'Rajanagar, Sirajdikhan, Munshiganj',
      locationLabel: 'OUR PROJECT LOCATION',
      plotTitle: 'Plot Options',
      plotValue: '3 & 5',
      plotUnit: 'Katha',
      installmentTitle: 'Easy Instalments',
      installmentValue: '96',
      installmentUnit: 'Months',
      bookingTitle: 'Starting Booking',
      bookingValue: '৳10,000',
      bookingUnit: 'Per Katha',
      scroll: 'SCROLL TO EXPLORE',
      note: 'Visit. Understand. Verify. Then Decide.'
    },

    bn: {
      eyebrow: 'আপনার স্বপ্নের ঠিকানা',
      title: 'আগামীর জন্য খুঁজে নিন',
      highlight: 'আপনার নিজের ঠিকানা।',
      description:
        'মেঘ বাড়িতে পরিকল্পিত ভূমি কেনার সুযোগ সম্পর্কে জানুন। প্রকল্পের অবস্থান দেখুন, বিস্তারিত বুঝুন এবং সঠিক তথ্যের ভিত্তিতে সিদ্ধান্ত নিন।',
      explore: 'প্রকল্পগুলো দেখুন',
      discover: 'মেঘ বাড়ি সম্পর্কে জানুন',
      calculator: 'বিনিয়োগের হিসাব করুন',
      visit: 'ভিজিট বুক করুন',
      location: 'রাজানগর, সিরাজদিখান, মুন্সিগঞ্জ',
      locationLabel: 'আমাদের প্রকল্পের অবস্থান',
      plotTitle: 'প্লটের সাইজ',
      plotValue: '৩ ও ৫',
      plotUnit: 'কাঠা',
      installmentTitle: 'সর্বোচ্চ কিস্তি',
      installmentValue: '৯৬',
      installmentUnit: 'মাস',
      bookingTitle: 'বুকিং শুরু',
      bookingValue: '৳১০,০০০',
      bookingUnit: 'প্রতি কাঠায়',
      scroll: 'আরও দেখতে স্ক্রল করুন',
      note: 'দেখুন। বুঝুন। যাচাই করুন। তারপর সিদ্ধান্ত নিন।'
    }
  };

  const t = content[isBangla ? 'bn' : 'en'];

  const stats = [
    {
      title: t.plotTitle,
      value: t.plotValue,
      unit: t.plotUnit
    },
    {
      title: t.installmentTitle,
      value: t.installmentValue,
      unit: t.installmentUnit
    },
    {
      title: t.bookingTitle,
      value: t.bookingValue,
      unit: t.bookingUnit
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[780px]
        items-center
        overflow-hidden
        bg-[#102b25]
        pt-24
        sm:min-h-[820px]
        lg:min-h-[850px]
      "
    >

      {/* Background Image */}
      <div className="absolute inset-0">

        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=90"
          alt="Green countryside landscape"
          className="h-full w-full object-cover"
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#0b211c]/95
            via-[#102b25]/75
            to-[#102b25]/20
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#102b25]
            via-transparent
            to-black/10
          "
        />

      </div>

      {/* Decorative Circles */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/4
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-white/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          top-1/3
          h-[350px]
          w-[350px]
          rounded-full
          border
          border-white/10
        "
      />

      <Container className="relative z-10 py-20">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >

          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="
              mb-7
              flex
              items-center
              gap-3
              text-xs
              font-bold
              uppercase
              tracking-[0.28em]
              text-emerald-100
            "
          >
            <span className="h-px w-9 bg-[#d0a36c]" />
            {t.eyebrow}
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="
              max-w-4xl
              font-display
              text-5xl
              font-semibold
              leading-[1.12]
              text-white
              sm:text-6xl
              lg:text-7xl
              xl:text-[82px]
            "
          >
            {t.title}{' '}

            <span className="relative inline-block text-[#e2bd8d]">
              {t.highlight}

              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: 'easeOut'
                }}
                className="
                  absolute
                  -bottom-3
                  left-0
                  h-1
                  w-2/3
                  origin-left
                  rounded-full
                  bg-[#b98a52]
                "
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="
              mt-9
              max-w-2xl
              text-base
              leading-8
              text-white/75
              sm:text-lg
              sm:leading-9
            "
          >
            {t.description}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex items-center gap-3 text-sm text-white/80"
          >
            <div
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                border border-white/20
                bg-white/10
                text-[#e2bd8d]
              "
            >
              <MapPin size={17} />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e2bd8d]">
                {t.locationLabel}
              </p>

              <p className="mt-1 font-medium">
                {t.location}
              </p>
            </div>
          </motion.div>

          {/* Hero Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-3"
          >

            {/* Explore Projects */}
            <Button href="#projects">
              {t.explore}
              <ArrowRight size={17} />
            </Button>

            {/* Investment Calculator */}
            <a
              href="/investment-calculator"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border border-[#e2bd8d]
                bg-[#e2bd8d]
                px-5 py-3
                text-sm
                font-semibold
                text-[#18352d]
                transition-all
                duration-300
                hover:border-white
                hover:bg-white
              "
            >
              <Calculator size={17} />
              {t.calculator}
            </a>

            {/* Book a Visit */}
            <a
              href="/book-site-visit"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border border-white/40
                bg-white/10
                px-5 py-3
                text-sm
                font-semibold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-white
                hover:bg-white
                hover:text-[#18352d]
              "
            >
              <CalendarDays size={17} />
              {t.visit}
            </a>

            {/* Discover Megh Bari */}
            <a
              href="#about"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                px-3 py-3
                text-sm
                font-semibold
                text-white/80
                transition-all
                duration-300
                hover:text-white
              "
            >
              <span
                className="
                  grid h-8 w-8
                  place-items-center
                  rounded-full
                  bg-white/15
                "
              >
                <Play size={13} fill="currentColor" />
              </span>

              {t.discover}
            </a>

          </motion.div>

        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="
            mt-16
            grid
            grid-cols-1
            gap-3
            rounded-2xl
            border border-white/15
            bg-[#102b25]/70
            p-5
            shadow-2xl
            backdrop-blur-xl
            sm:grid-cols-3
            sm:gap-0
            sm:p-7
            lg:max-w-4xl
          "
        >

          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className={`
                flex items-center gap-4
                py-3
                sm:justify-center
                sm:py-1
                ${index !== 0 ? 'sm:border-l sm:border-white/15' : ''}
              `}
            >

              <div
                className="
                  flex h-12 w-12 shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-white/10
                  text-[#e2bd8d]
                "
              >
                <CheckCircle2 size={21} />
              </div>

              <div>
                <p className="text-xs text-white/60">
                  {stat.title}
                </p>

                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-white sm:text-3xl">
                    {stat.value}
                  </span>

                  <span className="text-xs font-medium text-[#e2bd8d]">
                    {stat.unit}
                  </span>
                </div>
              </div>

            </div>
          ))}

        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-between
            gap-4
          "
        >

          <p className="text-xs font-medium tracking-wide text-white/55">
            {t.note}
          </p>

          <a
            href="#projects"
            className="
              hidden
              items-center
              gap-2
              text-[10px]
              font-semibold
              tracking-[0.2em]
              text-white/60
              transition
              hover:text-white
              md:flex
            "
          >
            {t.scroll}
            <MoveDown size={15} />
          </a>

        </motion.div>

      </Container>

    </section>
  );
};

export default Hero;
