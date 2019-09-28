import { UnitOfMeasurementType } from '../interfaces/interfaces';
import { ComponentChangeType }  from '../interfaces/interfaces';
import { ConditieTypeObject } from '../interfaces/interfaces';


export const textData : UnitOfMeasurementType = {
  "teksten": [
    {
      "tekstcode": "COMPEHD",
      "waarden": [
        {
          "code": "B",
          "omschrijving": "Bedrag"
        },
        {
          "code": "P",
          "omschrijving": "Percentage"
        }
      ]
    },
    {
      "tekstcode": "PERIODIEK",
      "waarden": [
        {
          "code": "H",
          "omschrijving": "Per half jaar"
        },
        {
          "code": "J",
          "omschrijving": "Per jaar"
        },
        {
          "code": "K",
          "omschrijving": "Per kwartaal"
        },
      ]
    }
  ]
}

export const compData : ComponentChangeType = {
  "components": [
    {
      "componentId": "BASFD",
      "omschrijving": "Assortimentsbonus",
      "tarief": 0,
      "isActief": true
    },
    {
      "componentId": "BBY",
      "omschrijving": "Bonus bypass",
      "tarief": 0,
      "isActief": true
    },
    {
      "componentId": "BCEFD",
      "omschrijving": "Bonus centraal leveren/ logistieke vergoeding",
      "tarief": 0,
      "isActief": true
    }
  ]
}

export const bonusData : ConditieTypeObject = {
    "condities": [
      {
        "contractId": 2,
        "conditieId": "BCEFD",
        "conditieOms": "Zelf ophalen",
        "eenheidId": "P",
        "eenheidOms": "Zelf ophalen",
      },
      {
        "contractId": 3,
        "conditieId": "BBY",
        "conditieOms": "Zelf ophalen",
        "eenheidId": "A",
        "eenheidOms": "Zelf ophalen",
      }
    ]
  }