import { Controller, Get, Param } from '@nestjs/common';

@Controller('fibonacci')
export class FibonacciController {

    @Get(':n') 
    generateFibonacci(@Param('n') n: string): { sequence: number[] }
    {
        const numberN = parseInt(n, 10);
        const sequence = this.fibonacci(numberN);

        return { sequence };
    }

    private fibonacci(n: number): number[] {
        const sequence: number[] = [];
        let a = 0, b = 1;

        for (let i = 0; i < n; i++) {
            sequence.push(a);
            const next = a + b;
            a = b;
            b = next;
        }

        return sequence;
    }

}
