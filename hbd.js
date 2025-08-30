// فتح الظرف عند الضغط (بدون jQuery)
document.addEventListener('click', function (e) {
  const env = document.getElementById('card');
  if (!env) return;
  // افتح الظرف عند الضغط على الأمام أو على الظرف نفسه
  if (e.target.closest('.envelope') && !env.classList.contains('open')) {
    env.classList.remove('new');
    env.classList.add('open');
  }
});