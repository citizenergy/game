import Papa from 'papaparse'

import CITIESURL from './citizenergy_game_data - city.csv'
import ENERGYCATEGORIESURL from './citizenergy_game_data - category.csv'
import ENERGYTYPESURL from './citizenergy_game_data - energy.csv'
import PLANTSURL from './citizenergy_game_data - plant.csv'

const GameData = (props) => {

  if (!props.gameData.city_or_country) {
    const city_or_country = {city: new Set(), country: new Set()}
    Papa.parse(CITIESURL, {
      download: true,
      header: true,
      complete: (results, file) => {
        results.data.forEach((row, rowIndex) => {
          if (row.city === 'TRUE') {
            city_or_country.city.add(row.id)
          }
          if (row.country === 'TRUE') {
            city_or_country.country.add(row.id)
          }
        })
        props.handleDataLoad({key: 'city_or_country', value: city_or_country})
      }
    })
  }

  if (!props.gameData.power_plant) {
    const power_plant = {}
    Papa.parse(ENERGYCATEGORIESURL, {
      download: true,
      header: true,
      complete: (results, file) => {
        results.data.forEach((row, rowIndex) => {
          power_plant[row.id] = new Set()
        })
        parseTypes2Categories()
      }
    })
    const parseTypes2Categories = () => {
      Papa.parse(ENERGYTYPESURL, {
        download: true,
        header: true,
        complete: (results, file) => {
          let types = {}
          results.data.forEach((row, rowIndex) => {
            types[row.id] = row.category_id
          })
          parsePlants2Types(types)
        }
      })
    }
    const parsePlants2Types = (types) => {
      Papa.parse(PLANTSURL, {
        download: true,
        header: true,
        complete: (results, file) => {
          results.data.forEach((row, rowIndex) => {
            power_plant[types[row.energy_id]].add(row.city_id)
          })
          props.handleDataLoad({key: 'power_plant', value: power_plant})
        }
      })
    }
  }

  if (!props.gameData.power_saving_policy) {
    const power_saving_policy = {
      industry_analysis: new Set([
        'yilan_county',
        'new_taipei_city',
        'chiayi_county',
        'kaohsiung_city',
        'yunlin_county',
        'taoyuan_city',
        'taichung_city'
      ]),
      home_diagnosis: new Set([
        'taipei_city',
        'chiayi_city',
        'hsinchu_city',
        'hsinchu_county',
        'tainan_city'
      ]),
      retiring_subsidy: new Set([
        'keelung_city',
        'miaoli_county',
        'nantou_county',
        'pingtung_county',
        'taitung_county',
        'changhua_county',
        'hualien_county'
      ])
    }
    props.handleDataLoad({key: 'power_saving_policy', value: power_saving_policy})
  }

  if (!props.gameData.renewable_energy_policy) {
    const renewable_energy_policy = {
      smart_complex: new Set([
        'taipei_city',
        'new_taipei_city',
        'chiayi_city',
        'taoyuan_city',
      ]),
      public_service: new Set([
        'pingtung_county',
        'yilan_county',
        'yunlin_county',
        'chiayi_county',
        'kaohsiung_city',
        'taichung_city',
        'tainan_city',
        'changhua_county'
      ])
    }
    props.handleDataLoad({key: 'renewable_energy_policy', value: renewable_energy_policy})
  }

  if (!props.gameData.participatory_policy) {
    const participatory_policy = {
      money_back: new Set([
        'yilan_county',
        'pingtung_county'
      ]),
      policy_making: new Set([
        'new_taipei_city'
      ])
    }
    props.handleDataLoad({key: 'participatory_policy', value: participatory_policy})
  }

  return null
}

export default GameData
