class Player{
    constructor(){}

    getCount(){
        var playerCountRef = database.ref('getCount')
        playerCountRef.on("value",function(data){
            getCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            getCount:count
        });
    }

    update(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name:name
        });
    }

}