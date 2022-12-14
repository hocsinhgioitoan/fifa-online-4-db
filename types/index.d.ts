export type languageList = 'en' | 'vn' | 'kr' | 'cn' | 'id' | 'ru' | 'th';

export interface SearchPlayerOptions {
    /**
     * The name of the player to look for.
     */
    name?: string;
    /**
     * Season of the player to look for.
     */
    seasons?: SeasonsList[];
    /**
     * Player's Body.
     */
    bodyTypes?: BodyType[];
    /**
     * Player's position.
     */
    positions?: PositionList[];
    /**
     * The player's club.
     */
    teamColor?: TeamColor[];
    /**
     * Player's salary
     */
    salary?: SearchPlayerOptionMinMax;
    /**
     * Player's height
     */
    height?: SearchPlayerOptionMinMax;
    /**
     * Player's weight
     */
    weight?: SearchPlayerOptionMinMax;
    /**
     * Player's age
     */
    age?: SearchPlayerOptionMinMax;
    /**
     * Player's birthyear
     */
    birthYear?: number;
    /**
     * Workrate - Attack
     */
    attack?: SearchPlayerOptionWorkRate;
    /**
     * Workrate = Defense
     */
    defense?: SearchPlayerOptionWorkRate;
    /**
     * Player reputation
     */
    reputation?: ReputationPlayer;
    /**
     * Player's country
     */
    country?: Country;
    /**
     * Player ovr
     */
    ovr?: SearchPlayerOptionTypeAndOption<
        SearchPlayerOptionOVRType,
        SearchPlayerOptionMinMax
    >[];
    /**
     * Rate skill
     */
    skillMoves?: SkillMove;
    /**
     * player's dominant foot
     */
    preferFoot?: PreferFoot;
    /**
     * ...
     */
    weakFoot?: WeekFoot;
    /**
     * player's hidden stats
     */
    hiddenStats?: HiddenStats[];
    /**
     * All stats
     */
    attributes?: SearchPlayerOptionTypeAndOption<
        Attributes,
        SearchPlayerOptionMinMax
    >[];
}

/**
 * Option for Class Player.
 */
export interface PlayerOptions {
    /**
     * Main language.
     */
    language: languageList;
}
export interface SearchPlayerOptionMinMax {
    min?: number;
    max?: number;
}

export interface SearchPlayerOptionTypeAndOption<T, O> {
    type?: T;
    options?: O;
}

export type SearchPlayerOptionWorkRate = 'mid' | 'low' | 'high';
export interface searchPlayerData {
    /**
     * Name player.
     */
    name: string;
    /**
     * ID Player to get more info
     */
    id?: string;
    /**
     * Image of player
     */
    image?: string;
    /**
     * Season
     */
    season?: {
        /**
         * Name season
         */
        name?: string;
        /**
         * Image Season
         */
        image?: string;
        /**
         * ID of season
         */
        id?: number;
    };
}
export type PreferFoot = 'right' | 'left';
export type SkillMove = '1' | '2' | '3' | '4' | '5';
export type WeekFoot = '1' | '2' | '3' | '4' | '5';
export class Player {
    constructor(protected options: PlayerOptions);
    searchPlayer(options?: SearchPlayerOptions): Promise<PlayerData>;
}

export interface PlayerData {
    data: searchPlayerData[];
    link: string
}
export type SearchPlayerOptionOVRType =
    | 'orv'
    | 'st'
    | 'cf'
    | 'rw'
    | 'cm'
    | 'cam'
    | 'rm'
    | 'cdm'
    | 'rwb'
    | 'rb'
    | 'cb'
    | 'gk';

export type SeasonsList =
    | 'icon'
    | 'coc'
    | '21ucl'
    | '22ty'
    | 'ln'
    | '20ucl'
    | '22tyn'
    | 'lol'
    | '19ucl'
    | '21pl'
    | 'fa'
    | '21ty'
    | '21tyn'
    | 'otw'
    | '20a'
    | '19s'
    | 'boe'
    | '20ty'
    | '20tyn'
    | 'boe21'
    | '19a'
    | '19ty'
    | 'btb'
    | '18s'
    | '18ty'
    | 'cap'
    | '18a'
    | '22ts'
    | 'ebs'
    | 'live'
    | '21ts'
    | 'up'
    | '20'
    | '20ts'
    | 'mc'
    | '19'
    | '19ts'
    | 'vtr'
    | '18'
    | 'nhd'
    | 'mog'
    | '17'
    | 'tb'
    | 'lh'
    | 'ntg'
    | 'tt'
    | '22hr'
    | '19wl'
    | 'gr'
    | '21ng'
    | 'cfa'
    | 'tc'
    | '20ng'
    | 'la'
    | 'hot'
    | '19ng'
    | 'psg'
    | 'mci'
    | 'thl'
    | 'mcc'
    | 'vn'
    | 'tki'
    | 'tkl'
    | '20kl'
    | '20klb'
    | 'k19'
    | 'k18';

