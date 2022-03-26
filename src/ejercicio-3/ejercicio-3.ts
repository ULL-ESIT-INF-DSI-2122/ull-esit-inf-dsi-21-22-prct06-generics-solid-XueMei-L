
/**
 * Class CaesarCipher, should to implement cipher() and decipher()
 */
export class CaesarCipher {
    
    constructor() {
    }
    
    cipher(str:string, key:string):string {
        
        const alphabet="ABCDEFGHIJKLMNPQRSTUVWXYZ".split("");
        str = str.toLocaleUpperCase();
        
        let cipher = '';
        for(let i:number = 0, j:number = 0; i < str.length; i++, j++) {
            if((i+1) % key.length == 0) {
                j = 0;
            }
            let newIndex:number = alphabet.indexOf(str[i]) + alphabet.indexOf(key[j]);
            newIndex = newIndex % 26;
            cipher += alphabet[newIndex];
        }
        // console.log(`${cipher}`);
        return cipher;
    }
    
}







let a = new CaesarCipher();
a.cipher("HOLAESTOESUNAPRUEBA","CLAVE");
// a.decipher(str);