function getCountryName(code) {
  const countries = {
    AD: "Andorra",
    AE: "United Arab Emirates",
    AF: "Afghanistan",
    AG: "Antigua and Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AO: "Angola",
    AQ: "Antarctica",
    AR: "Argentina",
    AS: "American Samoa",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AX: "Åland Islands",
    AZ: "Azerbaijan",
    BA: "Bosnia and Herzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barthélemy",
    BM: "Bermuda",
    BN: "Brunei Darussalam",
    BO: "Bolivia, Plurinational State of",
    BQ: "Bonaire, Sint Eustatius and Saba",
    BR: "Brazil",
    BS: "Bahamas",
    BT: "Bhutan",
    BV: "Bouvet Island",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CC: "Cocos (Keeling) Islands",
    CD: "Congo, The Democratic Republic of the",
    CF: "Central African Republic",
    CG: "Congo",
    CH: "Switzerland",
    CI: "Côte d'Ivoire",
    CK: "Cook Islands",
    CL: "Chile",
    CM: "Cameroon",
    CN: "China",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Cabo Verde",
    CW: "Curaçao",
    CX: "Christmas Island",
    CY: "Cyprus",
    CZ: "Czechia",
    DE: "Germany",
    DJ: "Djibouti",
    DK: "Denmark",
    DM: "Dominica",
    DO: "Dominican Republic",
    DZ: "Algeria",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egypt",
    EH: "Western Sahara",
    ER: "Eritrea",
    ES: "Spain",
    ET: "Ethiopia",
    FI: "Finland",
    FJ: "Fiji",
    FM: "Micronesia, Federated States of",
    FO: "Faroe Islands",
    FR: "France",
    GA: "Gabon",
    GB: "United Kingdom",
    GD: "Grenada",
    GE: "Georgia",
    GF: "French Guiana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Greenland",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Equatorial Guinea",
    GR: "Greece",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hong Kong",
    HN: "Honduras",
    HR: "Croatia",
    HT: "Haiti",
    HU: "Hungary",
    ID: "Indonesia",
    IE: "Ireland",
    IL: "Israel",
    IN: "India",
    IQ: "Iraq",
    IR: "Iran, Islamic Republic of",
    IS: "Iceland",
    IT: "Italy",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kyrgyzstan",
    KH: "Cambodia",
    KI: "Kiribati",
    KM: "Comoros",
    KN: "Saint Kitts and Nevis",
    KP: "Korea, Democratic People's Republic of",
    KR: "Korea, Republic of",
    KW: "Kuwait",
    KZ: "Kazakhstan",
    LA: "Lao People's Democratic Republic",
    LB: "Lebanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Morocco",
    MC: "Monaco",
    MD: "Moldova, Republic of",
    ME: "Montenegro",
    MG: "Madagascar",
    MH: "Marshall Islands",
    MK: "North Macedonia",
    ML: "Mali",
    MM: "Myanmar",
    MN: "Mongolia",
    MO: "Macao",
    MR: "Mauritania",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldives",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mozambique",
    NA: "Namibia",
    NE: "Niger",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "French Polynesia",
    PG: "Papua New Guinea",
    PH: "Philippines",
    PK: "Pakistan",
    PL: "Poland",
    PT: "Portugal",
    PY: "Paraguay",
    QA: "Qatar",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russian Federation",
    RW: "Rwanda",
    SA: "Saudi Arabia",
    SB: "Solomon Islands",
    SC: "Seychelles",
    SD: "Sudan",
    SE: "Sweden",
    SG: "Singapore",
    SI: "Slovenia",
    SK: "Slovakia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Suriname",
    ST: "Sao Tome and Principe",
    SV: "El Salvador",
    SY: "Syrian Arab Republic",
    SZ: "Eswatini",
    TD: "Chad",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tajikistan",
    TL: "Timor-Leste",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Turkey",
    TT: "Trinidad and Tobago",
    TV: "Tuvalu",
    TZ: "Tanzania, United Republic of",
    UA: "Ukraine",
    UG: "Uganda",
    US: "United States",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Holy See (Vatican City State)",
    VC: "Saint Vincent and the Grenadines",
    VE: "Venezuela, Bolivarian Republic of",
    VN: "Viet Nam",
    VU: "Vanuatu",
    WS: "Samoa",
    YE: "Yemen",
    ZA: "South Africa",
    ZM: "Zambia",
    ZW: "Zimbabwe"
  };

  return countries[code] || code;
}


if (!localStorage.getItem('visitSent')) {
  fetch("https://ipinfo.io/json?token=55192f0e812f76")
    .then(res => res.json())
    .then(data => {
      const country = getCountryName(data.country);

      if (!country) {
        console.warn("País indefinido — visita não será contada");
        return;
      }

      fetch('http://localhost:3000/visits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ country, timestamp: new Date().toISOString() })
      }).then(() => {
        localStorage.setItem('visitSent', 'true');
      });
    })
    .catch(err => console.error("Erro ao obter país:", err));
}

// 2. Vai buscar todas as visitas e mostra no gráfico e na lista
fetch('http://localhost:3000/visits')
  .then(res => res.json())
  .then(data => {
    const counts = {};
    data.forEach(visit => {
      const countryName = getCountryName(visit.country);
      counts[countryName] = (counts[countryName] || 0) + 1;
    });

    // Atualiza a lista de países
    const ul = document.querySelector("#countryList");
    if (ul) {
      ul.innerHTML = '';
      Object.entries(counts).forEach(([country, count]) => {
        const li = document.createElement("li");
        li.className = "flex items-center justify-between py-2 border-b";
        li.innerHTML = `
          <span>${country}</span>
          <span>${count} visitantes</span>
        `;
        ul.appendChild(li);
      });
    }

    // Mostra gráfico com os dados de visitas por país
    const ctx = document.getElementById('salesChart')?.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(counts),
          datasets: [{
            label: 'Visitantes por país',
            data: Object.values(counts),
            backgroundColor: '#3b82f6',
            borderRadius: 8,
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { stepSize: 1 }
            }
          }
        }
      });
    }
  });

  import { logout } from '/js/models/UserModel.js';

document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutTopBtn');

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      logout();
      window.location.href = '/html/login.html';
    });
  }
});
  