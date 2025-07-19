export type Locale = 
  // English variants
  | "en-US" | "en-GB" | "en-CA" | "en-AU" | "en-NZ" | "en-ZA" | "en-IE" | "en-IN"
  // Spanish variants
  | "es-ES" | "es-US" | "es-MX" | "es-AR" | "es-CO" | "es-CL" | "es-PE" | "es-VE"
  // French variants
  | "fr-FR" | "fr-CA" | "fr-BE" | "fr-CH" | "fr-LU"
  // German variants
  | "de-DE" | "de-AT" | "de-CH" | "de-LU"
  // Italian variants
  | "it-IT" | "it-CH"
  // Portuguese variants
  | "pt-PT" | "pt-BR"
  // Dutch variants
  | "nl-NL" | "nl-BE"
  // Nordic languages
  | "sv-SE" | "da-DK" | "no-NO" | "fi-FI" | "is-IS"
  // Eastern European
  | "pl-PL" | "cs-CZ" | "sk-SK" | "hu-HU" | "ro-RO" | "bg-BG" | "hr-HR" | "sl-SI"
  // Russian and Slavic
  | "ru-RU" | "uk-UA" | "sr-RS" | "bs-BA" | "mk-MK"
  // Asian languages
  | "ja-JP" | "ko-KR" | "zh-CN" | "zh-TW" | "zh-HK" | "th-TH" | "vi-VN" | "hi-IN"
  | "ar-SA" | "ar-AE" | "ar-EG" | "he-IL" | "tr-TR" | "fa-IR"
  // Other major languages
  | "el-GR" | "lt-LT" | "lv-LV" | "et-EE" | "mt-MT" | "ga-IE" | "cy-GB";

