
function toggleClass(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

// User avatar dropdown functionality
function setUserDropdownListener() {
  const userAvatar = $('.header__avatar');

  userAvatar.on('click', function(e) {
    const dropdown = $(this).children('.dropdown');
    toggleClass(dropdown, 'dropdown--active');
  });
}

// Side nav list sliding functionality
function setSidenavListeners() {
  const subHeadings = $('.navList__subheading'); console.log('subHeadings: ', subHeadings);
  const SUBHEADING_OPEN_CLASS = 'navList__subheading--open';
  const SUBLIST_HIDDEN_CLASS = 'subList--hidden';

  subHeadings.each((i, subHeadingEl) => {
    $(subHeadingEl).on('click', (e) => {
      const subListEl = $(subHeadingEl).siblings();

      // Add/remove selected styles to list category heading
      if (subHeadingEl) {
        toggleClass($(subHeadingEl), SUBHEADING_OPEN_CLASS);
      }

      // Reveal/hide the sublist
      if (subListEl && subListEl.length === 1) {
        toggleClass($(subListEl), SUBLIST_HIDDEN_CLASS);
      }
    });
  });
}

// Draw the chart
function renderChart() {
  const ctx = document.getElementById('chart-finance').getContext('2d');

  const financeChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [{
              label: 'Spending per month',
              data: [1150, 1000, 1675, 2100, 1340, 1500],
              backgroundColor: [
                  'rgba(27,186,225,0.2)',
                  'rgba(27,186,225,0.2)',
                  'rgba(27,186,225,0.2)',
                  'rgba(27,186,225,0.2)',
                  'rgba(27,186,225,0.2)',
                  'rgba(27,186,225,0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                  'rgba(27,186,225)',
                  'rgba(27,186,225)',
                  'rgba(27,186,225)',
                  'rgba(27,186,225)',
                  'rgba(27,186,225)',
                  'rgba(27,186,225)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
}

$(document).ready(() => {
  setSidenavListeners();
  setUserDropdownListener();
  renderChart();
});