#include <stdio.h>

int main(void){
    int num1 = 10;
    int num2 = 20;
    int num3 = 30;
    int num4 = 40;

    if(num1 > 5){
        printf("num1 é igual a %d. num1 é maior do que 5.\n", num1);
    }


    if(!(num1 > 10)){
        printf("num1 é igual a %d. num1 não é maior do que 10.\n", num1);
    }

    if((num1 > 20) || (num2 > 10)){
        printf("(num1 > 20) || (num2 > 10)\n");
    }

    return 0;
}