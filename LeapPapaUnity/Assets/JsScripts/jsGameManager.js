#pragma strict
import UnityEngine.UI;
import UnityEngine;
import System.Collections;
//게임 오브젝트


//점수 처리
var txtScore: GUIText;
var txtStage: GUIText;
var txtTryAgain: GUIText;
var txtResult : GUIText;
var timer = 0.0;
var now = 0.0; 

static var ballCnt = 3;

private var stageCnt = 5;
private var stageNum = 1;
static var score = 0;

var gameTime : int;

//게임에 필요한 변수
//외부 모듈과 공용 변수
enum STATE {START, STOP, STAGE, RESET, CLEAR, HIT, DESTROY, OUT, BONUS, IDLE, READY, DEMO, END, MENU};


static var t:int;
static var ellapsed:int;

static var state: STATE = STATE.START;
static var blockNum: int;
static var blockPos: Vector3;


//------------------------
//순환루프
//------------------------

function Update () {
	//if(Input.anyKey)
	//{
	//	Application.LoadLevel("mainScene"); //게임화면으로 전환
	//	jsGameManager.state = STATE.STAGE;
	//}
	// 현재 상태 처리	
	switch (state) {
		case STATE.STOP :
			gameOver();
			break;
		case STATE.STAGE :		// 스테이지 만들기
			 MakeStage();
			 t=Time.time;
			 TimerStart();
		 	break;
		case STATE.CLEAR :
			clear();
			break;
		case STATE.RESET :		// 패들, 공 초기위치로 이동
		 	ResetPosition();
		 	break;
		case STATE.HIT :		// 볼과 공의 충돌 - 블록 남아 있음
		 	SetHit();
		 	break;
		case STATE.DESTROY :	// 블록이 파괴됨
		 	SetDestroy();
		 	break;
		case STATE.OUT :		// 공을 잃음
			SetOut();
			break;
		case STATE.END :
			break;
		case STATE.MENU :
			Application.LoadLevel("menuScene");
			break;

		// case STATE.BONUS :		// 보너스 처리
		// 	ProcessBonus();
		// 	break;
	}		
	
	print("State = " + state);	// 디버그용
}

function TimerStart () {
	yield WaitForSeconds(15);

	ellapsed=Time.time-t;

	print("시간3:"+ellapsed);
	if(ellapsed>14) {
		print("그만3!");
		state = STATE.STOP;
	}
}

function OnGUI() {
	var w = Screen.width;
	var h = Screen.height;
	
	//남은 공 수 패들로 표시
	//for (var i = 1; i <= ballCnt; i++){
	//	var x = 22 * i - 17;
	//	var y = h - 15;
	//
	//	GUI.DrawTexture(Rect(x,y,20,10), Resources.Load("imgPaddle", Texture2D));
	//}


	var txtStage = GameObject.Find("txtStage").GetComponent(GUIText);
	txtStage.text = "Stage : " + stageNum;

	var txtScore = GameObject.Find("txtScore").GetComponent(GUIText);
	txtScore.text = "Score : " + score;


}


//function Start() {
    //MakeStage();
//}

// function countScore() {
// 	//score += 1;
// 	score += 100;
	
// 	if (jsBall.speed < 10){
// 		jsBall.speed += 0.05; // 공의 속도 증가시키기
// 	}
	
// 	state = STATE.IDLE;
// 	return;

// }

function MakeStage() {

	var n = stageNum % stageCnt;
	if(n == 0)
		n = stageCnt;

	if (stageNum > 1){
		var nextStage = GameObject.Find("nextStage") ;
    	var audio : AudioSource;
    	audio = nextStage.gameObject.GetComponent(AudioSource);
    	audio.Play();
	}

	if (stageNum > 3){
		state = STATE.CLEAR;
	}


    var px = -2.52;
    var py = 3.824;
    var pz = 3.5;
    var w = 1;
	var h = 0.8;
	
    var tmp = jsStage.Stage[n - 1];

    for (var i = 0; i < 5; i++) {
        var s: String = tmp[i];
        var x = px;

        for (var j = 0; j < s.length; j++) {
            var ch = s.Substring(j, 1);
			//var ch = 1;
			if (ch == "." || ch == " ") {
                x += w;
                continue;
            }

            var block: GameObject = Instantiate(Resources.Load("Prefabs/pf_block1", GameObject));

            block.transform.position = Vector3(x, py, pz);
            x += w;
        };


        py -= h;
	}

	var tmp2 = jsStage.Stage2[n - 1];

	var px2 = -2.82;
    var py2 = 5.32;
    var pz2 = 2.35;
  


	for (var a = 0; a < 5; a++) {
        var s2: String = tmp2[a];
        var x2 = px2;

        for (var b = 0; b < s2.length; b++) {
            var ch2 = s2.Substring(b, 1);
			//var ch = 1;
			if (ch2 == "." || ch2 == " ") {
                x2 += w;
                continue;
            }

            var block2: GameObject = Instantiate(Resources.Load("Prefabs/pf_block2", GameObject));

            block2.transform.position = Vector3(x2, py2, pz2);
            x2 += w;
        };


        py2 -= h;
	}


	var tmp3 = jsStage.Stage3[n - 1];

	var px3 = -2.82;
    var py3 = 5.32;
    var pz3 = 1.33;
	
  


	for (var c = 0; c < 5; c++) {
        var s3: String = tmp3[c];
        var x3 = px3;

        for (var d = 0; d < s3.length; d++) {
            var ch3 = s3.Substring(d, 1);
			//var ch = 1;
			if (ch3 == "." || ch3 == " ") {
                x3 += w;
                continue;
            }

            var block3: GameObject = Instantiate(Resources.Load("Prefabs/pf_block3", GameObject));

            block3.transform.position = Vector3(x3, py3, pz3);
            x3 += w;
        };


        py3 -= h;
	}

	
	ResetPosition();



}
function musicStop(){

	var musicSound = GameObject.Find("musicSound") ;
    var audio : AudioSource;
    audio = musicSound.gameObject.GetComponent(AudioSource);
    audio.Stop();

}
function clear(){
	

	musicStop();

    Application.LoadLevel("clearScene");
}

