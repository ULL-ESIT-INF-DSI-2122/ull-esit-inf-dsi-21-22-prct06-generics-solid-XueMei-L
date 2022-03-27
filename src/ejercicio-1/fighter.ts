/**
 * _abstract class Fighteer_
 */
export abstract class Fighter{
    
    protected status = {
        hp: 0,
        attack: 0,
        defence: 0,
    }   

    /**
     * _Constructor of fighter_
     * @param name fighter name
     * @param height fighter's height
     * @param weight fighter's weight
     * @param type fighter's type
     * @param hp fighter's hp
     * @param attack fighter's attack
     * @param defense fighter's defense
     * @param tagline fighter's tagline
     */
    constructor(private readonly name:string, private readonly height:number,
        private readonly weight:number, private readonly type:string, 
        private hp:number, private readonly attack:number, 
        private readonly defense:number, private readonly tagline:string) {
            this.name = name;
            this.height = height;
            this.weight = weight;
            this.type = type;
            this.hp = hp;
            this.attack = attack;
            this.defense = defense;
            this.tagline = tagline;
    }

    /**
     * _Get fighter's name_
     */
    getName() { return this.name; }

    /**
     * _Get fighter's height_
     */
    getHeight() { return this.height; }
    
    /**
     * _Get fighter's weight_
     */
    getWeight() { return this.weight; }

    /**
     * _Get fighter's type_
     */
    getType() { return this.type; }

    /**
     * _Get fighter's hp_
     */
    getHP() { return this.hp; }

    /**
     * _Get fighter's attack_
     */
    getAttack() { return this.attack; }

    /**
     * _Get fighter's defense_
     */
    getDefense() { return this.defense; }
    
    /**
     * _Get fighter's tagline_
     */
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