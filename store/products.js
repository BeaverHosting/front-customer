export const state = () => ({
    list: [{
        id : 1,
        title : "Solution Wordpress",
        img : null,
        values : [
            "PHP 7.0",
            "Solution de sécurité",
            "Hébergement instantané",
            "Mises à jours Wordpress automatiques",
            "Sauvegarde régulières et illimités",
            "Nom de domaine offert"
        ]
    },{
        id : 2,
        title : "Solution HelloWorld",
        img : null,
        values : [
            "GoLang",
            "Solution de sécurité",
            "Hébergement instantané",
            "Nom de domaine offert"
        ]
    },{
        id : 3,
        title : "Solution Minecraft",
        img : null,
        values : [
            "Serveur dédié au jeu",
            "Solution de sécurité",
            "Hébergement instantané"
        ]
    }]
})

export const getters = {
    list(state) {
        return state.list;
    }
}

export const mutations = {
    setList(state, payload) {
        state.list = payload;
    }
}