let country = [];
let covid_data = {};
let initial_country = "Thailand";

const all_case_dom = document.getElementById("total-cases");
const today_case_dom = document.getElementById("new-cases");

const death_case_dom = document.getElementById("total-deaths");
const death_today_dom = document.getElementById("new-deaths");

const daily_recover_dom = document.getElementById("new-recovered");
const total_recover_dom = document.getElementById("total-recovered");

const critical_case_dom = document.getElementById("critical");
const active_case_dom = document.getElementById("active");

const select_country_dom = document.getElementById("select");

const numberWithCommas = (x) => {
  return x.toLocaleString();
};

const fetchData = async () => {
  const res = await fetch("https://disease.sh/v3/covid-19/countries");
  const data = await res.json();

  for (const each of data) {
    const {
      cases,
      todayCases,
      deaths,
      todayDeaths,
      todayRecovered,
      critical,
      recovered,
      active,
      country,
    } = each;

    covid_data[country] = {
      cases,
      todayCases,
      deaths,
      todayDeaths,
      todayRecovered,
      critical,
      recovered,
      active,
    };

    const new_option = document.createElement("option", {
      value: country,
    });

    new_option.innerText = country;

    select_country_dom.appendChild(new_option);
  }

  select_country_dom.value = initial_country;
  updateElementData(initial_country);
};

const updateElementData = (new_country) => {
  const {
    cases,
    todayCases,
    deaths,
    todayDeaths,
    todayRecovered,
    critical,
    recovered,
    active,
  } = covid_data[new_country];
  all_case_dom.innerText = numberWithCommas(cases);
  today_case_dom.innerText = "+" + numberWithCommas(todayCases);
  death_case_dom.innerText = numberWithCommas(deaths);
  death_today_dom.innerText = "+" + numberWithCommas(todayDeaths);
  total_recover_dom.innerText = numberWithCommas(recovered);
  daily_recover_dom.innerText = "+" + numberWithCommas(todayRecovered);
  critical_case_dom.innerText = numberWithCommas(critical);
  active_case_dom.innerText = numberWithCommas(active);
};

select_country_dom.onchange = () => {
  updateElementData(select_country_dom.value);
};
fetchData();
