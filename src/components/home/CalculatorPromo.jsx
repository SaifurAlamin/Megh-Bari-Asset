
import { useState } from 'react';

import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

import { Link } from 'react-router-dom';

import useLanguage from '../../hooks/useLanguage';

import Container from '../common/Container';

const PRICE_PER_KATHA = 300000;
const DOWN_PAYMENT_PERCENT = 20;
const INSTALLMENT_MONTHS = 96;

const formatCurrency = (amount, isBangla) => {
  return new Intl.NumberFormat(isBangla ? 'bn-BD' : 'en-BD', {
    style: 'currency',
    currency: 'BDT',
    maximumFractionDigits: 0
  }).format(amount);
};

const CalculatorPromo = () => {
  const { language } = useLanguage();

  const isBangla = language === 'bn';

  const [plotSize, setPlotSize] = useState(3);

  const totalPrice = plotSize * PRICE_PER_KATHA;
  const downPayment = totalPrice * (DOWN_PAYMENT_PERCENT / 100);
  const remainingAmount = totalPrice - downPayment;
  const monthlyInstallment = remainingAmount / INSTALLMENT_MONTHS;

  return (
    <section className="overflow-hidden bg-[#17382f] py-20 sm:py-24">

      <Container>

        <div className="
          grid
          items-center
          gap-14
          lg:grid-cols-[1fr_0.85fr]
        ">

          {/* Left Content */}
          <div>

            <p className="
              mb-4
              text-xs
              font-bold
              uppercase
              tracking-[0.24em]
              text-emerald-200
            ">
              {isBangla ? 'পরিকল্পনা করুন' : 'Plan With Clarity'}
            </p>

            <h2 className="
              font-display
              text-4xl
              font-semibold
              leading-tight
              text-white
              sm:text-5xl
            ">
              {isBangla
                ? 'আপনার বিনিয়োগের হিসাব বুঝে নিন'
                : 'Make Your Investment Plan Easier to Understand.'}
            </h2>

            <p className="
              mt-6
              max-w-xl
              leading-8
              text-white/70
            ">
              {isBangla
                ? 'প্লটের পরিমাণ ও পেমেন্ট অপশন নির্বাচন করে সম্ভাব্য বিনিয়োগের হিসাব দেখুন। সিদ্ধান্ত নেওয়ার আগে বিস্তারিত তথ্য যাচাই করুন।'
                : 'Choose your preferred plot size and explore an estimated payment breakdown. Review the details before making a decision.'}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/investment-calculator"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#b98a52]
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-white
                  transition
                  duration-300
                  hover:bg-white
                  hover:text-[#17382f]
                "
              >
                {isBangla
                  ? 'সম্পূর্ণ ক্যালকুলেটর দেখুন'
                  : 'Open Full Calculator'}

                <ArrowRight size={17} />
              </Link>

            </div>

            <div className="mt-9 flex items-center gap-3">

              <CheckCircle2
                size={19}
                className="text-emerald-300"
              />

              <p className="text-sm text-white/60">
                {isBangla
                  ? 'হিসাবটি শুধুমাত্র উদাহরণ হিসেবে দেখানো হয়েছে।'
                  : 'This calculation is for illustration only.'}
              </p>

            </div>

          </div>

          {/* Interactive Calculator */}
          <div className="relative">

            <div className="
              absolute
              -inset-8
              rounded-full
              bg-[#b98a52]/10
              blur-3xl
            " />

            <div className="
              relative
              rounded-3xl
              border
              border-white/10
              bg-white/[0.07]
              p-6
              shadow-2xl
              backdrop-blur
              sm:p-8
            ">

              {/* Card Header */}
              <div className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                pb-6
              ">

                <div className="flex items-center gap-3 text-white">

                  <span className="
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-xl
                    bg-[#b98a52]
                  ">
                    <Calculator size={21} />
                  </span>

                  <div>
                    <p className="font-semibold">
                      {isBangla
                        ? 'বিনিয়োগ ক্যালকুলেটর'
                        : 'Investment Calculator'}
                    </p>

                    <p className="mt-1 text-xs text-white/45">
                      {isBangla
                        ? 'আপনার হিসাব তৈরি করুন'
                        : 'Build your estimate'}
                    </p>
                  </div>

                </div>

                <span className="
                  rounded-full
                  bg-emerald-300/10
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-widest
                  text-emerald-200
                ">
                  Live Preview
                </span>

              </div>

              {/* Plot Size Selection */}
              <div className="py-7">

                <div className="mb-4 flex items-center justify-between">

                  <label className="text-sm font-medium text-white/75">
                    {isBangla ? 'প্লটের পরিমাণ' : 'Select Plot Size'}
                  </label>

                  <span className="text-xs text-white/40">
                    {isBangla ? 'কাঠা' : 'Katha'}
                  </span>

                </div>

                <div className="grid grid-cols-2 gap-3">

                  {[3, 5].map((size) => (

                    <button
                      key={size}
                      type="button"
                      onClick={() => setPlotSize(size)}
                      className={`
                        rounded-xl
                        border
                        px-4
                        py-4
                        text-left
                        transition-all
                        duration-300
                        ${plotSize === size
                          ? 'border-[#d5b184] bg-[#b98a52]/20'
                          : 'border-white/10 bg-black/10 hover:border-white/30'
                        }
                      `}
                    >

                      <span className={`
                        block
                        text-2xl
                        font-bold
                        ${plotSize === size
                          ? 'text-[#e2bd8d]'
                          : 'text-white'
                        }
                      `}>
                        {isBangla
                          ? size === 3 ? '৩' : '৫'
                          : size}
                      </span>

                      <span className="mt-1 block text-xs text-white/50">
                        {isBangla ? 'কাঠা' : 'Katha'}
                      </span>

                    </button>

                  ))}

                </div>

              </div>

              {/* Price Details */}
              <div className="space-y-4 border-t border-white/10 pt-6">

                <div className="flex items-center justify-between gap-4">

                  <span className="text-sm text-white/55">
                    {isBangla ? 'প্রতি কাঠার মূল্য' : 'Price Per Katha'}
                  </span>

                  <span className="text-sm font-semibold text-white">
                    {formatCurrency(PRICE_PER_KATHA, isBangla)}
                  </span>

                </div>

                <div className="flex items-center justify-between gap-4">

                  <span className="text-sm text-white/55">
                    {isBangla ? 'ডাউন পেমেন্ট' : 'Down Payment'}
                    <span className="ml-1 text-[#d5b184]">
                      ({DOWN_PAYMENT_PERCENT}%)
                    </span>
                  </span>

                  <span className="text-sm font-semibold text-white">
                    {formatCurrency(downPayment, isBangla)}
                  </span>

                </div>

                <div className="flex items-center justify-between gap-4">

                  <span className="text-sm text-white/55">
                    {isBangla ? 'কিস্তির মেয়াদ' : 'Installment Period'}
                  </span>

                  <span className="text-sm font-semibold text-white">
                    {isBangla ? '৯৬ মাস' : '96 Months'}
                  </span>

                </div>

              </div>

              {/* Total Price */}
              <div className="
                mt-6
                rounded-2xl
                border
                border-[#d5b184]/20
                bg-[#b98a52]/10
                p-5
              ">

                <p className="text-xs font-medium text-white/55">
                  {isBangla ? 'মোট মূল্য' : 'Estimated Total Price'}
                </p>

                <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  {formatCurrency(totalPrice, isBangla)}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

                  <div>
                    <p className="text-xs text-white/50">
                      {isBangla
                        ? 'আনুমানিক মাসিক কিস্তি'
                        : 'Estimated Monthly Installment'}
                    </p>

                    <p className="mt-1 text-xl font-bold text-[#e2bd8d]">
                      {formatCurrency(monthlyInstallment, isBangla)}
                    </p>
                  </div>

                  <div className="
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-xl
                    bg-white/10
                    text-[#e2bd8d]
                  ">
                    <TrendingUp size={21} />
                  </div>

                </div>

              </div>

              {/* Disclaimer */}
              <p className="mt-5 text-[11px] leading-6 text-white/40">
                {isBangla
                  ? 'এটি একটি নমুনা হিসাব। প্রকৃত মূল্য, বুকিং মানি, পেমেন্ট শর্ত ও কিস্তি অফিস থেকে নিশ্চিত করুন।'
                  : 'Illustrative estimate only. Confirm actual plot prices, booking money, payment terms and instalments with the office.'}
              </p>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default CalculatorPromo;
