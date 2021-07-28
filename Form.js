class Form{ 

constructor(){

}
display(){
    var title=createElement('h2');
    title.html("Car Racing Game");
    title.position(430,100);

    var input=createInput("Name");
    var button=createButton("Play");
    var greeting=createElement('h3');

    input.position(430,200);
    button.position(500,250);

    button.mousePressed(function(){
        input.hide();
        button.hide();

        var name=input.value();
        var greeting=createElement("h3");
        greeting.html("Hello "+name);
        greeting.position(550,200);

    });

}

}