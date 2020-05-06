const minhaString = "Oi, meu nome é Amanda";
const meuArray = ['Mello', "Hamilton", "Julian", "Sagan", "Bouman", "Newton"];

minhaString.length;
//includes é case sensitive
minhaString.includes('M');
//se colocar m não inclui o m no array
minhaString.split('');

console.log(minhaString);
console.log(minhaString.length);
console.log(minhaString.includes('M'));
console.log(minhaString.split(''));


meuArray.length;
//Adiciona elemento ao final do array
meuArray.push('Lovelace');
//Retorna o index do elemento e retorna -1 quando não consegue achar
meuArray.indexOf("Julian");
//Exclui o último elemento do array
meuArray.pop();
//Recebe o index a partir do qual deve começar a tirar e quantos elementos deve tirar
meuArray.splice(2, 2);
meuArray.splice(meuArray.indexOf("Sagan"), 1);

console.log(meuArray);