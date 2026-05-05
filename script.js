:root[data-theme="dark"] {
  --bg-color: #0d1117;
  --card-bg: rgba(22, 27, 34, 0.6);
  --border-color: rgba(255, 255, 255, 0.1);
  --text-main: #f0f6fc;
  --text-muted: #8b949e;
  --primary: #7c3aed;
  --secondary: #3b82f6;
  --gradient: linear-gradient(90deg, var(--primary), var(--secondary));
  --glass-bg: rgba(255, 255, 255, 0.03);
}

:root[data-theme="light"] {
  --bg-color: #f8fafc;
  --card-bg: rgba(255, 255, 255, 0.8);
  --border-color: rgba(0, 0, 0, 0.1);
  --text-main: #0f172a;
  --text-muted: #64748b;
  --primary: #6d28d9;
  --secondary: #2563eb;
  --gradient: linear-gradient(90deg, var(--primary), var(--secondary));
  --glass-bg: rgba(0, 0, 0, 0.03);
}

body {
  background-color: var(--bg-color);
  color: var(--text-main);
  font-family: 'Cairo', sans-serif;
  margin: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
  line-height: 1.7;
  overflow-x: hidden;
}

/* التموجات اللونية في الخلفية */
.bg-gradient-blobs {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: 
    radial-gradient(circle at 15% 50%, rgba(124, 58, 237, 0.1), transparent 25%),
    radial-gradient(circle at 85% 30%, rgba(59, 130, 246, 0.1), transparent 25%);
  z-index: -1;
  pointer-events: none;
}

/* شريط التنقل العلوى واللوجو */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  position: fixed;
  top: 0; left: 0; right: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgba(13, 17, 23, 0.5);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
}

.logo {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1px;
}
.logo span {
  color: var(--primary);
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  margin: 0 15px;
  font-weight: 600;
  transition: color 0.3s;
}
.nav-links a:hover {
  color: var(--text-main);
}

.controls {
  display: flex;
  gap: 10px;
}

.glass-btn {
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 8px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  backdrop-filter: blur(5px);
  transition: all 0.3s;
}
.glass-btn:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-2px);
}

:root[data-theme="dark"] .icon-sun { display: inline; }
:root[data-theme="dark"] .icon-moon { display: none; }
:root[data-theme="light"] .icon-sun { display: none; }
:root[data-theme="light"] .icon-moon { display: inline; }

/* الحاوية الأساسية */
.wrap {
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 20px 40px;
}

/* الواجهة الرئيسية (Hero) */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  justify-content: center;
  position: relative;
}

.status-badge {
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
  padding: 6px 16px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
  backdrop-filter: blur(5px);
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin: 0 0 16px 0;
  font-weight: 800;
}
.wave {
  display: inline-block;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}
@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60%, 100% { transform: rotate(0deg); }
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-muted);
  max-width: 600px;
  margin-bottom: 32px;
}

/* الأزرار */
.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
}

.btn {
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 700;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s;
}

.btn-gradient {
  background: var(--gradient);
  color: #fff;
  border: none;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}
.btn-gradient:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.5);
}

.btn-outline {
  background: transparent;
  color: var(--text-main);
  border: 1px solid var(--border-color);
}
.btn-outline:hover {
  background: var(--glass-bg);
  transform: translateY(-3px);
}

/* شريط التقنيات (Glass Panel) */
.glass-panel {
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 15px 30px;
  border-radius: 50px;
  display: flex;
  gap: 20px;
  font-size: 24px;
}

/* مؤشر التمرير (Scroll) */
.scroll-indicator {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-muted);
  font-size: 12px;
  gap: 10px;
}
.scroll-indicator .line {
  width: 2px;
  height: 40px;
  background: linear-gradient(transparent, var(--primary));
  animation: scrollDown 2s infinite;
}
@keyframes scrollDown {
  0% { transform: translateY(-10px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(10px); opacity: 0; }
}

/* الأقسام والبطاقات */
.section {
  padding: 60px 0;
}
.section-title {
  font-size: 24px;
  margin-bottom: 24px;
  text-align: center;
}

.glass-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.project-card {
  transition: transform 0.3s ease, border-color 0.3s;
}
.project-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}
.project-header h3 { margin: 0; }
.project-tag {
  font-size: 12px;
  color: var(--primary);
  background: rgba(124, 58, 237, 0.1);
  padding: 4px 10px;
  border-radius: 12px;
  font-weight: bold;
}

.tags { display: flex; gap: 8px; margin: 15px 0; }
.tag {
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 20px;
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
}

.project-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
}
.project-link:hover { text-decoration: underline; }

.muted { color: var(--text-muted); }
.small { font-size: 14px; }

/* حركات الظهور (Fade in) */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* دعم اتجاه النصوص LTR و RTL */
html[dir="ltr"] .project-link { display: inline-block; }