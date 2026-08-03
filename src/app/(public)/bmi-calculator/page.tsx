'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type BMICategory = {
  label: string;
  color: string;
  bg: string;
  suggestion: string;
};

const getBMICategory = (bmi: number): BMICategory => {
  if (bmi < 18.5) return {
    label: 'Underweight',
    color: '#60A5FA',
    bg: 'bg-blue-500/20',
    suggestion: 'Your BMI suggests you may be underweight. Focus on nutrient-rich foods and strength training to build healthy muscle mass. Our trainers can design a muscle-gain program tailored for you.',
  };
  if (bmi < 25) return {
    label: 'Normal Weight',
    color: '#4ADE80',
    bg: 'bg-green-500/20',
    suggestion: 'Great work! Your BMI is in the healthy range. Maintain your results with consistent training and a balanced diet. Consider joining our performance programs to push further.',
  };
  if (bmi < 30) return {
    label: 'Overweight',
    color: '#FACC15',
    bg: 'bg-yellow-500/20',
    suggestion: 'You are slightly overweight. A combination of cardio training and controlled nutrition can help you reach the healthy range. Our weight loss programs are designed for exactly this.',
  };
  if (bmi < 35) return {
    label: 'Obese',
    color: '#FB923C',
    bg: 'bg-orange-500/20',
    suggestion: 'Your BMI indicates obesity. With the right guidance, this is absolutely reversible. Our expert trainers and nutritionist will create a safe, effective plan to help you transform.',
  };
  return {
    label: 'Severely Obese',
    color: '#EF4444',
    bg: 'bg-red-500/20',
    suggestion: 'Please consult with a healthcare provider alongside starting your fitness journey. Our certified trainers are experienced in working with high BMI clients safely and effectively.',
  };
};

const getIdealWeightRange = (height: number) => {
  const h = height / 100;
  const min = Math.round(18.5 * h * h);
  const max = Math.round(24.9 * h * h);
  return { min, max };
};

const bmiTable = [
  { range: '< 18.5', label: 'Underweight', color: '#60A5FA', borderClass: 'border-l-blue-400' },
  { range: '18.5 – 24.9', label: 'Normal Weight', color: '#4ADE80', borderClass: 'border-l-green-400' },
  { range: '25 – 29.9', label: 'Overweight', color: '#FACC15', borderClass: 'border-l-yellow-400' },
  { range: '30 – 34.9', label: 'Obese', color: '#FB923C', borderClass: 'border-l-orange-400' },
  { range: '35+', label: 'Severely Obese', color: '#EF4444', borderClass: 'border-l-red-400' },
];

