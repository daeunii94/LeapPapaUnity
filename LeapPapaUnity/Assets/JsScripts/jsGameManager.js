#pragma strict
import UnityEngine.UI;

//게임 오브젝트


//점수 처리
//var txtScore: GUIText;
//var txtStage: GUIText;
var txtTryAgain: GUIText;

//게임에 필요한 변수
static var ballCnt = 3;

private var stageCnt = 5;
private var stageNum = 1;
private var score = 0;

//외부 모듈과 공용 변수
enum STATE {START, STOP, STAGE, RESET, HIT, DESTROY, OUT, BONUS, IDLE, READY, DEMO};

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
			break;
		case STATE.STAGE :		// 스테이지 만들기
		 	MakeStage();
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
		// case STATE.OUT :		// 공을 잃음
		// 	SetOut();
		// 	break;
		// case STATE.BONUS :		// 보너스 처리
		// 	ProcessBonus();
		// 	break;
	}		
	
	print("State = " + state);	// 디버그용
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

	// stage & score
	/*txtStage.text = "Stage : " + stageNum;
	txtScore.text = "Score : " + score.ToString("n0");*/
	
	// 이부분
	var txtStage = "Stage : " + stageNum;
	var txtScore = "Score : " + score;

 	//txtStage.text = "Stage : ";

 // 	GameObject.Find("txtStage").text = "Stage : " + stageNum;
	// GameObject.Find("txtScore").text = "Score : " + score;

 	// 이부분 
	GUI.Label(new Rect(10,10,100,20), txtStage );
	GUI.Label(new Rect(10,30,100,20), txtScore );

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
    var px = -2.82;
    var py = 4.27;
    var pz = 4.35;
    var w = 1;
    var h = 1;


    var tmp = jsStage.Stage[n - 1];

    for (var i = 0; i < 4; i++) {
        var s: String = tmp[i];
        var x = px;

        for (var j = 0; j < s.length; j++) {
            var ch = s.Substring(j, 1);
			//var ch = 1;
			if (ch == "." || ch == " ") {
                x += w;
                continue;
            }

            var block: GameObject = Instantiate(Resources.Load("Prefabs/pf_block" + ch, GameObject));

            block.transform.position = Vector3(x, py, pz);
            x += w;
        };


        py -= h;
	}
	ResetPosition();



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
		stageNum++;
		ClearStage();
		state = STATE.STAGE;
		return;
	}

	state = STATE.IDLE;

}

//------------------------
//블록 파괴함
//------------------------
function SetDestroy() {
	state = STATE.IDLE;

	score += (100 * blockNum);
	//if (jsBall.speed < 10)
	// 	jsBall.speed += 0.05; // 공의 속도 증가시키기
	

	if (GetBlockCount() == 0){
		stageNum++;
		ClearStage();
		state = STATE.STAGE;
		return;
	}

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
function ShowMessage() {
	txtTryAgain.text = "Try Again? (y/n)";
	do{
		var isYes = Input.GetKeyUp(KeyCode.Y);
		var isNo = Input.GetKeyUp(KeyCode.N);

		yield 0;
	}while(!isYes && !isNo);

	txtTryAgain.text = "";

	// 점수 등 초기화

	if (isYes){
		score = 0;
		ballCnt = 3;
		stageNum = 1;
		ClearStage();
		MakeStage();
	}
	else{
		Application.LoadLevel("GameTitle");
	}
}