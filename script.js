document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const copyEmailBtn = document.getElementById('copy-email');

  // 1. منطق تبديل الثيم
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    console.log(`Theme switched to: ${newTheme}`);
  });

  // 2. ميزة نسخ الإيميل
  copyEmailBtn.addEventListener('click', () => {
    const email = "anas.g.algamdi@gmail.com ";
    navigator.clipboard.writeText(email);
    
    const originalText = copyEmailBtn.innerText;
    copyEmailBtn.innerText = "Copied! ✅";
    copyEmailBtn.style.color = "#10b981";
    
    setTimeout(() => {
      copyEmailBtn.innerText = originalText;
      copyEmailBtn.style.color = "";
    }, 2000);
  });

  // 3. تأثير ظهور العناصر عند التمرير
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
  });
});