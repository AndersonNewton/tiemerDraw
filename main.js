mystatus = ""

function preload(){


    // classifier = ml5.imageClassifier("our_model.json", model loaded)
    classifier = ml5.imageClassifier("DoodleNet");

}
function setup(){

    canvas = createCanvas(400,400);
    canvas.position(750,325);
    background("white");

    canvas.mouseReleased(classi);

    agent = window.speechSynthesis;

}
function draw(){
    
   //PEN WIDTH
    strokeWeight(10);
       //PEN COLOR
    stroke("black");
    
    if(mouseIsPressed){

        line(pmouseX, pmouseY, mouseX, mouseY);
        
    }
 
}

function classi(){

    classifier.classify(canvas, got_results);


}

function got_results(error,results){

    if(error){

        console.error(error);

    }
    else{

        console.log(results);
        // 0.99999 *100 = 99.999
        // 99.999.toFixed(2) = 99.99
        accuracy = (results[0].confidence * 100).toFixed(2);
        document.getElementById("label_confidence").innerHTML = "Accuracy : " + accuracy + "%";
        document.getElementById("label_sketch").innerHTML = "Drawing : " + results[0].label;

        utter_this = new SpeechSynthesisUtterance(results[0].label);

        agent.speak(utter_this);
 }
        
}


function clear_canvas(){
  
    background("white");

}





/*

draw on canvas - done

classify our doodle - 

show results 

add speech agent
*/
