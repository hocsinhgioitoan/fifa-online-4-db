## About this project
This is the package about the player database of fifa online 4, use fifaaddict.com to code, feel free when open pull request or issue
- Easy to use
- Docs: [here](https://hocsinhgioitoan.github.io/fifa-online-4-db/index.html)
### TODO / Features
- [x] i don't know :))

### Installation
```sh
npm i @hongbeccodeduocchua/fo4-db@latest
```
### Example
- Search player
```ts 
import * as fo4 from '@hongbeccodeduocchua/fo4-db';

const player = new fo4.Player({ language: 'vn' });
async function get() {
    const data = await player.searchPlayer({
        country: 'brazil',
        birthYear: 1976,
        seasons: ['icon'],
        skillMoves: '5',
        defense: 'mid',
        attack: 'mid',
        bodyTypes: ['normal'],
        height: {
            min: 183,
        },
        weight: {
            max: 78,
        },
        ovr: [
            {
                type: 'cf',
                options: {
                    min: 112,
                },
            },
        ],
        reputation: 'legendary',
        salary: {
            min: 27
        },
        teamColor: ['real-madrid']
    });
    console.log(data);
}
get();


```
Data: 
```ts
[
  {
    name: 'Ronaldo ',
    id: 'pidawdalybm',
    image: 'https://s1.fifaaddict.com/fo4/players/awdalybm.png?20220630',
    season: {
      name: 'ICON (ICON)',
      image: 'https://ssl.nexon.com/s2/game/fo4/obt/externalAssets/season/icon.png',
      id: 101
    }
  }
]
```

### P/s
For educational and learning purposes