export type TimeZone =
  // UTC
  | "UTC"
  // North America - United States
  | "America/New_York" | "America/Detroit" | "America/Indiana/Indianapolis" | "America/Kentucky/Louisville"
  | "America/Chicago" | "America/Menominee" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem"
  | "America/Denver" | "America/Boise" | "America/Phoenix" | "America/Los_Angeles"
  | "America/Anchorage" | "America/Juneau" | "America/Sitka" | "America/Metlakatla"
  | "Pacific/Honolulu" | "America/Adak"
  // North America - Canada
  | "America/St_Johns" | "America/Halifax" | "America/Glace_Bay" | "America/Moncton"
  | "America/Goose_Bay" | "America/Blanc-Sablon" | "America/Toronto" | "America/Nipigon"
  | "America/Thunder_Bay" | "America/Iqaluit" | "America/Pangnirtung" | "America/Atikokan"
  | "America/Winnipeg" | "America/Rainy_River" | "America/Resolute" | "America/Rankin_Inlet"
  | "America/Regina" | "America/Swift_Current" | "America/Edmonton" | "America/Cambridge_Bay"
  | "America/Yellowknife" | "America/Inuvik" | "America/Creston" | "America/Dawson_Creek"
  | "America/Fort_Nelson" | "America/Vancouver" | "America/Whitehorse" | "America/Dawson"
  // North America - Mexico
  | "America/Mexico_City" | "America/Cancun" | "America/Merida" | "America/Monterrey"
  | "America/Matamoros" | "America/Mazatlan" | "America/Chihuahua" | "America/Ojinaga"
  | "America/Hermosillo" | "America/Tijuana" | "America/Bahia_Banderas"
  // Central America
  | "America/Guatemala" | "America/Belize" | "America/El_Salvador" | "America/Tegucigalpa"
  | "America/Managua" | "America/Costa_Rica" | "America/Panama"
  // Caribbean
  | "America/Havana" | "America/Jamaica" | "America/Port-au-Prince" | "America/Santo_Domingo"
  | "America/Puerto_Rico" | "America/Barbados" | "America/Martinique" | "America/Guadeloupe"
  | "America/Port_of_Spain" | "America/Curacao" | "America/Aruba"
  // South America
  | "America/Caracas" | "America/Bogota" | "America/Guyana" | "America/Paramaribo"
  | "America/Cayenne" | "America/Belem" | "America/Fortaleza" | "America/Recife"
  | "America/Araguaina" | "America/Maceio" | "America/Bahia" | "America/Sao_Paulo"
  | "America/Campo_Grande" | "America/Cuiaba" | "America/Santarem" | "America/Porto_Velho"
  | "America/Boa_Vista" | "America/Manaus" | "America/Eirunepe" | "America/Rio_Branco"
  | "America/La_Paz" | "America/Asuncion" | "America/Santiago" | "America/Punta_Arenas"
  | "America/Argentina/Buenos_Aires" | "America/Argentina/Cordoba" | "America/Argentina/Salta"
  | "America/Argentina/Jujuy" | "America/Argentina/Tucuman" | "America/Argentina/Catamarca"
  | "America/Argentina/La_Rioja" | "America/Argentina/San_Juan" | "America/Argentina/Mendoza"
  | "America/Argentina/San_Luis" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Ushuaia"
  | "America/Montevideo" | "Atlantic/Stanley"
  // Europe - Western Europe
  | "Europe/London" | "Europe/Dublin" | "Europe/Lisbon" | "Atlantic/Madeira"
  | "Atlantic/Azores" | "Atlantic/Canary" | "Europe/Madrid" | "Europe/Andorra"
  | "Europe/Paris" | "Europe/Monaco" | "Europe/Brussels" | "Europe/Luxembourg"
  | "Europe/Amsterdam" | "Europe/Zurich" | "Europe/Vienna" | "Europe/Rome"
  | "Europe/Vatican" | "Europe/San_Marino" | "Europe/Malta" | "Europe/Gibraltar"
  // Europe - Central Europe
  | "Europe/Berlin" | "Europe/Prague" | "Europe/Bratislava" | "Europe/Budapest"
  | "Europe/Ljubljana" | "Europe/Zagreb" | "Europe/Warsaw" | "Europe/Tirane"
  | "Europe/Podgorica" | "Europe/Sarajevo" | "Europe/Skopje" | "Europe/Belgrade"
  // Europe - Northern Europe
  | "Europe/Copenhagen" | "Europe/Oslo" | "Europe/Stockholm" | "Europe/Helsinki"
  | "Europe/Mariehamn" | "Europe/Tallinn" | "Europe/Riga" | "Europe/Vilnius"
  | "Europe/Kaliningrad" | "Europe/Reykjavik" | "Atlantic/Faroe"
  // Europe - Eastern Europe
  | "Europe/Moscow" | "Europe/Simferopol" | "Europe/Kirov" | "Europe/Astrakhan"
  | "Europe/Volgograd" | "Europe/Saratov" | "Europe/Ulyanovsk" | "Europe/Samara"
  | "Europe/Kiev" | "Europe/Uzhgorod" | "Europe/Zaporozhye" | "Europe/Chisinau"
  | "Europe/Bucharest" | "Europe/Sofia" | "Europe/Athens" | "Europe/Istanbul"
  | "Europe/Minsk"
  // Asia - Western Asia
  | "Asia/Istanbul" | "Asia/Ankara" | "Asia/Nicosia" | "Asia/Damascus"
  | "Asia/Beirut" | "Asia/Jerusalem" | "Asia/Gaza" | "Asia/Hebron"
  | "Asia/Amman" | "Asia/Baghdad" | "Asia/Kuwait" | "Asia/Riyadh"
  | "Asia/Bahrain" | "Asia/Qatar" | "Asia/Dubai" | "Asia/Muscat"
  | "Asia/Tehran" | "Asia/Yerevan" | "Asia/Baku" | "Asia/Tbilisi"
  // Asia - Central Asia
  | "Asia/Tashkent" | "Asia/Samarkand" | "Asia/Dushanbe" | "Asia/Ashgabat"
  | "Asia/Bishkek" | "Asia/Almaty" | "Asia/Qyzylorda" | "Asia/Qostanay"
  | "Asia/Aqtobe" | "Asia/Aqtau" | "Asia/Atyrau" | "Asia/Oral"
  // Asia - South Asia
  | "Asia/Kabul" | "Asia/Karachi" | "Asia/Kolkata" | "Asia/Colombo"
  | "Asia/Kathmandu" | "Asia/Thimphu" | "Asia/Dhaka" | "Asia/Yangon"
  // Asia - Southeast Asia
  | "Asia/Bangkok" | "Asia/Vientiane" | "Asia/Phnom_Penh" | "Asia/Ho_Chi_Minh"
  | "Asia/Jakarta" | "Asia/Pontianak" | "Asia/Makassar" | "Asia/Jayapura"
  | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Singapore" | "Asia/Brunei"
  | "Asia/Manila" | "Asia/Dili"
  // Asia - East Asia
  | "Asia/Shanghai" | "Asia/Urumqi" | "Asia/Hong_Kong" | "Asia/Macau"
  | "Asia/Taipei" | "Asia/Tokyo" | "Asia/Seoul" | "Asia/Pyongyang"
  | "Asia/Ulaanbaatar" | "Asia/Hovd" | "Asia/Choibalsan"
  // Asia - North Asia (Russia)
  | "Asia/Yekaterinburg" | "Asia/Omsk" | "Asia/Novosibirsk" | "Asia/Barnaul"
  | "Asia/Tomsk" | "Asia/Novokuznetsk" | "Asia/Krasnoyarsk" | "Asia/Irkutsk"
  | "Asia/Chita" | "Asia/Yakutsk" | "Asia/Khandyga" | "Asia/Vladivostok"
  | "Asia/Ust-Nera" | "Asia/Magadan" | "Asia/Sakhalin" | "Asia/Srednekolymsk"
  | "Asia/Kamchatka" | "Asia/Anadyr"
  // Africa - Northern Africa
  | "Africa/Cairo" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Algiers"
  | "Africa/Casablanca" | "Africa/El_Aaiun"
  // Africa - Western Africa
  | "Africa/Abidjan" | "Africa/Accra" | "Africa/Bamako" | "Africa/Banjul"
  | "Africa/Bissau" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Freetown"
  | "Africa/Lome" | "Africa/Monrovia" | "Africa/Nouakchott" | "Africa/Ouagadougou"
  | "Africa/Porto-Novo" | "Africa/Sao_Tome"
  // Africa - Central Africa
  | "Africa/Bangui" | "Africa/Brazzaville" | "Africa/Kinshasa" | "Africa/Douala"
  | "Africa/Libreville" | "Africa/Malabo" | "Africa/Ndjamena" | "Africa/Niamey"
  | "Africa/Lagos"
  // Africa - Eastern Africa
  | "Africa/Khartoum" | "Africa/Juba" | "Africa/Addis_Ababa" | "Africa/Asmara"
  | "Africa/Djibouti" | "Africa/Mogadishu" | "Africa/Nairobi" | "Africa/Kampala"
  | "Africa/Kigali" | "Africa/Bujumbura" | "Africa/Dar_es_Salaam" | "Africa/Dodoma"
  | "Indian/Comoro" | "Indian/Antananarivo" | "Indian/Mauritius" | "Indian/Reunion"
  | "Indian/Mayotte" | "Indian/Seychelles"
  // Africa - Southern Africa
  | "Africa/Johannesburg" | "Africa/Cape_Town" | "Africa/Windhoek" | "Africa/Gaborone"
  | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Maputo" | "Africa/Blantyre"
  | "Africa/Lusaka" | "Africa/Harare"
  // Australia and Oceania
  | "Australia/Perth" | "Australia/Eucla" | "Australia/Darwin" | "Australia/Adelaide"
  | "Australia/Broken_Hill" | "Australia/Melbourne" | "Australia/Sydney" | "Australia/Brisbane"
  | "Australia/Lindeman" | "Australia/Hobart" | "Australia/Currie" | "Australia/Lord_Howe"
  | "Antarctica/Macquarie" | "Pacific/Norfolk"
  // Pacific Islands
  | "Pacific/Rarotonga" | "Pacific/Tahiti" | "Pacific/Marquesas" | "Pacific/Gambier"
  | "Pacific/Port_Moresby" | "Pacific/Bougainville" | "Pacific/Guadalcanal" | "Pacific/Efate"
  | "Pacific/Noumea" | "Pacific/Auckland" | "Pacific/Chatham" | "Pacific/Fiji"
  | "Pacific/Tonga" | "Pacific/Apia" | "Pacific/Kiritimati" | "Pacific/Enderbury"
  | "Pacific/Fakaofo" | "Pacific/Tarawa" | "Pacific/Majuro" | "Pacific/Kwajalein"
  | "Pacific/Chuuk" | "Pacific/Pohnpei" | "Pacific/Kosrae" | "Pacific/Nauru"
  | "Pacific/Funafuti" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Saipan"
  | "Pacific/Guam" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Easter"
  | "Pacific/Galapagos" | "Pacific/Niue";

