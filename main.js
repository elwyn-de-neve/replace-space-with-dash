/*
Lesopdracht 1: Replace " " with "-"

De oplettende student heeft gemerkt dat er een foutje in edHub staat.
Bij de String methode replace staat dat alle instanties van de gespecificeerde karakters worden vervangen met de nieuwe waarde.

Dat zou betekenen dat de volgende methode de uitkomst "Oost-west-thuis-best" genereert.

    let string = "Oost west thuis best"
    console.log(string.replace(" ", "-"))

Echter, wie dit had uitgeprobeerd, was er achter gekomen dat dit alleen bij het eerste voorval het geval was.
De daadwerkelijke uitkomst is dus: "Oost-west thuis best"

Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

Hoe kunnen we dan alsnog een functie schrijven die alle spaties vervangt met streepjes?
Probeer eerst voor jezelf te bedenken welke stappen je nodig hebt.

Mocht je er zelf niet uitkomen, dan tref je hieronder het stappenplan dat je kunt gebruiken:

1. Maak de variable aan met de waarde "Oost west thuis best" en zorg dat we deze later kunnen overschrijven
2. Creëer een functie genaamd replaceSpaceWithDash
3. Loop door de lengte van het String object heen (Een String object heeft net als een array een length property) *
4. Check of het huidige (i) karakter overeenkomt met een spatie *
5. Als dit waar is, vervang de huidige (i) spatie met een streepje en sla deze op in de variabele *
6. Return de uitkomst van de functie
7. Log de functie en geef de variabele mee als argument (tijdens het aanroepen)

* gebruik hiervoor een String methode

*/

let string = "Oost west thuis best";

function replaceSpaceWithDash( param ) {
    for ( let i = 0; i < string.length; i++ ) {
        if ( string.charAt(i) === " " ) {
            string = string.replace(string.charAt(i), "-")
        }
    }
    return string
}

console.log( replaceSpaceWithDash( string ) )
