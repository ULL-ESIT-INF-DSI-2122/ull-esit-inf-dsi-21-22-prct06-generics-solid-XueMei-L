import {CaesarCipher} from './CaesarCipher'

let caesarCipher = new CaesarCipher("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
caesarCipher.cipher("HOLAESTOESUNAPRUEBA", "CLAVE");
caesarCipher.decipher("KAMWHEULJVGÑWUUGFXF", "CLAVE");