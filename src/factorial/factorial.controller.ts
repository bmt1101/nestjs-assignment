import { Controller, Get, Param } from '@nestjs/common';

@Controller('factorial')
export class FactorialController {

    @Get(':n')
    calculateFactorial(@Param('n') n: string): { factorial: number } {
        const numberN = parseInt(n, 10);
        const factorial = this.factorial(numberN);

        return { factorial };
    }

    private factorial(n: number): number {
        if (n === 0) return 1; 

        let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        
        return factorial;
    }
}
