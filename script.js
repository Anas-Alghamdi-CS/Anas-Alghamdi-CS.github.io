document.addEventListener('DOMContentLoaded', () => {
  const htmlElement = document.documentElement;

  // 1. نظام تغيير المظهر (Dark / Light)
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // 2. نظام التنقل تم تحويله إلى التمرير السلس (Smooth Scroll) عبر HTML

  // 3. نظام تغيير اللغة
  const langSwitcher = document.querySelector('.lang-switcher');
  const langEn = document.getElementById('lang-en');
  const langAr = document.getElementById('lang-ar');
  let currentLang = 'ar';

  const translations = {
    ar: {
      nav_about: "من أنا",
      nav_projects: "مشاريعي",
      nav_experience: "الخبرة",
      nav_contact: "تواصل معي",
      status: "متاح للتدريب التعاوني",
      greeting: "أهلاً، أنا أنس الغامدي",
      subtitle: "طالب علوم حاسب، أطمح لتحويل البيانات المعقدة إلى رؤى استراتيجية تدعم اتخاذ القرار.",
      download_cv: "تحميل السيرة الذاتية",
      contact_me: "تواصل معي",
      projects_title: "أبرز مشاريعي",
      proj1_desc: "استخدام نماذج الذكاء الاصطناعي لاستخراج النصوص العربية وتصحيحها قواعدياً.",
      proj2_desc: "منصة سياحية لربط السياح بالمرشدين المحليين مع دعم كامل للغة العربية.",
      proj3_desc: "نظام لإدارة فعاليات الأندية الطلابية الجامعية.",
      coming_soon: "قريباً...",
      contact_text: "نسعد بتواصلك عبر الروابط التالية:"
    },
    en: {
      nav_about: "About",
      nav_projects: "Projects",
      nav_experience: "Experience",
      nav_contact: "Contact",
      status: "Available for Co-op Training",
      greeting: "Welcome, I'm Anas Alghamdi",
      subtitle: "CS Student, aiming to transform complex data into strategic insights.",
      download_cv: "Download CV",
      contact_me: "Contact Me",
      projects_title: "Portfolio Projects",
      proj1_desc: "Utilizing AI models for intelligent Arabic text extraction and grammar correction.",
      proj2_desc: "Tourism platform connecting tourists with local guides, featuring RTL support.",
      proj3_desc: "Event management system for university student clubs.",
      coming_soon: "Coming Soon...",
      contact_text: "Feel free to reach out through:"
    }
  };

  langSwitcher.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    
    htmlElement.setAttribute('lang', currentLang);
    htmlElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    
    if (currentLang === 'ar') {
      langAr.classList.add('active');
      langEn.classList.remove('active');
    } else {
      langEn.classList.add('active');
      langAr.classList.remove('active');
    }
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if(translations[currentLang][key]) {
        element.innerText = translations[currentLang][key];
      }
    });
  });
});