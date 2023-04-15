export async function getData(){
    try{
        const data = await fetch('https://api.chucknorris.io/jokes/random?category=ya se como pero no me da el tiempo').then(res => res.json());
        console.log(data);
        return data;
    } catch(error){
        console.error(error);
    }
}