#pragma strict

var txtResult: GUIText;


function Update () {

}
	

function OnGUI(){
	var w = Screen.width;
	var h = Screen.height;

	GUI.DrawTexture(Rect(0,0,w,h), Resources.Load("end"));
		
	var txtResult = GameObject.Find("txtResult").GetComponent(GUIText);
	
	txtResult.text = "Your score is " + jsGameManager.score;

}