export interface FormattedDateTime {
  now: Date;
  date: string; // ex: "07/18/2025"
  time: string; // ex: "17:26:00"
  dayOfWeek: string; // ex: "Friday"
}

export interface FormatOptions {
  date?: Date | number | string;
  timeZone?: TimeZone;
  locale?: Locale;
}

// Default configuration constants
const DEFAULT_TIMEZONE: TimeZone = "America/New_York";
const DEFAULT_LOCALE: Locale = "en-US";

/**
 * Creates a day of week formatter for the given locale and timezone
 */
function createDayOfWeekFormatter(locale: Locale, timeZone: TimeZone): Intl.DateTimeFormat {
  return new Intl.DateTimeFormat(locale, { weekday: "long", timeZone });
}

/**
 * Creates a date formatter for the given locale and timezone
 */
function createDateFormatter(locale: Locale, timeZone: TimeZone): Intl.DateTimeFormat {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone,
  });
}

/**
 * Creates a time formatter for the given locale and timezone
 */
function createTimeFormatter(locale: Locale, timeZone: TimeZone): Intl.DateTimeFormat {
  return new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone,
  });
}

/**
 * Resolves the input date to a Date object
 */
function resolveDate(dateInput?: Date | number | string): Date {
  return dateInput ? new Date(dateInput) : new Date();
}

/**
 * Formats a date and time according to the specified options
 */
export function formatDateTime(options?: FormatOptions): FormattedDateTime {
  const timeZone = options?.timeZone ?? DEFAULT_TIMEZONE;
  const locale = options?.locale ?? DEFAULT_LOCALE;
  const targetDate = resolveDate(options?.date);

  // Check if the date is invalid
  if (isNaN(targetDate.getTime())) {
    return {
      now: targetDate,
      date: "Invalid Date",
      time: "Invalid Date",
      dayOfWeek: "Invalid Date",
    };
  }

  const dayOfWeekFormatter = createDayOfWeekFormatter(locale, timeZone);
  const dateFormatter = createDateFormatter(locale, timeZone);
  const timeFormatter = createTimeFormatter(locale, timeZone);

  return {
    now: targetDate,
    date: dateFormatter.format(targetDate),
    time: timeFormatter.format(targetDate),
    dayOfWeek: dayOfWeekFormatter.format(targetDate),
  };
}
