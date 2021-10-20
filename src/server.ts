import {app} from './config/index.ts';


async function main(){
    const app = new app (4000);
    await app.listen(); 
}
    
}

main();