const all_case_dom = document.getElementById("total-cases");
const today_case_dom = document.getElementById("new-cases");

const death_case_dom = document.getElementById("total-deaths");
const death_today_dom = document.getElementById("new-deaths");

const daily_recover_dom = document.getElementById("new-recovered");
const total_recover_dom = document.getElementById("total-recovered");

const critical_case_dom = document.getElementById("critical");
const active_case_dom = document.getElementById("active");

const numberWithCommas = (x) => {
  return x.toLocaleString();
};

const fetchData = async () => {
  const res = await fetch("https://disease.sh/v3/covid-19/countries/TH");
  const data = await res.json();
  const {
    cases,
    todayCases,
    deaths,
    todayDeaths,
    todayRecovered,
    critical,
    recovered,
    active,
  } = data;

  all_case_dom.innerText = numberWithCommas(cases);
  today_case_dom.innerText = "+" + numberWithCommas(todayCases);
  death_case_dom.innerText = numberWithCommas(deaths);
  death_today_dom.innerText = "+" + numberWithCommas(todayDeaths);
  total_recover_dom.innerText = numberWithCommas(recovered);
  daily_recover_dom.innerText = "+" + numberWithCommas(todayRecovered);
  critical_case_dom.innerText = numberWithCommas(critical);
  active_case_dom.innerText = numberWithCommas(active);
};

fetchData();
