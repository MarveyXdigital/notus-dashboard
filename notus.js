const navItems = document.querySelectorAll(".nav[data-page]");
const pages = document.querySelectorAll(".page");

navItems.forEach(function (nav) {
  nav.addEventListener("click", function () {
    const pageName = nav.dataset.page;
    pages.forEach(function (page) {
      page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageName);

    selectedPage.classList.add("active");
  });
});

// OVERVIEW CHART
var options = {
  series: [
    {
      name: "High - 2025",
      data: [28, 29, 33, 36, 32, 32, 33],
    },
    {
      name: "Low - 2025",
      data: [12, 11, 14, 18, 17, 13, 13],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#77B6EA", "#545454"],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Average High & Low Temperature",
    align: "left",
  },
  grid: {
    borderColor: "#e7e7e7",
  },
  markers: {
    size: 1,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    title: {
      text: "Month",
    },
  },
  yaxis: {
    title: {
      text: "Temperature (°C)",
    },
    min: 5,
    max: 40,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: -25,
    offsetX: -5,
  },
};

var chart = new ApexCharts(document.querySelector("#chart-line"), options);
chart.render();

// PERFORMANCE CHART

var colors = [
  "#008FFB",
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
  "#546E7A",
  "#26a69a",
  "#3F51B5",
];

var options = {
  series: [
    {
      name: "Deals closed",
      data: [21, 22, 10, 28, 16, 21, 13, 30],
    },
  ],
  chart: {
    height: 350,
    type: "bar",
    events: {
      click: function (chart, w, e) {},
    },
  },
  colors: colors,
  title: {
    text: "",
    align: "left",
  },
  plotOptions: {
    bar: {
      columnWidth: "45%",
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  yaxis: {
    title: {
      text: "",
    },
  },
  xaxis: {
    categories: [
      ["John", "Doe"],
      ["Joe", "Smith"],
      ["Jake", "Williams"],
      "Amber",
      ["Peter", "Brown"],
      ["Mary", "Evans"],
      ["David", "Wilson"],
      ["Lily", "Roberts"],
    ],
    labels: {
      style: {
        colors: colors,
        fontSize: "12px",
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart-lineII"), options);
chart.render();
