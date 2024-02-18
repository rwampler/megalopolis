# megalopolis

[![GitHub release](https://img.shields.io/github/release/rwampler/megalopolis.svg)](https://github.com/rwampler/megalopolis/releases/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Generate random neighborhood, road, and other city infrastructure names

## Example

```js
import { NeighborhoodGenerator, RoadGenerator } from 'megalopolis';

const neighborhoodName: string = NeighborhoodGenerator.generate();
console.log(neighborhoodName);

const roadName: string = NeighborhoodGenerator.generate();
console.log(roadName);
```

## Samples

**Neighborhoods:**

```
Hungry Bronze Atoll
North Orchid Turtle
Middle West Sandbank
Victory Opal Crag
Eastern Shadow
Wide Lilac Evergreen
Enchanted Western Falls
Western Orchid Manatee
Great Sunset Highlands
Crown Cliff
```

**Roads:**

```
W Fair Washington Jungle Road
N Middle Franklin Country Club Rodovia
Mount Bensen Burg Rd
Broad Emerald Waterfall Beltway
Black Elk Loop
Magnolia Bunker Cul-de-sac
Pleasant Ivory Fjord Cul-de-sac
Plaza East Court
Summit Rose Sunray Motorway
New Elk Court
Cottage Parkway
Apricot Warren Boulevard
Mount Busch Salmon Court
Broad Busch Willow Cul-de-sac
Naper Buffalo Plaza
Middle Harriet Woods Crescent
Sequoia Lion Way
Narrow Mahogany Elk North End
Col Highway
Wide Lincoln Cypress St
```

## Installing

```
npm install megalopolis
```

## API Options

**Neighborhood Options**

|Option     | Type                                                   | Description                                                                                                       |
|-----------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
|`seed`     | string &#124; undefined                                | Seed to control random number generator, enabling predictable generation                                          |
|`segments` | Array<Array<string &#124; undefined>> &#124; undefined | Array of name segments, with each segment an array of permitted word library keys. Undefined keys will be skipped |

**Road Options**

|Option     | Type                                                   | Description                                                                                                       |
|-----------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
|`seed`     | string &#124; undefined                                | Seed to control random number generator, enabling predictable generation                                          |
|`segments` | Array<Array<string &#124; undefined>> &#124; undefined | Array of name segments, with each segment an array of permitted word library keys. Undefined keys will be skipped |
|`excludeTypesStandard` | boolean &#124; undefined | Exclude standard street type suffixes; option ignored if segments provided |
|`excludeTypesEnd`      | boolean &#124; undefined | Exclude ending-street type suffixes; option ignored if segments provided |
|`excludeTypesLarge`    | boolean &#124; undefined | Exclude large street type suffixes; option ignored if segments provided |


## Default Segment Templates

**Neighborhood Template**

```
[
  [
    undefined,
    undefined,
    undefined,
    'adjective.size',
    'adjective.location',
    'adjective.status',
    'noun.animal',
    'noun.color',
    'noun.direction',
  ],
  [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    'noun.familyName',
    'noun.lightDisplay',
    'noun.tree'
  ],
  [
    'noun.animal',
    'noun.building',
    'noun.familyName',
    'noun.geography',
    'noun.lightDisplay',
    'noun.tree'
  ]
]
```

**Road Template**

```
[
  [
    undefined,
    undefined,
    undefined,
    undefined,
    'noun.direction.route'
  ],
  [
    undefined,
    undefined,
    undefined,
    'adjective.size',
    'adjective.location',
    'adjective.status'
  ],
  [
    undefined,
    undefined,
    undefined,
    'noun.color',
    'noun.familyName',
    'noun.tree'
  ],
  [
    'noun.animal',
    'noun.building',
    'noun.familyName',
    'noun.geography',
    'noun.lightDisplay',
    'noun.tree'
  ],
  [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    'noun.direction'
  ],
  [
    'noun.road.street',
    'noun.road.street.end',
    'noun.road.street.large'
  ]
]
```

## License

megalopolis is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)

