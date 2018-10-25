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

  return null
}

export default GameData
