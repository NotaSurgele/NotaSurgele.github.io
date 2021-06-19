function onLoad() {
    var data = {"blocks":[{"block_title":"Les immanquables","links":[{"title":"Hauts","url":"/hauts","thumbnail":"https://cdn.zoo-host.com/intehtml/assets/img/photo-hauts-rond.png"},{"title":"Robes","url":"/robes","thumbnail":"https://cdn.zoo-host.com/intehtml/assets/img/photo-robes-rond.png"},{"title":"Must Have","url":"/must-have","thumbnail":"https://cdn.zoo-host.com/intehtml/assets/img/photo-must-have-rond.png"}]},{"block_title":"La s\u00e9lection LADRESS","posts":[{"title":"Robe noire","url":"/robe-noire","price":"329","coup_de_coeur":true,"new":true,"thumbnail":"https://cdn.zoo-host.com/intehtml/assets/img/produit_01.jpg"},{"title":"Ensemble rouge","url":"/ensemble-rouge","price":"320","discount":"149","coup_de_coeur":false,"thumbnail":"https://cdn.zoo-host.com/intehtml/assets/img/produit_02.jpg"},{"title":"Short noir","url":"/short-noir","price":"125","coup_de_coeur":true,"new":true,"thumbnail":"https://cdn.zoo-host.com/intehtml/assets/img/produit_03.jpg"},{"title":"Haut noir","url":"/haut-noir","price":"125","discount":"69","coup_de_coeur":false,"thumbnail":"https://cdn.zoo-host.com/intehtml/assets/img/produit_04.jpg"}]}]};
    function firstBlock(data) {
        var blocks = data.blocks;
        var titles = blocks[0].block_title;
        document.getElementById('immanquables').innerHTML = `<p class="title">${titles}</p>`;
        for (let size = 0; size != blocks[0].links.length; size++) {
            const thumbnail = blocks[0].links[size].thumbnail;
            const photo_title = blocks[0].links[size].title;
            const url = blocks[0].links[size].url;
            document.getElementById('immanquables').innerHTML +=
                `<div class="obj">
                    <img class="photo" src=${thumbnail} alt="">
                    <div class="caption">
                        <p class="text" style="text-align: center;">${photo_title}</p>
                    </div>
                </div>
                `
        }
    }
    function secondBlock(data) {
        var blocks = data.blocks;
        var block = blocks[1];
        var title = block.block_title;4
        var right_title = title.slice(0, 12);
        document.getElementById('selection').innerHTML = `<p class="title">${right_title}</p>`
        for (let size = 0; size != block.posts.length; size++) {
            const is_coup_de_coeur = block.posts[size].coup_de_coeur;
            const is_new = block.posts[size].new;
            console.log(block);
            console.log("coup de coeur: " + is_coup_de_coeur);
            const price = block.posts[size].price;
            const thumbnail = block.posts[size].thumbnail;
            const photo_title = block.posts[size].title;
            const url = block.posts[size].url;
            const discount = block.posts[size].discount;
            document.getElementById('selection').innerHTML +=
            `
                <div class="obj">
                    <div class="card" style="height: 15.2vw;">
                        <img class="card-content" src=${thumbnail} alt="">
                        ${
                            (is_coup_de_coeur == true) ? '<img class="coup-de-coeur" style="width: 15%;" src="./assets/icon-heart.svg">' + `<strong class="coup-de-coeur-text"> Coup de coeur</strong>` : ''
                        }
                        ${
                            (is_new == true) ? '<img class="is_new" style="width: 15%;" src="./assets/icon-star.svg">' + `<strong class="is_new-text"> nouveauté</strong>` : ''
                        }
                        ${
                            (discount != undefined) ? '<div class="rectangle">' + `<p class="promo"> Promo </p></div>` : ''
                        }
                    </div>
                    <div class="caption">
                    <p class="text" style="color: white;">${photo_title}</p>
                        <p class="price" style="${discount != undefined ? 'text-align: left;': 'text-align: center'}"> ${(discount != undefined) ? discount + '€' + `<strike style="color: white; margin-left: 3px;"> ${price}€ </strike>`: price + '€'} </p>
                    </div>
                </div>
            `
        }
    }
    firstBlock(data);
    secondBlock(data);
}