export type PositionList =
    | 'st'
    | 'lw'
    | 'rw'
    | 'cf'
    | 'cam'
    | 'lm'
    | 'rm'
    | 'cm'
    | 'lwb'
    | 'cdm'
    | 'rwb'
    | 'lb'
    | 'rb'
    | 'cb'
    | 'gk';

export type BodyType = 'large' | 'normal' | 'small';

export type TeamColor =
    | 'manchester-city'
    | 'liverpool'
    | 'tottenham-hotspur'
    | 'chelsea'
    | 'arsenal'
    | 'manchester-united'
    | 'wolverhampton-wanderers'
    | 'leicester-city'
    | 'everton'
    | 'watford'
    | 'fc-bayern-munchen'
    | 'borussia-dortmund'
    | 'rb-leipzig'
    | 'eintracht-frankfurt'
    | 'bayer-04-leverkusen'
    | 'vfl-wolfsburg'
    | 'fc-barcelona'
    | 'atletico-de-madrid'
    | 'real-madrid'
    | 'valencia-cf'
    | 'rcd-espanyol-de-barcelona'
    | 'piemonte-calcio'
    | 'napoli'
    | 'inter'
    | 'roma-fc'
    | 'milan'
    | 'lazio'
    | 'paris-saint-germain'
    | 'losc-lille'
    | 'olympique-lyonnais'
    | 'olympique-de-marseille'
    | 'holland-eredivisie'
    | 'ajax'
    | 'psv'
    | 'jeonbuk-hyundai-motors'
    | 'ulsan-hyundai'
    | 'fc-seoul'
    | 'daegu-fc'
    | 'sangju-sangmu-fc'
    | 'seongnam-fc'
    | 'gangwon-fc'
    | 'pohang-steelers'
    | 'gyeongnam-fc'
    | 'suwon-samsung-bluewings'
    | 'incheon-united-fc'
    | 'jeju-united-fc'
    | 'guangzhou-fc'
    | 'shanghai-port-fc'
    | 'jiangsu-suning'
    | 'shandong-taishan'
    | 'chongqing-liangjiang-athletic'
    | 'tianjin-jinmen-tiger-fc'
    | 'guangzhou-city'
    | 'shanghai-shenhua';

export type ReputationPlayer =
    | 'regular-player'
    | 'famous-player'
    | 'top-class'
    | 'world-class'
    | 'legendary';

