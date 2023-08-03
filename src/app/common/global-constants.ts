export class GlobalConstants{
    public static apiURL: string = "http://dataservice.accuweather.com/";
    public static apiKey: string = "6nnnkfwjYiUOJAoJQnkZdbwx1kJz8A3V";

    public static urlAutocomplete:string =this.apiURL + "locations/v1/cities/autocomplete";
    public static urlCurrentConditions:string=this.apiURL + "currentconditions/v1/";
    public static urlDailyForecasts:string= this.apiURL + "forecasts/v1/daily/5day/";

    public static monthName:string[]=["January","February","March","April","May","June","July","August","September","October","November","December"];
    public static days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    public static AutoCompleteLocations:any = 
    [
        {
          "Version": 1,
          "Key": "182536",
          "Type": "City",
          "Rank": 10,
          "LocalizedName": "Athens",
          "Country": {
            "ID": "GR",
            "LocalizedName": "Greece"
          },
          "AdministrativeArea": {
            "ID": "I",
            "LocalizedName": "Attica"
          }
        },
        {
          "Version": 1,
          "Key": "316938",
          "Type": "City",
          "Rank": 10,
          "LocalizedName": "Ankara",
          "Country": {
            "ID": "TR",
            "LocalizedName": "Turkey"
          },
          "AdministrativeArea": {
            "ID": "06",
            "LocalizedName": "Ankara"
          }
        },
        {
          "Version": 1,
          "Key": "126995",
          "Type": "City",
          "Rank": 11,
          "LocalizedName": "Alexandria",
          "Country": {
            "ID": "EG",
            "LocalizedName": "Egypt"
          },
          "AdministrativeArea": {
            "ID": "ALX",
            "LocalizedName": "Alexandria"
          }
        },
        {
          "Version": 1,
          "Key": "56912",
          "Type": "City",
          "Rank": 13,
          "LocalizedName": "Anqing",
          "Country": {
            "ID": "CN",
            "LocalizedName": "China"
          },
          "AdministrativeArea": {
            "ID": "AH",
            "LocalizedName": "Anhui"
          }
        },
        {
          "Version": 1,
          "Key": "59083",
          "Type": "City",
          "Rank": 15,
          "LocalizedName": "Anyang",
          "Country": {
            "ID": "CN",
            "LocalizedName": "China"
          },
          "AdministrativeArea": {
            "ID": "HA",
            "LocalizedName": "Henan"
          }
        },
        {
          "Version": 1,
          "Key": "102138",
          "Type": "City",
          "Rank": 15,
          "LocalizedName": "Anshan",
          "Country": {
            "ID": "CN",
            "LocalizedName": "China"
          },
          "AdministrativeArea": {
            "ID": "LN",
            "LocalizedName": "Liaoning"
          }
        },
        {
          "Version": 1,
          "Key": "202438",
          "Type": "City",
          "Rank": 15,
          "LocalizedName": "Ahmedabad",
          "Country": {
            "ID": "IN",
            "LocalizedName": "India"
          },
          "AdministrativeArea": {
            "ID": "GJ",
            "LocalizedName": "Gujarat"
          }
        },
        {
          "Version": 1,
          "Key": "2093",
          "Type": "City",
          "Rank": 20,
          "LocalizedName": "Algiers",
          "Country": {
            "ID": "DZ",
            "LocalizedName": "Algeria"
          },
          "AdministrativeArea": {
            "ID": "16",
            "LocalizedName": "Alger"
          }
        },
        {
          "Version": 1,
          "Key": "126831",
          "Type": "City",
          "Rank": 20,
          "LocalizedName": "Addis Ababa",
          "Country": {
            "ID": "ET",
            "LocalizedName": "Ethiopia"
          },
          "AdministrativeArea": {
            "ID": "AA",
            "LocalizedName": "Addis Ababa"
          }
        },
        {
          "Version": 1,
          "Key": "178551",
          "Type": "City",
          "Rank": 20,
          "LocalizedName": "Accra",
          "Country": {
            "ID": "GH",
            "LocalizedName": "Ghana"
          },
          "AdministrativeArea": {
            "ID": "AA",
            "LocalizedName": "Greater Accra"
          }
        }
      ]

    public static DailyForecasts:any={
        "Headline": {
          "EffectiveDate": "2021-11-28T07:00:00+02:00",
          "EffectiveEpochDate": 1638075600,
          "Severity": 4,
          "Text": "Pleasant Sunday",
          "Category": "mild",
          "EndDate": null,
          "EndEpochDate": null,
          "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
        },
        "DailyForecasts": [
          {
            "Date": "2021-11-27T07:00:00+02:00",
            "EpochDate": 1637989200,
            "Temperature": {
              "Minimum": {
                "Value": 63,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 80,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 2,
              "IconPhrase": "Mostly sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 33,
              "IconPhrase": "Clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
          },
          {
            "Date": "2021-11-28T07:00:00+02:00",
            "EpochDate": 1638075600,
            "Temperature": {
              "Minimum": {
                "Value": 64,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 78,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 3,
              "IconPhrase": "Partly sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 35,
              "IconPhrase": "Partly cloudy",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
          },
          {
            "Date": "2021-11-29T07:00:00+02:00",
            "EpochDate": 1638162000,
            "Temperature": {
              "Minimum": {
                "Value": 68,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 81,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 4,
              "IconPhrase": "Intermittent clouds",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 35,
              "IconPhrase": "Partly cloudy",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
          },
          {
            "Date": "2021-11-30T07:00:00+02:00",
            "EpochDate": 1638248400,
            "Temperature": {
              "Minimum": {
                "Value": 70,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 81,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 4,
              "IconPhrase": "Intermittent clouds",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 38,
              "IconPhrase": "Mostly cloudy",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Light"
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
          },
          {
            "Date": "2021-12-01T07:00:00+02:00",
            "EpochDate": 1638334800,
            "Temperature": {
              "Minimum": {
                "Value": 67,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 71,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 6,
              "IconPhrase": "Mostly cloudy",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Light"
            },
            "Night": {
              "Icon": 36,
              "IconPhrase": "Intermittent clouds",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
          }
        ]
      }

    public static CurrentWeather:any = 
        {
          "LocalObservationDateTime": "2021-11-28T00:31:00+02:00",
          "EpochTime": 1638052260,
          "WeatherText": "Mostly clear",
          "WeatherIcon": 34,
          "HasPrecipitation": false,
          "PrecipitationType": null,
          "IsDayTime": false,
          "Temperature": {
            "Metric": {
              "Value": 18.1,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 65,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "RealFeelTemperature": {
            "Metric": {
              "Value": 18,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Pleasant"
            },
            "Imperial": {
              "Value": 64,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Pleasant"
            }
          },
          "RealFeelTemperatureShade": {
            "Metric": {
              "Value": 18,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Pleasant"
            },
            "Imperial": {
              "Value": 64,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Pleasant"
            }
          },
          "RelativeHumidity": 69,
          "IndoorRelativeHumidity": 61,
          "DewPoint": {
            "Metric": {
              "Value": 12.3,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 54,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Wind": {
            "Direction": {
              "Degrees": 135,
              "Localized": "SE",
              "English": "SE"
            },
            "Speed": {
              "Metric": {
                "Value": 6.8,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Imperial": {
                "Value": 4.2,
                "Unit": "mi/h",
                "UnitType": 9
              }
            }
          },
          "WindGust": {
            "Speed": {
              "Metric": {
                "Value": 11.7,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Imperial": {
                "Value": 7.3,
                "Unit": "mi/h",
                "UnitType": 9
              }
            }
          },
          "UVIndex": 0,
          "UVIndexText": "Low",
          "Visibility": {
            "Metric": {
              "Value": 16.1,
              "Unit": "km",
              "UnitType": 6
            },
            "Imperial": {
              "Value": 10,
              "Unit": "mi",
              "UnitType": 2
            }
          },
          "ObstructionsToVisibility": "",
          "CloudCover": 15,
          "Ceiling": {
            "Metric": {
              "Value": 12192,
              "Unit": "m",
              "UnitType": 5
            },
            "Imperial": {
              "Value": 40000,
              "Unit": "ft",
              "UnitType": 0
            }
          },
          "Pressure": {
            "Metric": {
              "Value": 1018.3,
              "Unit": "mb",
              "UnitType": 14
            },
            "Imperial": {
              "Value": 30.07,
              "Unit": "inHg",
              "UnitType": 12
            }
          },
          "PressureTendency": {
            "LocalizedText": "Steady",
            "Code": "S"
          },
          "Past24HourTemperatureDeparture": {
            "Metric": {
              "Value": 0.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 1,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "ApparentTemperature": {
            "Metric": {
              "Value": 19.4,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 67,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "WindChillTemperature": {
            "Metric": {
              "Value": 18.3,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 65,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "WetBulbTemperature": {
            "Metric": {
              "Value": 14.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 59,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Precip1hr": {
            "Metric": {
              "Value": 0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "PrecipitationSummary": {
            "Precipitation": {
              "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
              },
              "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
              }
            },
            "PastHour": {
              "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
              },
              "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
              }
            },
            "Past3Hours": {
              "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
              },
              "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
              }
            },
            "Past6Hours": {
              "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
              },
              "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
              }
            },
            "Past9Hours": {
              "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
              },
              "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
              }
            },
            "Past12Hours": {
              "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
              },
              "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
              }
            },
            "Past18Hours": {
              "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
              },
              "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
              }
            },
            "Past24Hours": {
              "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
              },
              "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
              }
            }
          },
          "TemperatureSummary": {
            "Past6HourRange": {
              "Minimum": {
                "Metric": {
                  "Value": 18.1,
                  "Unit": "C",
                  "UnitType": 17
                },
                "Imperial": {
                  "Value": 65,
                  "Unit": "F",
                  "UnitType": 18
                }
              },
              "Maximum": {
                "Metric": {
                  "Value": 25.1,
                  "Unit": "C",
                  "UnitType": 17
                },
                "Imperial": {
                  "Value": 77,
                  "Unit": "F",
                  "UnitType": 18
                }
              }
            },
            "Past12HourRange": {
              "Minimum": {
                "Metric": {
                  "Value": 18.1,
                  "Unit": "C",
                  "UnitType": 17
                },
                "Imperial": {
                  "Value": 65,
                  "Unit": "F",
                  "UnitType": 18
                }
              },
              "Maximum": {
                "Metric": {
                  "Value": 26.4,
                  "Unit": "C",
                  "UnitType": 17
                },
                "Imperial": {
                  "Value": 80,
                  "Unit": "F",
                  "UnitType": 18
                }
              }
            },
            "Past24HourRange": {
              "Minimum": {
                "Metric": {
                  "Value": 13.4,
                  "Unit": "C",
                  "UnitType": 17
                },
                "Imperial": {
                  "Value": 56,
                  "Unit": "F",
                  "UnitType": 18
                }
              },
              "Maximum": {
                "Metric": {
                  "Value": 26.4,
                  "Unit": "C",
                  "UnitType": 17
                },
                "Imperial": {
                  "Value": 80,
                  "Unit": "F",
                  "UnitType": 18
                }
              }
            }
          },
          "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
        }

    public static defaultCity: any = 
        {
          "Version": 1,
          "Key": "215854",
          "Type": "City",
          "Rank": 31,
          "LocalizedName": "Tel Aviv",
          "Country": {
            "ID": "IL",
            "LocalizedName": "Israel"
          },
          "AdministrativeArea": {
            "ID": "TA",
            "LocalizedName": "Tel Aviv"
          }
        }

    static getIconWeather(iconString:string):string{
      let icon=""; 
      if(iconString>='0' && iconString<='9')
        icon = "0" + iconString;
      else
        icon = iconString;
      return `https://developer.accuweather.com/sites/default/files/${icon}-s.png`
    }
}