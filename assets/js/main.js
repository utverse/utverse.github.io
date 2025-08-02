document.addEventListener('DOMContentLoaded', function () {
  // Convert timestamp to full Persian date
  function persianDate(timestamp) {
    const stampDate = new Date(timestamp * 1000);
    return stampDate.toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  // Convert timestamp to Persian month and year
  function persianMonth(timestamp) {
    const stampDate = new Date(timestamp * 1000);
    const faMonth = stampDate.toLocaleDateString('fa-IR', { month: 'long' });
    return faMonth;
  }
  function persianDay(timestamp) {
    const stampDate = new Date(timestamp * 1000);
    const faDay = stampDate.toLocaleDateString('fa-IR', { day: 'numeric' });
    return faDay;
  }

  // Apply to elements with class .persianDate
  document.querySelectorAll('.persianDate').forEach(function (el) {
    const timestamp = el.dataset.timestamp;

    if (timestamp) {
      el.textContent = persianDate(Number(timestamp));
    }
  });

  // Apply to elements with class .persianMonth
  document.querySelectorAll('.persianMonth').forEach(function (el) {
    const timestamp = el.dataset.timestamp;
    if (timestamp) {
      el.textContent = persianMonth(Number(timestamp));
    }
  });

  // Apply to elements with class .persianDay
  document.querySelectorAll('.persianDay').forEach(function (el) {
    const timestamp = el.dataset.timestamp;
    if (timestamp) {
      el.textContent = persianDay(Number(timestamp));
    }
  });
  
});