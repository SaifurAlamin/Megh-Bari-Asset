import { ArrowUpRight } from 'lucide-react';

import useLanguage from '../../hooks/useLanguage';

import Container from '../common/Container';
import { Link } from 'react-router-dom';

const Footer = () => {

  const { language } = useLanguage();

  const isBangla = language === 'bn';

  return (
    <footer
      id="contact"
      className="bg-[#102b25] pt-16 text-white"
    >

      <Container>

        <div className="
                    grid
                    gap-12
                    border-b
                    border-white/10
                    pb-14
                    md:grid-cols-[1.4fr_1fr_1fr]
                ">

          <div>

            <Link
              to="/"
              className="flex items-center"
            >
              <img
                src="/images/office/logo.png"
                alt="MEGH BARI"
                className="h-16 w-auto object-contain max-w-[150px]"
              />
            </Link>

            <p className="
                            mt-5
                            max-w-sm
                            text-sm
                            leading-7
                            text-white/55
                        ">
              {isBangla
                ? 'আপনার স্বপ্নের ঠিকানা খুঁজে পেতে আমাদের সঙ্গে থাকুন।'
                : 'Thoughtful places and possibilities for the future you imagine.'}
            </p>

          </div>

          <div>

            <h3 className="
                            mb-5
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-[#d2ad7d]
                        ">
              {isBangla ? 'দ্রুত লিংক' : 'Explore'}
            </h3>

            <div className="
                            flex
                            flex-col
                            gap-3
                            text-sm
                            text-white/65
                        ">

              <Link to="/home" className="hover:text-white">
                {isBangla ? 'হোম' : 'Home'}
              </Link>

              <Link to="/about" className="hover:text-white">
                {isBangla ? 'আমাদের সম্পর্কে' : 'About Us'}
              </Link>

              <Link to="/projects" className="hover:text-white">
                {isBangla ? 'প্রকল্পসমূহ' : 'Our Projects'}
              </Link>

            </div>

          </div>

          <div>

            <h3 className="
                            mb-5
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-[#d2ad7d]
                        ">
              {isBangla ? 'যোগাযোগ' : 'Get in Touch'}
            </h3>

            <p className="
                            text-sm
                            leading-7
                            text-white/65
                        ">
              {isBangla
                ? 'কোম্পানির সঠিক যোগাযোগের তথ্য এখানে যুক্ত করুন।'
                : 'Add verified company phone, email and office address here.'}
            </p>

            <a
              to="mailto:info@example.com"
              className="
                                mt-4
                                inline-flex
                                items-center
                                gap-2
                                text-sm
                                font-semibold
                                text-[#d2ad7d]
                            "
            >
              Email Our Team
              <ArrowUpRight size={15} />
            </a>

          </div>

        </div>

        <div className="
                    flex
                    flex-col
                    justify-between
                    gap-3
                    py-6
                    text-xs
                    text-white/40
                    sm:flex-row
                ">

          <p>
            © {new Date().getFullYear()} Megh Bari.
            {isBangla ? ' সর্বস্বত্ব সংরক্ষিত।' : ' All rights reserved.'}
          </p>

          <p>
            {isBangla
              ? 'সঠিক তথ্যের ভিত্তিতে সিদ্ধান্ত নিন।'
              : 'Make informed decisions.'}
          </p>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;