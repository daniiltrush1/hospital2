import {Hospital} from './Hospital'
import {Ward} from './Ward'
import * as readline from 'readline';

const writeQuestion = (question) => new Promise((resolve, reject) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout  
    });
    rl.question(question, (answer) => {
        resolve(answer)
        rl.close()
    });
    
    
})

const app = async ():Promise<void> => {
    const hospital = new Hospital();
    hospital.registerWard(4)
    //hospital.registerPatient('Oleg',34)
const answer = await writeQuestion('how are you?')
console.log(answer)
const answer2 = await writeQuestion('where are you?')
console.log(answer2)

} 
 
app();