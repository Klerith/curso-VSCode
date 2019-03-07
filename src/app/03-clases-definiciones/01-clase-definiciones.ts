/*
    Objetivo:
        Ver rápidamente las definiciones de la clase
        También funciona con archivos HTML y otros

    Tips:
        ⌘ P => luego escribir la @
        ⇧ ⌘ O

        Ctrl + P => luego escribir la @
        Ctrl + Shift = O

        Se pueden agrupar si después de la @, se escriben :
*/


class SuperHeroe {

    nombre: string;
    poder: string;
    edad: number;
    pasatiempo: string;

    // tslint:disable-next-line:variable-name
    private _nombreSecreto: string;

    constructor() { }

    usarPoder() {}

    volar() {}

    correr() {}

    caminar() {}

    revivir() {}

    // Sólo para demostración
    // tslint:disable-next-line:member-ordering
    nombre2: string;
    // tslint:disable-next-line:member-ordering
    poder2: string;
    // tslint:disable-next-line:member-ordering
    edad2: number;
    // tslint:disable-next-line:member-ordering
    pasatiempo3: string;

    set nombreSecreto(nombre) {
        this._nombreSecreto = nombre;
    }

    get nombreSecreto() {
        return this._nombreSecreto;
    }
}
