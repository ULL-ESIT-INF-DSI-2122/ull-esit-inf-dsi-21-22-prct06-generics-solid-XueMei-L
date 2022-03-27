
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
        private readonly weight:number, private readonly type:string, status:number[], private readonly sentence:string) {
            this.name = name;
            this.status.hp = status[0];
            this.status.attack = status[1];
            this.status.defence = status[2];

    }

    getName() { return this.name; }
    getWeight() { return this.weight; }
    getHeight() { return this.height; }
    getType() { return this.type; }
    getHP() { return this.status.hp; }
    getAttack() { return this.status.attack; }
    getDefense() { return this.status.defence; }
    
    /**
     * _Inserter new hp after combat_
     * @param Hp vida de cada fighter
     */
    public setHp(fighterHP:number) { this.status.hp = fighterHP; }

    /**
     * _Method that to show informacion of every Fighter_
     */
    public showInforFighter(){
        console.log(`>> Informacion de ` + this.getName() +
                  `\n>> Tipo: ` + this.getType() + 
                  `\n>> Peso: ` + this.getWeight() + 
                  `\n>> Altura: ` + this.getHeight() +
                  `\n>> HP: ` + this.getHP() +
                  `\n>> Ataque: ` + this.getAttack() +
                  `\n>> Defensa: ` + this.getDefense() +
                  `\n>> Universo: ` + this.getUniverse()
        );
    }

    /**
     * _Method that every fighter has different universe_
     */
    abstract getUniverse():string;

}