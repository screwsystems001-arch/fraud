/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Professional Navy Blue - Trust, Stability, Corporate
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
        },
        // Professional Blue - Modern, Reliable
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Professional Teal - Innovation, Growth, Trust
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        // Professional Gray - Sophisticated, Corporate
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1.5s',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-slow-delayed': 'floatSlow 8s ease-in-out infinite 4s',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'gradient-mesh': 'gradientMesh 15s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-smooth': 'glowSmooth 3s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'slide-down': 'slideDown 0.6s ease-out',
        'text-reveal': 'textReveal 1s ease-out',
        'text-highlight': 'textHighlight 2s ease-in-out infinite',
        'card-float': 'cardFloat 1.2s ease-out',
        'icon-bounce': 'iconBounce 1s ease-out',
        'particle-1': 'particleMove1 20s ease-in-out infinite',
        'particle-2': 'particleMove2 25s ease-in-out infinite',
        'particle-3': 'particleMove3 18s ease-in-out infinite',
        'particle-4': 'particleMove4 22s ease-in-out infinite',
        'particle-5': 'particleMove5 24s ease-in-out infinite',
        'particle-6': 'particleMove6 19s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(26, 35, 126, 0.5), 0 0 10px rgba(26, 35, 126, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(26, 35, 126, 0.8), 0 0 30px rgba(26, 35, 126, 0.5)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        gradientMesh: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowSmooth: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        textHighlight: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        cardFloat: {
          '0%': { opacity: '0', transform: 'translateY(40px) rotate(2deg) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0deg) scale(1)' },
        },
        iconBounce: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.8)' },
          '60%': { opacity: '1', transform: 'translateY(-10px) scale(1.1)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        particleMove1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
          '25%': { transform: 'translate(30px, -50px) scale(1.2)', opacity: '0.8' },
          '50%': { transform: 'translate(-20px, -80px) scale(0.8)', opacity: '0.4' },
          '75%': { transform: 'translate(50px, -30px) scale(1.1)', opacity: '0.7' },
        },
        particleMove2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.5' },
          '33%': { transform: 'translate(-40px, 60px) scale(1.3)', opacity: '0.7' },
          '66%': { transform: 'translate(40px, -40px) scale(0.7)', opacity: '0.3' },
        },
        particleMove3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.7' },
          '50%': { transform: 'translate(60px, 40px) scale(1.1)', opacity: '0.5' },
        },
        particleMove4: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
          '25%': { transform: 'translate(-50px, 30px) scale(0.9)', opacity: '0.4' },
          '75%': { transform: 'translate(30px, -60px) scale(1.2)', opacity: '0.8' },
        },
        particleMove5: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.4' },
          '40%': { transform: 'translate(40px, 50px) scale(1.1)', opacity: '0.6' },
          '80%': { transform: 'translate(-30px, -40px) scale(0.9)', opacity: '0.3' },
        },
        particleMove6: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.5' },
          '30%': { transform: 'translate(-60px, 20px) scale(1.2)', opacity: '0.7' },
          '70%': { transform: 'translate(20px, -50px) scale(0.8)', opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};