#include <stdio.h>

int imprimeBinario(int decimal);

int main(void) {
    //temos quatro pinos: A, B, C, D
    //quando seu valor é 1, está ligado; quando o valor é 0, está desligado.
    //a combinação dos quatro pinos é armazenada em "resultado".
                           // Binário  Decimal
    int apenasA = (1U<<0); // 0b 0001      1
    int apenasB = (1U<<1); // 0b 0010      2
    int apenasC = (1U<<2); // 0b 0100      4
    int apenasD = (1U<<3); // 0b 1000      8
    int nenhum = 0;        // ob 0000      0


    //inicialmente, todos os pinos são desligados.
    int resultado = nenhum;
    imprimeBinario(resultado);

    //ligar apenas A:
    resultado = apenasA;
    printf("Apenas A. Resultado = ");
    imprimeBinario(resultado);

    //ligar C, sem saber o estado dos demais pinos:
    resultado = resultado | apenasC;
    printf("Ligar C = ");
    imprimeBinario(resultado);


    //resultado = apenasA;
    //printf("Comparação: Resultado = %d.  Teste: %d \n", resultado || apenasC, 0 || 0);

    //desligar A, sem saber o estado dos demais pinos:
    //resultado = resultado & ~apenasA;
    //printf("Resultado = %d\n", resultado);

    //inverter o valor de D, sem saber o estado dos demais pinos:
    //resultado = resultado ^ apenasD;
    //printf("Resultado = %d\n", resultado);

    //inverter o valor de D, novamente:
    //resultado = resultado ^ apenasD;
    //printf("Resultado = %d\n", resultado);


    //testes da função imprimeBinario
    imprimeBinario(0);
    imprimeBinario(1);
    imprimeBinario(2);
    imprimeBinario(9);
    imprimeBinario(15);

    
}

int imprimeBinario(int decimal){
    
    if(decimal <= 1) { 
        printf("000%d\n", decimal);
        return 0;
    }

    // encontrar número de dígitos
    int divisor = 2;
    int digitos = 2;
    while((decimal / divisor) > 1){
        digitos++;
        divisor *= 2;
    }

    

    //garantir 4 dígitos
    int i = 0;
    for(i = 0; i < (4 - digitos); i++){
        printf("0");
    }

    //imprimir em binários
    for(i = 0; i < digitos; i++){
        printf("%d", decimal/divisor);
        if(decimal/divisor) { decimal = decimal - divisor; }
        divisor = divisor / 2;
    }
    
    printf("\n");

}