export default function BMICalculatorPage() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [showResult, setShowResult] = useState(false);
  const [bmi, setBmi] = useState(0);

  const handleCalculate = () => {
    const calculated = weight / Math.pow(height / 100, 2);
    setBmi(Math.round(calculated * 10) / 10);
    setShowResult(true);
  };

  const handleRecalculate = () => {
    setShowResult(false);
    setBmi(0);
  };

  // Needle angle: BMI 10 → 0°, BMI 40 → 180°
  const needleAngle = Math.min(Math.max((bmi - 10) / 30 * 180, 0), 180);
  const category = getBMICategory(bmi);
  const ideal = getIdealWeightRange(height);

  const whatsappMsg = encodeURIComponent(`Hi UGRAMM FITNESS! My BMI is ${bmi} (${category.label}). I want to start my fitness journey!`);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="relative py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C9A84C]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="text-[#C9A84C] font-mono text-sm tracking-[0.3em] uppercase">Free Tool</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-7xl md:text-9xl tracking-wider mb-4 font-black"
            style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
          >
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
              BMI CALCULATOR
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-xl max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}
          >
            Know Your Body Numbers
          </motion.p>
        </div>
      </section>

      {/* Calculator + Result */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              {/* Gender */}
              <div className="mb-8">
                <label className="block text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                  style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                  Gender
                </label>
                <div className="flex gap-3">
                  {(['male', 'female'] as const).map(g => (
                    <button
                      key={g}
                      onClick={() => setGender(g)}
                      className={`flex-1 py-3 rounded-full font-semibold text-sm tracking-wider capitalize transition-all duration-300 ${
                        gender === g
                          ? 'bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black'
                          : 'border border-white/20 text-white/60 hover:border-[#C9A84C]/50 hover:text-[#C9A84C]'
                      }`}
                      style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}
                    >
                      {g === 'male' ? '♂ Male' : '♀ Female'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Height */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase"
                    style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                    Height
                  </label>
                  <span className="text-3xl font-bold text-[#C9A84C]"
                    style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
                    {height} <span className="text-base text-white/40">cm</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={220}
                  step={1}
                  value={height}
                  onChange={e => setHeight(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#C9A84C] bg-white/10"
                />
                <div className="flex justify-between mt-2">
                  {[100, 140, 160, 180, 200, 220].map(v => (
                    <span key={v} className="text-white/30 text-xs">{v}</span>
                  ))}
                </div>
              </div>

              {/* Weight */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase"
                    style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                    Weight
                  </label>
                  <span className="text-3xl font-bold text-[#C9A84C]"
                    style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
                    {weight} <span className="text-base text-white/40">kg</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={150}
                  step={1}
                  value={weight}
                  onChange={e => setWeight(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#C9A84C] bg-white/10"
                />
                <div className="flex justify-between mt-2">
                  {[30, 60, 90, 120, 150].map(v => (
                    <span key={v} className="text-white/30 text-xs">{v}</span>
                  ))}
                </div>
              </div>

              {/* Age */}
              <div className="mb-8">
                <label className="block text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                  style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                  Age
                </label>
                <input
                  type="number"
                  min={10}
                  max={80}
                  value={age}
                  onChange={e => setAge(Number(e.target.value))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-lg focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                  style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
                />
              </div>

              {/* Calculate */}
              <button
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 text-lg tracking-widest"
                style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
              >
                CALCULATE BMI
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              {/* BMI Gauge */}
              <div className="flex flex-col items-center mb-8">
                <svg viewBox="0 0 220 130" className="w-72 h-auto">
                  {/* Background arc zones */}
                  {/* Underweight 0-36deg */}
                  <path d="M 20 110 A 90 90 0 0 1 56 27" stroke="#60A5FA" strokeWidth="14" fill="none" strokeLinecap="butt" />
                  {/* Normal 36-72deg */}
                  <path d="M 56 27 A 90 90 0 0 1 110 20" stroke="#4ADE80" strokeWidth="14" fill="none" strokeLinecap="butt" />
                  {/* Overweight 72-108deg */}
                  <path d="M 110 20 A 90 90 0 0 1 164 27" stroke="#FACC15" strokeWidth="14" fill="none" strokeLinecap="butt" />
                  {/* Obese 108-144deg */}
                  <path d="M 164 27 A 90 90 0 0 1 200 65" stroke="#FB923C" strokeWidth="14" fill="none" strokeLinecap="butt" />
                  {/* Severely Obese 144-180deg */}
                  <path d="M 200 65 A 90 90 0 0 1 200 110" stroke="#EF4444" strokeWidth="14" fill="none" strokeLinecap="butt" />

                  {/* Needle */}
                  <motion.line
                    x1="110"
                    y1="110"
                    x2="110"
                    y2="30"
                    stroke="#E8D5A3"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: needleAngle - 90 }}
                    style={{ transformOrigin: '110px 110px' }}
                    transition={{ duration: 1.2, type: 'spring', stiffness: 60 }}
                  />
                  <circle cx="110" cy="110" r="6" fill="#C9A84C" />

                  {/* BMI value */}
                  <text x="110" y="105" textAnchor="middle" fill="#E8D5A3" fontSize="22" fontWeight="bold"
                    style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
                    {bmi}
                  </text>
                </svg>

                {/* Category badge */}
                <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full mt-2 ${category.bg}`}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: category.color }} />
                  <span className="font-bold text-sm" style={{ color: category.color,
                    fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                    {category.label}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 mb-8">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-white/40 text-xs tracking-wider uppercase mb-1">Ideal Weight Range</p>
                  <p className="text-[#C9A84C] text-xl font-bold"
                    style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
                    {ideal.min} kg – {ideal.max} kg
                  </p>
                  <p className="text-white/40 text-xs mt-1">for your height of {height} cm</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70 text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                    {category.suggestion}
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/917019497000?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold px-6 py-4 rounded-full hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 text-center tracking-widest text-sm"
                  style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
                >
                  START YOUR JOURNEY
                </a>
                <button
                  onClick={handleRecalculate}
                  className="flex-1 border border-white/20 text-white/60 px-6 py-4 rounded-full hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all duration-300 font-semibold text-sm tracking-wider"
                  style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}
                >
                  RECALCULATE
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* BMI Reference Table */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-2xl font-bold mb-6 text-center"
          style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
          BMI Reference Guide
        </h2>
        <div className="space-y-2">
          {bmiTable.map(row => (
            <div
              key={row.label}
              className={`flex items-center justify-between bg-white/[0.03] border-l-4 ${row.borderClass} border border-white/10 rounded-r-xl px-5 py-4`}
            >
              <span className="text-white/60 text-sm font-mono w-24">{row.range}</span>
              <span className="font-semibold text-sm" style={{ color: row.color,
                fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                {row.label}
              </span>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: row.color }} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
