/**
 * Class CaesarCipher, should to implement cipher() and decipher()
 */
export class CaesarCipher {
    
    // private alfabeto:string;

    constructor(private alphabet:string) {
    }
    
    /**
     * _Method that use the caesar cipher to cipher a message_
     * @param str message to cipher
     * @param key key to help to cipher
     */
    cipher(str:string, key:string):string {
        
        str = str.toLocaleUpperCase();
        let cipher = '';
        for(let i:number = 0, j:number = 0; i < str.length; i++, j++) {
            // let key repite N times
            if((i+1) % key.length == 0) {
                j = 0;
            }

            let newIndex:number = ((this.alphabet.indexOf(str[i])+1) + (this.alphabet.indexOf(key[j])+1));
            newIndex = newIndex % this.alphabet.length;
            cipher += this.alphabet[newIndex-1];
        }
        return cipher;
    }

    /**
     * _Method that to decipher a message using the casear cipher_
     * @param str message to decipher
     * @param key key to help decipher the message
     */
    decipher(str:string, key:string): string {
        str = str.toLocaleUpperCase();
        let decipher = "";
        for(let i:number = 0, j:number = 0; i < str.length; i++, j++) {
            if((i+1) % key.length == 0) {
                j = 0;
            }
            let newIndex:number = ((this.alphabet.indexOf(str[i])+1) - (this.alphabet.indexOf(key[j])+1));
            newIndex = (newIndex + this.alphabet.length) % this.alphabet.length;
            decipher += this.alphabet[newIndex-1];
        }
        return decipher;
    }
    
}