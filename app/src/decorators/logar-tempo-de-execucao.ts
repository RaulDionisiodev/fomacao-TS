export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any, //retorna o construtor ou o prototype da classe
        propertyKey: string, // nome do método que foi decorado
        descriptor: PropertyDescriptor// referência para o método original
    ){
        //guarda o comportamento original do método
        const metodoOriginal = descriptor.value;
        //sobrescrevo o comportamento
        descriptor.value = function (...args: Array<any>) {

            let divisor = 1;
            let unidade = 'milissegundos'

            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos'
            }


            const t1 = performance.now();

            //chamada do método original
           const retorno = metodoOriginal.apply(this, args)
            
            const t2 = performance.now();

            console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/divisor} ${unidade}`)

            return retorno;
        }
        return descriptor
    }
}