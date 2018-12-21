#pragma strict
//var ball : GameObject;

//static var MinimumSpeed = 25;
static var constantSpeed = 5;

function Update() {    
    
   // newObj.GetComponent.<Rigidbody>().GetComponent.<Collider>().enabled = true;
    gameObject.GetComponent.<Rigidbody>().velocity = constantSpeed * (GetComponent.<Rigidbody>().velocity.normalized);

    print("공 속도: " + gameObject.GetComponent.<Rigidbody>().velocity);
    //print("각속도 벡터: " + gameObject.GetComponent.<Rigidbody>().angularVelocity);
    
    //gameObject.GetComponent.<Rigidbody>().velocity.x = speed;
    //gameObject.GetComponent.<Rigidbody>().velocity.y = speed;
    //gameObject.GetComponent.<Rigidbody>().velocity.z = speed;
    //if(gameObject.GetComponent.<Rigidbody>().)



    var ball: GameObject = GameObject.Find("Ball");

    if (ball.transform.position.z < -5.0 || ball.transform.position.z > 7.0){
            jsGameManager.state = STATE.STOP;
           Destroy(ball);

    // var text = "Your Score is " + score;
//GameObject.Find("gameOver").transform.FindChild("gameOverPanel").GameObject.SetActive(true);
    // GUI.Label(new Rect(10,10,100,20), text );

    }

}



// function Update() {
//     if(hasBeenLaunched) {
//         var ball: GameObject = GameObject.Find("Ball");

//         var direction = ball.GetComponent.<Rigidbody>().velocity;
//         var speed = direction.magnitude;
//         direction.Normalize();

//         if (direction.z > -MinimumVerticalMovement && direction.z < MinimumVerticalMovement) {
//             if(direction.z < 0)
//                 direction.z = -MinimumVerticalMovement;
//             else
//                 direction.z = MinimumVerticalMovement;


//             if(direction.x < 0)
//                 direction.x = -1 + MinimumVerticalMovement;
//             else 
//                 direction.x = 1 - MinimumVerticalMovement;

//             //direction.z = direction.z < 0 ? -MinimumVerticalMovement : MinimumVerticalMovement;
//             //direction.x = direction.x < 0 ? -1 + MinimumVerticalMovement : 1 - MinimumVerticalMovement;

//             ball.GetComponent.<Rigidbody>().velocity = direction * speed;
//         }

//         if(speed < MinimumSpeed || speed > MaximumSpeed) {
//             speed = Mathf.Clamp(speed, MinimumSpeed, MaximumSpeed);

//            ball.GetComponent.<Rigidbody>().velocity = direction * speed;
//         }
//     }
// }


function OnCollisionEnter(coll: Collision) { 

    var flag = true;

    var audio : AudioSource;
    audio = gameObject.GetComponent(AudioSource);
    audio.Play();

    if (coll.collider.gameObject.tag == "BLOCK1") {
        if(jsGameManager.state != STATE.DEMO) 
            coll.collider.gameObject.SendMessage("SetCollision", flag, SendMessageOptions.DontRequireReceiver);
    
    }
    if(coll.collider.gameObject.tag == "BLOCK1" || coll.collider.gameObject.tag == "FENCE")
        //Physics.gravity.z -= 0.12;

    
    //print("이름1:"+coll.collider.gameObject.name);
    if(coll.collider.gameObject.name == "forearm") {
        //print("패들태그1:" + coll.collider.gameObject.tag);
        //var ball: GameObject = GameObject.Find("Ball");
        //print("오브젝트: " + ball.gameObject.name);
        //print("손뼉쳐1 ");

        //print("오브젝트11:" + gameObject.name);
        gameObject.GetComponent.<Rigidbody>().AddForce(Vector3(0,1,1) * 1000);


        //gameObject.GetComponent.<Rigidbody>().AddForce(force, ForceMode.Impulse);
    }

    if(coll.collider.gameObject.tag == "FLOOR") {
        
        if(gameObject.GetComponent.<Rigidbody>().velocity.z >= 0)
           gameObject.GetComponent.<Rigidbody>().AddForce(Vector3(0,3,1) * 200);
        else
            gameObject.GetComponent.<Rigidbody>().AddForce(Vector3(0,3,-1) * 200);
    }

    if(coll.collider.gameObject.name == "Left Wall") {
        //print("z방향1:"+gameObject.GetComponent.<Rigidbody>().velocity.z);
        if(gameObject.GetComponent.<Rigidbody>().velocity.z > 0) {
            //print("z방향3:"+gameObject.GetComponent.<Rigidbody>().velocity.z);
            gameObject.GetComponent.<Rigidbody>().AddForce(Vector3(1,0,1) * 200);
            
        }
        else {
            //print("z방향3:"+gameObject.GetComponent.<Rigidbody>().velocity.z);
            gameObject.GetComponent.<Rigidbody>().AddForce(Vector3(1,0,-1) * 200);
            
        }
        //print("왼쪽 벽 쳤을때 속도 +-? :" +  gameObject.GetComponent.<Rigidbody>().velocity);
        
        //print("왼쪽 벽 침!");
        //gameObject.GetComponent.<Rigidbody>().AddForce(Vector3.right * 100);
        
    }
    
    if(coll.collider.gameObject.name == "Right Wall") {
        //print("z방향1:"+gameObject.GetComponent.<Rigidbody>().velocity.z);
        if(gameObject.GetComponent.<Rigidbody>().velocity.z > 0) {
            //print("z방향3:"+gameObject.GetComponent.<Rigidbody>().velocity.z);
            gameObject.GetComponent.<Rigidbody>().AddForce(Vector3(-1,0,1) * 200);
            
        }
        else {
            //print("z방향3:"+gameObject.GetComponent.<Rigidbody>().velocity.z);
            gameObject.GetComponent.<Rigidbody>().AddForce(Vector3(-1,0,-1) * 200);
            
        }
        //print("왼쪽 벽 쳤을때 속도 +-? :" +  gameObject.GetComponent.<Rigidbody>().velocity);
        
        print("오른쪽 벽 침!");
        //gameObject.GetComponent.<Rigidbody>().AddForce(Vector3.right * 100);
        
    }
   
}


function CheckBounds(coll: Collider) {
    if (coll.tag == "CEILING") {
        
        return;

    }
    else if (coll.tag == "FENCE") {

        return;
    }

    //블록 처리


}
