import axios from 'axios';
import cheerio from 'cheerio';
import {
    PlayerData,
    PlayerOptions,
    searchPlayerData,
    SearchPlayerOptions,
} from '../../types';
import seasons from '../data/season';
/**
 * Class Player
 * ```ts
 * import { Player } from '@hongbeccodeduocchua/fo4-db';
 * const player = new Player({ language: 'en' });
 * ```
 */
export class Player {
    /**
     * Link to get info about player
     */
    private link: string;
    constructor(protected options: PlayerOptions) {
        this.link = 'https://<lang>.fifaaddict.com';
    }
    /**
     * Find player by options.
     * Ex:
     * Code:
     * ```ts
     * import * as fo4 from '@hongbeccodeduocchua/fo4-db';
     * // const fo4 = require('@hongbeccodeduocchua/fo4-db')
     * const player = new fo4.Player({language: 'vn'});
     * async function get() {
     *     const data = await player.searchPlayer({
     *         name: 'Phil foden',
     *         seasons: ['22ts']
     *     });
     *     console.log(data.link);
     * }
     * get()
     * ```
     * Data:
     * ```ts
     * [
     *   {
     *     name: 'P. Foden ',
     *     id: 'pidqvmwlbpo',
     *     image: 'https://s1.fifaaddict.com/fo4/players/qvmwlbpo.png?20220630',
     *     season: {
     *       name: '22 TOTS (22 Team Of The Season)',
     *       image: 'https://ssl.nexon.com/s2/game/fo4/obt/externalAssets/season/22tots.png',
     *       id: 267
     *     }
     *   }
     *]
     *```
     */
    async searchPlayer(options?: SearchPlayerOptions) {
        const baseLink = this.link.replace(
            '<lang>',
            this.options.language || 'en'
        );
        const afterLink =
            baseLink +
            `/fo4db?a=0${
                options?.name
                    ? `&playername=${encodeURIComponent(
                          options.name.toLowerCase()
                      )}`
                    : options?.name?.length === 0
                    ? '&order=ovr'
                    : ''
            }${options?.seasons ? `&class=${options.seasons.join(',')}` : ''}${
                options?.bodyTypes
                    ? `&bodytype=${options.bodyTypes.join(',')}`
                    : ''
            }${
                options?.positions ? `&pos=${options.positions.join(',')}` : ''
            }${
                options?.teamColor
                    ? `&teamcolor=${options.teamColor
                          .filter((v, i) => i <= 2)
                          .join(',')}`
                    : ''
            }${
                options?.salary
                    ? minMax({
                          value: 'salary',
                          min: options.salary.min,
                          max: options.salary.max,
                      })
                    : ''
            }${
                options?.weight
                    ? minMax({
                          value: 'weight',
                          min: options.weight.min,
                          max: options.weight.max,
                      })
                    : ''
            }${
                options?.height
                    ? minMax({
                          value: 'height',
                          min: options.height.min,
                          max: options.height.max,
                      })
                    : ''
            }${
                options?.age
                    ? minMax({
                          value: 'age',
                          min: options.age.min,
                          max: options.age.max,
                      })
                    : ''
            }${
                options?.birthYear
                    ? options.birthYear > 2550 || options.birthYear <= 0
                        ? `&birthyear=1900`
                        : `&birthyear=${options.birthYear}`
                    : ''
            }${options?.attack ? `&workrate_att=${options.attack}` : ''}${
                options?.defense ? `&workrate_def=${options.defense}` : ''
            }${options?.country ? `&country=${options.country}` : ''}${
                options?.reputation ? `&reputation=${options?.reputation}` : ''
            }${
                options?.ovr
                    ? options.ovr
                          .filter((v, i) => i <= 5)
                          .map((v, i) =>
                              minMax({
                                  value: 'orv',
                                  max: v.options?.max,
                                  min: v.options?.min,
                                  textBefore: `${v.type}_`,
                              })
                          )
                    : ''
            }${options?.skillMoves ? `&skillmoves=${options.skillMoves}` : ''}${
                options?.weakFoot ? `&skillmoves=${options.weakFoot}` : ''
            }${options?.preferFoot ? `&skillmoves=${options.preferFoot}` : ''}${
                options?.hiddenStats
                    ? `&trait=${options.hiddenStats
                          .filter((v, i) => i <= 5)
                          .join(',')}`
                    : ''
            }${
                options?.attributes
                    ? options.attributes
                          .filter((v, i) => i <= 5)
                          .map((v, i) =>
                              minMax({
                                  value: 'attr',
                                  max: v.options?.max,
                                  min: v.options?.min,
                                  textBefore: `${v.type}_`,
                              })
                          )
                    : ''
            }`;
        const resp = await axios.get(afterLink);
        if (resp.status !== 200) throw Error('Api is down');
        const $ = cheerio.load(resp.data);
        const listPlayers: searchPlayerData[] = [];
        $('.info-inner').each((i, el) => {
            const name = $(el).find('a').text();
            const id = $(el).find('a').attr('href')?.split('/')[2];
            const image = $(el).find('img').attr('src');
            const season = $(el)
                .find('a')
                .find('img')
                .attr('class')
                ?.split('y')[1];
            const searchSeason = seasons.find(
                (v, i) => v.seasonId === Number(season)
            );
            listPlayers.push({
                name: name,
                id: id,
                image: image,
                season: {
                    name: searchSeason?.className,
                    image: searchSeason?.seasonImg,
                    id: searchSeason?.seasonId,
                },
            });
        });
        return {
            data: listPlayers,
            link: afterLink
        } as PlayerData;
    }
    
}
const minMax = (options: {
    value: string;
    min?: number;
    max?: number;
    textBefore?: string;
}) => {
    return `&${options.value}=${options.textBefore ? options.textBefore : ''}${
        (options.min || 0) <= 0 ? 0 : options.min
    }${options.max ? `-${(options.max || 0) <= 0 ? 0 : options.max}` : ''}`;
};
