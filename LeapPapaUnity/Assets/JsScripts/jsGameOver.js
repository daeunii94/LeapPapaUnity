#pragma strict

var txtResult: GUIText;


function Update () {

}
	

function OnGUI(){
	var w = Screen.width;
	var h = Screen.height;

	GUI.DrawTexture(Rect(0,0,w,h), Resources.Load("end"));
	//jsGameManager.showScore();		
    GUI.Label(new Rect(585,450,200,30),"Your score is " + jsGameManager.score);
    
	var w1 = w / 3;
    var h1 = h * 0.6;
    var bw = 400;
    var bh = 100;

    var btn = GUI.Button(Rect(w1, h1-2*bh, bw - 10,bh), Resources.Load("try_again"));
    if(btn == true) {

        jsMenu.music();
        jsGameManager.state = STATE.STAGE;

        Application.LoadLevel("mainScene");
    }
}