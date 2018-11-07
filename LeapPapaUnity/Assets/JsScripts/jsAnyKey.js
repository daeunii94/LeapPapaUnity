#pragma strict

function Update () {
		
	if(Input.anyKeyDown)
	{
		print("애니키:"+Input.anyKeyDown);
		Application.LoadLevel("menuScene"); //게임화면으로 전환
		jsGameManager.state = STATE.MENU;
	}
}
function OnGUI() {
	var w = Screen.width;
	var h = Screen.height;
	//이미지  표시
	GUI.DrawTexture(Rect(0,0,w,h), Resources.Load("start"));
}