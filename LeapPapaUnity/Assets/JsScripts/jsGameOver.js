#pragma strict
private var score = 0;
score = jsGameManager.score;
function Update () {
	// var gameOver = GameObject.Find("gameOver");
	// var endAudio : AudioSource;
 //    endAudio = gameOver.gameObject.GetComponent(AudioSource);
 //   	endAudio.Play();
}

function OnGUI(){
	var w = Screen.width;
	var h = Screen.height;

	GUI.DrawTexture(Rect(0,0,w,h), Resources.Load("end"));
	
	GUI.Label(new Rect(10,30,100,20),"Your score is " + score);
}