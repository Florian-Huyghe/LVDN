
const txtAnim = document.getElementById('typewriter-effect');

new Typewriter(txtAnim, {
    deleteSpeed: 20
})
.changeDelay(35)
.typeString('L\'histoire de <strong>La Voix du Nord</strong> a débuté il y a près de quatre-vingts ans avec la création d\'un journal clandestin qui résistait à la propagande de l\'occupant allemand.<br>')
.pauseFor(300)
.typeString(' Depuis lors,')
.pauseFor(150)
.typeString('<a href="https://www.lavoixdunord.fr/" target="_blank"> Ce journal</a> est restée un acteur incontournable de l\'histoire du Nord et du Pas-de-Calais.<br>')
.pauseFor(300)
.typeString('Chaque jour,')
.pauseFor(150)
.typeString(' l\'entreprise se renouvelle pour fournir une information de qualité aux habitants de la région,')
.pauseFor(150)
.typeString(' avec lesquels elle entretient des liens profonds et durables. <br><br>')
.pauseFor(300)
.typeString(' ( sources : <a href="https://www.lavoixdunord.fr/960858/article/2021-03-16/notre-histoire" target="_blank"> La voix du Nord : Notre histoire </a> )')
.start();
