
import {
  ArrowRight,
  CalendarDays
} from 'lucide-react';

import { Link } from 'react-router-dom';

import useLanguage from '../../hooks/useLanguage';

import Container from '../common/Container';

const VisitCTA = () => {

  const { language } = useLanguage();

  const isBangla = language === 'bn';

  return (
    <section className="bg-[#f7f6f1] py-20">

      <Container>

        <div className="
          relative
          overflow-hidden
          rounded-3xl
          bg-[#d9c3a6]
          px-7
          py-12
          sm:px-12
          lg:px-16
        ">

          <div className="
            absolute
            -right-20
            -top-28
            h-80
            w-80
            rounded-full
            border-[50px]
            border-white/20
          " />

          <div className="
            relative
            z-10
            flex
            flex-col
            justify-between
            gap-8
            lg:flex-row
            lg:items-center
          ">

            <div className="max-w-2xl">

              <p className="
                mb-3
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#715234]
              ">
                {isBangla ? 'সরাসরি দেখে নিন' : 'See It for Yourself'}
              </p>

              <h2 className="
                font-display
                text-3xl
                font-semibold
                leading-tight
                text-[#17382f]
                sm:text-4xl
              ">
                {isBangla
                  ? 'আপনার পছন্দের প্রকল্পটি ঘুরে দেখুন'
                  : 'Visit a Project and Explore the Possibilities.'}
              </h2>

              <p className="
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-[#18352d]
              ">
                {isBangla
                  ? 'সাইট ভিজিটের সময় ও প্রয়োজনীয় তথ্য জানতে আমাদের সঙ্গে যোগাযোগ করুন।'
                  : 'Get in touch with our team to discuss a suitable time and the details of your visit.'}
              </p>

            </div>

            <Link
              to="/book-site-visit"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#18352d]
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-[#245344]
                hover:shadow-lg
              "
            >
              <CalendarDays size={17} />

              {isBangla ? 'ভিজিটের অনুরোধ' : 'Request a Visit'}

              <ArrowRight size={16} />

            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default VisitCTA;
