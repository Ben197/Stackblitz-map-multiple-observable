import { of, Observable, combineLatest } from 'rxjs'; 
import { map } from 'rxjs/operators';

import { bonusData } from './data/datatype'
import { compData } from './data/datatype'
import { textData } from './data/datatype'


//not used
/* const source = of('World').pipe(
  map(x => `Hello ${x}!`)
);
source.subscribe(x => console.log(x)); */

/**
 * This app substutes the value of the property conditieOms in the bonusData JSON object with the value of 
 * the property omschrijving in the compData JSON object.
 * 
 * The textData JSON is not yet used in this example
 * 
 * Ben - august '20 2019  - 21:00h cet  Holland.
 */


export function testabc() {

  let httpBonus$ = of(bonusData);
  let httpTeksten$ = of(textData);
  let httpComponents$ = of(compData);

    let finalData$ = combineLatest([
        httpBonus$,
        httpComponents$,
        httpTeksten$
      ]).pipe(map(([aData, bData, cData]) => {

        // Data is in the objects, this is the prove
        console.log(JSON.stringify(aData));
        console.log(JSON.stringify(bData));
        // console.log(JSON.stringify(cData)); for later use
      
        aData.condities.forEach((wa) => {
          wa.conditieOms = bData.components.filter(function (x2) {
            console.log(x2.componentId == wa.conditieId)
            //to test there is minimal and maximal one substitute
            return x2.componentId == wa.conditieId
          })[0].omschrijving
          //changed property conditieOms:
          console.log(wa.conditieOms);
        });
        return aData;
    }));


    finalData$.subscribe(console.log);

    console.log('test');
}
//call function to test
testabc();