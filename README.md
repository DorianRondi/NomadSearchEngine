NomadSearchEngine
=================

Moteur de recherche entièrement en JavaScript qui peut être utilisé pour n'importe quel type de données avec peu de modifications du fichier `script.js`.
Outils que j'ai créer pour une utilisation personnel mais que je laisse ici a disposition.
> **_Dorian R._**

How to modify
-------------

* ### Modify DisplayCard
Modifiez la class `DisplayCard` selon vos besoin en pensant aux données utiles que vous voulez afficher dans les cards

* ### Modify createCard
Modifiez la fonction `createCard` pour afficher vos données selon vos gouts dans les cards.

Il est préférable de ne pas modifier les constantes précédent `cardBody` pour conserver la cohérence des card.

Pour le CSS, BootStrap 5.3.2 est linké, mais vous pouvez modifié le CSS si nécéssaire mais seulement dans la section /// CUSTOM CSS ///

* ### Make datas
Vous pouvez maintenant remplir la base de données mobile dans la section // DATABASES // en respectant l'architecture suivante:

```
const Interface = {
   interfaceName: new Interface(_category, _label),
}
const database = {
    interfaceName: {
        dataName: new DisplayCard(_Property_1, _Property_2, _Property_3, ...)
    }
}
```

il est IMPORTANT que le nom d'une database soit identique à celle d'une interface. Ainsi les cards seront rangées dans la bonne catégorie

* ### Import Icons
J'ai utilisé des SVG de [FontAwesome](https://fontawesome.com/) que j'ai copié dans la section SVGs du fichier HTML.
copiez les SVG dans cette section en tant que `<symbol>` et utilisez et créer lui une classe tel que `interfaceNameSVG` pour que la fonction retrouve quel icone doit être utilisée pour quel section dans le menu vertical

Evidement vous pouvez importer des PNG. Mais dans ce cas il vous faudra modifier la fonction `createInterface` et créer le CSS pour les adapter.

* ### Modify Background
Enfin vous pouvez modifier le background de l'application dans le CSS dans la variable `--bg-img` du selecteur `body`

Pour ma version j'ai utlisé l'API de Unsplash pour avoir un background différent à chaque chargement de l'application.

Pour connaitre les règles de cette API : [Unsplash API](https://awik.io/generate-random-images-unsplash-without-using-api/)

* #### Bonus
En bonus, une section est destinée uniquement à admirer vos backgrounds