function gameOver(){

	musicStop();

    Application.LoadLevel("endScene");

	

   	//transform.Translate(0, 0, 1000);
   	//yield WaitForSeconds(0.5);
}

static function showScore(){

	var txtResult = GameObject.Find("txtResult").GetComponent(GUIText);
	
	txtResult.text = "Your score is " + score;

}

//------------------------
//ball 초기화
//------------------------

function ResetPosition() {
	var ball: GameObject = GameObject.Find("Ball");

	//ball.transform.position = Vector3(-0.07,3.63,-2.7);
	ball.GetComponent.<Rigidbody>().AddForce(Vector3.forward * 10);

	var paddle : GameObject = GameObject.Find("Leap Motion Controller");
	
	ball.transform.position = Vector3(-0.07,3.63, -2.89);
	ball.GetComponent.<Rigidbody>().AddForce(Vector3.forward * 1000);
	state = STATE.READY;
}

//------------------------
//ball out 처리
//------------------------

function SetOut() {

}

//------------------------
//점수처리- 블록 남아 있음
//------------------------

function SetHit() {
	//state = STATE.IDLE;
	
	// var block : GameObject = GameObject.Find("Block1");
	

	score += (50 * stageNum);
	
	// if (jsBall.speed < 10){
	// 	jsBall.speed += 0.05; // 공의 속도 증가시키기
	// }

	if (GetBlockCount() == 0){
		print("stage clear");
		GameObject.Find("Canvas").transform.Find("clear_image").gameObject.SetActive(true); 

		stageNum++;
		// 여기부분 수정

		for(var i = 0; i < 337; i++){
	
			timer += Time.deltaTime;

			print("timer check no"+ i + " = " +timer);
		}

		 // ClearStage();

		state = STATE.STAGE;
		return;
		
	}

	GameObject.Find("Canvas").transform.Find("clear_image").gameObject.SetActive(false);

	
	state = STATE.IDLE;
	print(score);
}

//------------------------
//블록 파괴함
//------------------------
function SetDestroy() {
	// state = STATE.IDLE;

	// score += (100 * blockNum);
	// //if (jsBall.speed < 10)
	// // 	jsBall.speed += 0.05; // 공의 속도 증가시키기
	

	// if (GetBlockCount() == 0){
	// 	stageNum++;
	// 	ClearStage();
	// 	state = STATE.STAGE;
	// 	return;
	// }

	//MakeBonus();
}

//------------------------
//남은 블록 수 계산
//------------------------

function GetBlockCount() {
	var cnt = 0;
	//for (var i = 1; i <= 1; i++){
		cnt += GameObject.FindGameObjectsWithTag("BLOCK1").length;
	//}
	return cnt; 
}

//------------------------
//Clear Stage
//------------------------

function ClearStage() {
	// speedBall 제거
	// var balls = GameObject.FindGameObjectsWithTag("BALL9");
	// for (var obj in balls){
	// 	Destroy(obj);
	// }

	// 남은 블록 삭제

	// for (var i = 1; i <= 2; i++){
	// 	var blocks = GameObject.FindGameObjectsWithTag("BLOCK" + i);
	// 	for (obj in blocks){
	// 		Destroy(obj);
	// 	}
	// }
	
}

//------------------------
//스코어 등 화면 표시
//------------------------


//------------------------
//try again?
//------------------------
// function ShowMessage() {
// 	txtTryAgain.text = "Try Again? (y/n)";
// 	do{
// 		var isYes = Input.GetKeyUp(KeyCode.Y);
// 		var isNo = Input.GetKeyUp(KeyCode.N);

// 		yield 0;
// 	}while(!isYes && !isNo);

// 	txtTryAgain.text = "";

// 	// 점수 등 초기화

// 	if (isYes){
// 		score = 0;
// 		ballCnt = 3;
// 		stageNum = 1;
// 		ClearStage();
// 		MakeStage();
// 	}
// 	else{
// 		Application.LoadLevel("GameTitle");
// 	}
// }