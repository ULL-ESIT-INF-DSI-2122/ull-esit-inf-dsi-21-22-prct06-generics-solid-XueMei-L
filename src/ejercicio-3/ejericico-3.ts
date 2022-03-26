import {CaesarCipher} from './ejercicio-3'

let caesarCipher = new CaesarCipher("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
caesarCipher.cipher("HOLAESTOESUNAPRUEBA", "CLAVE");
caesarCipher.decipher("KAMWHEULJVGÑWUUGFXF", "CLAVE");