export type Country =
    | 'afghanistan'
    | 'albania'
    | 'algeria'
    | 'american-samoa'
    | 'andorra'
    | 'angola'
    | 'anguilla'
    | 'antigua-and-barbuda'
    | 'argentina'
    | 'armenia'
    | 'aruba'
    | 'australia'
    | 'austria'
    | 'azerbaijan'
    | 'bahamas'
    | 'bahrain'
    | 'bangladesh'
    | 'barbados'
    | 'belarus'
    | 'belgium'
    | 'belize'
    | 'benin'
    | 'bermuda'
    | 'bhutan'
    | 'bolivia'
    | 'bosnia-herzegovina'
    | 'botswana'
    | 'brazil'
    | 'british-virgin-is'
    | 'brunei-darussalam'
    | 'bulgaria'
    | 'burkina-faso'
    | 'burundi'
    | 'cambodia'
    | 'cameroon'
    | 'canada'
    | 'cape-verde-islands'
    | 'cayman-islands'
    | 'central-african-rep'
    | 'chad'
    | 'chile'
    | 'china-pr'
    | 'chinese-taipei'
    | 'colombia'
    | 'comoros'
    | 'congo'
    | 'cook-islands'
    | 'costa-rica'
    | 'created-players-country'
    | 'creation-zone'
    | 'croatia'
    | 'cuba'
    | 'cura??ao'
    | 'cyprus'
    | 'czech-republic'
    | 'denmark'
    | 'djibouti'
    | 'dominica'
    | 'dominican-republic'
    | 'dr-congo'
    | 'ecuador'
    | 'egypt'
    | 'el-salvador'
    | 'england'
    | 'equatorial-guinea'
    | 'eritrea'
    | 'estonia'
    | 'ethiopia'
    | 'faroe-islands'
    | 'fiji'
    | 'finland'
    | 'france'
    | 'free-agents-country'
    | 'fyr-macedonia'
    | 'gabon'
    | 'gambia'
    | 'georgia'
    | 'germany'
    | 'ghana'
    | 'gibraltar'
    | 'greece'
    | 'greenland'
    | 'grenada'
    | 'guam'
    | 'guatemala'
    | 'guinea'
    | 'guinea-bissau'
    | 'guyana'
    | 'haiti'
    | 'holland'
    | 'honduras'
    | 'hong-kong'
    | 'hungary'
    | 'iceland'
    | 'india'
    | 'indonesia'
    | 'international'
    | 'iran'
    | 'iraq'
    | 'ireland-republic'
    | 'israel'
    | 'italy'
    | 'ivory-coast'
    | 'jamaica'
    | 'japan'
    | 'jordan'
    | 'kazakhstan'
    | 'kenya'
    | 'korea-dpr'
    | 'korea-republic'
    | 'kuwait'
    | 'kyrgyzstan'
    | 'laos'
    | 'latvia'
    | 'lebanon'
    | 'lesotho'
    | 'liberia'
    | 'libya'
    | 'liechtenstein'
    | 'lithuania'
    | 'luxembourg'
    | 'macau'
    | 'madagascar'
    | 'malawi'
    | 'malaysia'
    | 'maldives'
    | 'mali'
    | 'malta'
    | 'mauritania'
    | 'mauritius'
    | 'mexico'
    | 'moldova'
    | 'mongolia'
    | 'montenegro'
    | 'montserrat'
    | 'morocco'
    | 'mozambique'
    | 'myanmar'
    | 'namibia'
    | 'nepal'
    | 'new-caledonia'
    | 'new-zealand'
    | 'nicaragua'
    | 'niger'
    | 'nigeria'
    | 'northern-ireland'
    | 'norway'
    | 'oman'
    | 'pakistan'
    | 'palestinian-authority'
    | 'panama'
    | 'papua-new-guinea'
    | 'paraguay'
    | 'peru'
    | 'philippines'
    | 'poland'
    | 'portugal'
    | 'puerto-rico'
    | 'qatar'
    | 'rest-of-world'
    | 'romania'
    | 'russia'
    | 'rwanda'
    | 'samoa'
    | 'san-marino'
    | 's??o-tom??-and-pr??ncipe'
    | 'saudi-arabia'
    | 'scotland'
    | 'senegal'
    | 'serbia'
    | 'seychelles'
    | 'sierra-leone'
    | 'singapore'
    | 'slovakia'
    | 'slovenia'
    | 'solomon-islands'
    | 'somalia'
    | 'south-africa'
    | 'south-sudan'
    | 'spain'
    | 'sri-lanka'
    | 'st-kitts-nevis'
    | 'st-lucia'
    | 'st-vincent-and-the-grenadines'
    | 'sudan'
    | 'suriname'
    | 'swaziland'
    | 'sweden'
    | 'switzerland'
    | 'syria'
    | 'tahiti'
    | 'tajikistan'
    | 'tanzania'
    | 'thailand'
    | 'timor-leste'
    | 'togo'
    | 'tonga'
    | 'trinidad-and-tobago'
    | 'tunisia'
    | 'turkey'
    | 'turkmenistan'
    | 'turks-and-caicos-islands'
    | 'uganda'
    | 'ukraine'
    | 'united-arab-emirates'
    | 'united-states'
    | 'uruguay'
    | 'us-virgin-islands'
    | 'uzbekistan'
    | 'vanuatu'
    | 'venezuela'
    | 'vietnam'
    | 'wales'
    | 'yemen'
    | 'zambia'
    | 'zimbabwe';

export type HiddenStats =
    | 'acrobatic-clearance'
    | 'argues-with-officials'
    | 'avoids-using-weaker-foot'
    | 'backs-into-player'
    | 'corner-specialist'
    | 'diver'
    | 'dives-into-tackles'
    | 'early-crosser'
    | 'finesse-free-kick'
    | 'finesse-shot'
    | 'flair'
    | 'giant-throw-in'
    | 'gk-cautious-with-crosses'
    | 'gk-comes-for-crosses'
    | 'gk-long-thrower'
    | 'gk-one-on-ones'
    | 'inflexibility'
    | 'injury-prone'
    | 'leadership'
    | 'long-passer'
    | 'long-shot-taker'
    | 'long-throw-in'
    | 'one-club-player'
    | 'outside-foot-shot'
    | 'play-maker'
    | 'power-header'
    | 'puncher'
    | 'pushes-up-for-corners'
    | 'second-wind'
    | 'selfish'
    | 'shooting-chip-shot'
    | 'solid-player'
    | 'speed-dribbler'
    | 'sweeper-keeper'
    | 'swerve'
    | 'takes-powerful-driven-free-kicks'
    | 'target-forward'
    | 'team-player'
    | 'technical-dribbler'
    | 'tries-to-beat-offside-trap';

type Attributes =
    | 'sprintspeed'
    | 'acceleration'
    | 'finishing'
    | 'shotpower'
    | 'longshots'
    | 'positioning'
    | 'volleys'
    | 'penalties'
    | 'shortpassing'
    | 'vision'
    | 'crossing'
    | 'longpassing'
    | 'freekickaccuracy'
    | 'curve'
    | 'dribbling'
    | 'ballcontrol'
    | 'agility'
    | 'balance'
    | 'reactions'
    | 'marking'
    | 'standingtackle'
    | 'interceptions'
    | 'headingaccuracy'
    | 'slidingtackle'
    | 'strength'
    | 'stamina'
    | 'aggression'
    | 'jumping'
    | 'composure'
    | 'gkdiving'
    | 'gkhandling'
    | 'gkkicking'
    | 'gkreflexes'
    | 'gkpositioning';
