import { Pokedex } from "./pokedex";

export class Combat {
    private pokemon1:Pokedex;
    private pokemon2:Pokedex;

    /**
     * _Constructor de la clase pokemon_
     * @param pokemon1 pokemon1
     * @param pokemon2 pokemon2
     */
    constructor(pokemon1:Pokedex, pokemon2:Pokedex) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    /**
     * _Calcular el ataque de pokemon A hacia pokemon B_
     * @param pokemon_attacker tipo de pokemon atacator
     * @param pokemon_defender tipo de pokemon defensor
     * @param attack el daño que realiza el atacator
     * @param defense el daño que defensa el defensor
     * @returns daño realizado por el defensor
     */
    private pokemonGame(pokemon_attacker:string, pokemon_defender:string, attack:number, defense:number):number{
        let efectiveness: number = 0;
        let damage_total: number = 0;

        if(pokemon_attacker == pokemon_defender){
            efectiveness = 0.5;
        }else{
            switch(pokemon_attacker){
                case "fire":
                    if(pokemon_defender == "grass"){
                        efectiveness = 2;
                    }else if(pokemon_defender == "water"){
                        efectiveness = 0.5;
                    }else{
                        efectiveness = 1;
                    }
                case "water":
                    if(pokemon_defender == "fire"){
                        efectiveness = 0.5;
                    }
                    if(pokemon_defender == "grass" || pokemon_defender == "electric"){
                        efectiveness = 2;
                    }
                case "grass":
                    if(pokemon_defender == "fire"){
                        efectiveness = 0.5;
                    }else if(pokemon_defender == "electric"){
                        efectiveness = 1;
                    }else{
                        efectiveness = 2;
                    }
                case "electric":
                    if(pokemon_defender == "fire" || pokemon_defender == "grass"){
                        efectiveness = 1;
                    }else{
                        efectiveness = 2;
                    }
            }
        }
        
        damage_total = 50 * ( attack / defense ) * efectiveness;
        
        return parseFloat(damage_total.toFixed(0));
    }

    /**
     * _Metodo que realiza el proceso de combate_
     * @returns devuelve el ganador
     */
    public start() {
        console.log(`----------------------------Pokemon Game Start----------------------------\n`);
        console.log(`Historia temporal: 
        Después de salir el bosque negro, tú con tú pokemon "${this.pokemon1.getName()}" estáis yendo 
        al camino No.1 para encontrar tu compañero, en este momento salio un nuevo pokemon 
        "${this.pokemon2.getName()}"`);

        console.log(`\n-------- Tu pokemon: --------`);
        this.pokemon1.showPokemon();

        console.log(`\n-------- Pokemon enemigo: --------`);
        this.pokemon2.showPokemon();
        
        console.log(`\n----------------------------Proceso de combate----------------------------\n`);

        let pokemon1Hp:number = this.pokemon1.getHP();
        let pokemon2Hp:number = this.pokemon2.getHP();
        let round:number = 1;
        
        while (pokemon1Hp > 0 || pokemon2Hp > 0) {
            let damage:number = 0;
            console.log(`\n>> Round: ${round}`);
                
            if(round % 2 != 0) {
                damage = this.pokemonGame(this.pokemon1.getType(), this.pokemon2.getType(), this.pokemon1.getAttack(), this.pokemon2.getDefense());
                console.log(`>> Pokemon "${this.pokemon1.getName()}" ha realizado daño ` + damage + ` a "${this.pokemon2.getName()}"`);
                pokemon2Hp -= damage;
                console.log(`>> Pokemon atacador "${this.pokemon1.getName()}" queda ${pokemon1Hp} hp`);
                console.log(`>> Pokemon defensor "${this.pokemon2.getName()}" queda ${pokemon2Hp} hp`);
            }else{
                damage = this.pokemonGame(this.pokemon2.getType(), this.pokemon1.getType(), this.pokemon2.getAttack(), this.pokemon1.getDefense());
                console.log(`>> Pokemon "${this.pokemon2.getName()}" ha realizado daño ` + damage + ` a "${this.pokemon1.getName()}"`);
                pokemon1Hp -= damage;
                console.log(`>> Pokemon atacador "${this.pokemon2.getName()}" queda ${pokemon2Hp} hp`);
                console.log(`>> Pokemon defensor "${this.pokemon1.getName()}" queda ${pokemon1Hp} hp`);
            }
            if(pokemon1Hp < 0) {
                console.log(`\n>> Ganaste la batalla!! Puedes contener ${this.pokemon2.getName()} usando Poké Ball.`);
                return this.pokemon1.getName();
            }else if(pokemon2Hp < 0){
                console.log(`\n>> Perdiste el combate, tu pokemon ${this.pokemon1.getName()} vuelve a su Poké Ball.`);
                return this.pokemon2.getName();
            }else {
                round++;
            }
        }
    }
}