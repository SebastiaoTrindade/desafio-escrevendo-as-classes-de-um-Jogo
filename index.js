class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou ataque genérico';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

do {

    let nome = prompt('Informe do heroi: ');
    let idade = prompt('Informe a idade do heroi: ');
    let tipo = prompt('Informe o tipo heroi [mago, guerreiro, monge ou ninja]: ');

    let heroi = new Heroi(nome, idade, tipo.toLowerCase()); // Atribui os valores inseridos pelo usuário
    heroi.atacar(); // Chama o método


    let sair = prompt('Deseja criar um novo heroi? [s/n] ');

    if(sair.toLowerCase() === 'n')
        break;

} while(true);