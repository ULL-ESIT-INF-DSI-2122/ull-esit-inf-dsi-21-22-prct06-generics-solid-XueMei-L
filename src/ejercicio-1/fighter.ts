
export abstract class Fighter{
    
    protected status = {
        hp: 0,
        attack: 0,
        defence: 0,
    }   

    /**
     * _Constructor de la clase Pokedex_
     * @param name nombre de fighter
     * @param weight peso de fighter
     * @param height altura de fighter
     * @param type tipo de fighter
     * @param status hp, attack, defence, and speed of fighter
     * @param sentence catching phrase of fighter
     */
    constructor(private readonly name:string, private readonly height:number,
        private readonly weight:number, private readonly type:string, status:number[], private readonly tagline:string) {
            this.name = name;
            this.height = height;
            this.weight = weight;
            this.type = type;
            this.status.hp = status[0];
            this.status.attack = status[1];
            this.status.defence = status[2];
            this.tagline = tagline;
    }

    getName() { return this.name; }
    getHeight() { return this.height; }
    getWeight() { return this.weight; }
    getType() { return this.type; }
    getHP() { return this.status.hp; }
    getAttack() { return this.status.attack; }
    getDefense() { return this.status.defence; }
    getTagline() { return this.tagline; }
    
    /**
     * _Inserter new hp after combat_
     * @param Hp vida de cada fighter
     */
    public setHp(fighterHP:number) { this.status.hp = fighterHP; }

    /**
     * _Method that every fighter has different universe_
     */
    abstract getUniverse():string;

}