export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-2xl">
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${light ? 'text-[#d9bb7a]' : 'text-emerald-700'}`}>{eyebrow}</p>
      <h2 className={`font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-[#172b23]'}`}>{title}</h2>
      {description && <p className={`mt-5 max-w-xl text-sm leading-7 sm:text-base ${light ? 'text-white/65' : 'text-slate-500'}`}>{description}</p>}
    </div>
  )
}
