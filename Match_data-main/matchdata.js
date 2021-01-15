const database=firebase.database();



var matches = [];

function addData(){
    const Matchteam=document.getElementById("Matchteam");
    const date=document.getElementById("date");
    const time=document.getElementById("time");
    
    const stadiuminfo={
        StadiumName:"KARACHI STADIUM",
        Country:"Pakistan"

    }
    const matchinfo={
        Matchvs:Matchteam.value,
        Mdate:date.value,
        Mtime:time.value
        
    }
    database.ref('stadium/stadiumInfo').set(stadiuminfo)
    database.ref('stadium/MatchInfo').push(matchinfo);

    


}

function showMatches(){
    var childData;
    var leadsRef = database.ref('stadium/MatchInfo');
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
     childData = childSnapshot.val();
     matches.push(childData);
     
      
      
      
     
    });
});

setTimeout(function(){for ( i=0; i<matches.length; i++){
    var ul=document.getElementById("ul1");
    var li = document.createElement('li');
    li.innerText=matches[i].Matchvs;
    var li1 = document.createElement('li');
    li1.innerText=matches[i].Mdate
    var li2=document.createElement('li');
    li2.innerText=matches[i].Mtime;
    
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li1);

    
    
    


}} , 3000);



}
