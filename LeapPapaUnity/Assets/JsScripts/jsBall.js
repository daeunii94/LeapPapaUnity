#pragma strict

//var ball : GameObject;

static var MinimumSpeed = 25;
static var MaximumSpeed = 30;

static var MinimumVerticalMovement = 0.1F;
private var hasBeenLaunched = true;

function Update() {
    
    print("공 속도: " + gameObject.GetComponent.<Rigidbody>().velocity);
    //print("각속도 벡터: " + gameObject.GetComponent.<Rigidbody>().angularVelocity);
    if(gameObject.GetComponent.<Rigidbody>().velocity.x > 8) 
        gameObject.GetComponent.<Rigidbody>().velocity.x = 8;
    
    if(gameObject.GetComponent.<Rigidbody>().velocity.y > 8)
        gameObject.GetComponent.<Rigidbody>().velocity.y = 8;

    if(gameObject.GetComponent.<Rigidbody>().velocity.z > 8)
        gameObject.GetComponent.<Rigidbody>().velocity.z = 8;

        
    if(gameObject.GetComponent.<Rigidbody>().velocity.x < -8) 
        gameObject.GetComponent.<Rigidbody>().velocity.x = -8;

    if(gameObject.GetComponent.<Rigidbody>().velocity.y < -8)
        gameObject.GetComponent.<Rigidbody>().velocity.y = -8;

    if(gameObject.GetComponent.<Rigidbody>().velocity.z < -8)
        gameObject.GetComponent.<Rigidbody>().velocity.z = -8;
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
     
        
        //if (Physics.gravity.x > 0) {
        //    Physics.gravity.x -= 6;
        //} else {
        //    Physics.gravity.x += 6;
        //}
    }
    if(coll.collider.gameObject.tag == "BLOCK1" || coll.collider.gameObject.tag == "FENCE")
        //Physics.gravity.z -= 0.12;

    
    print("이름1:"+coll.collider.gameObject.name);
    if(coll.collider.gameObject.name == "forearm") {
        //print("패들태그1:" + coll.collider.gameObject.tag);
        //var ball: GameObject = GameObject.Find("Ball");
        //print("오브젝트: " + ball.gameObject.name);
        print("들어옴1");

        print("오브젝트1:" + gameObject.name);
        gameObject.GetComponent.<Rigidbody>().AddForce(Vector3.forward * 200);


        //gameObject.GetComponent.<Rigidbody>().AddForce(force, ForceMode.Impulse);
    }

    if(coll.collider.gameObject.tag == "FLOOR") {
        print("땅친당");
        if(gameObject.GetComponent.<Rigidbody>().velocity.z > 0)
           gameObject.GetComponent.<Rigidbody>().AddForce(Vector3(0,1,1) * 100);
        else
            gameObject.GetComponent.<Rigidbody>().AddForce(Vector3(0,1,-1) * 100);
    }

    if(coll.collider.gameObject.name == "Left Wall") {
        print("z방향1:"+gameObject.GetComponent.<Rigidbody>().velocity.z);
        if(gameObject.GetComponent.<Rigidbody>().velocity.z > 0) {
            print("z방향3:"+gameObject.GetComponent.<Rigidbody>().velocity.z);
            gameObject.GetComponent.<Rigidbody>().AddForce(Vector3(1,0,1) * 100);
            
        }
        else {
            print("z방향3:"+gameObject.GetComponent.<Rigidbody>().velocity.z);
            gameObject.GetComponent.<Rigidbody>().AddForce(Vector3(1,0,-1) * 100);
            
        }
        //print("왼쪽 벽 쳤을때 속도 +-? :" +  gameObject.GetComponent.<Rigidbody>().velocity);
        
        print("왼쪽 벽 침!");
        //gameObject.GetComponent.<Rigidbody>().AddForce(Vector3.right * 100);
        
    }
    
    if(coll.collider.gameObject.name == "Right Wall") {
        print("z방향1:"+gameObject.GetComponent.<Rigidbody>().velocity.z);
        if(gameObject.GetComponent.<Rigidbody>().velocity.z > 0) {
            print("z방향3:"+gameObject.GetComponent.<Rigidbody>().velocity.z);
            gameObject.GetComponent.<Rigidbody>().AddForce(Vector3(-1,0,1) * 150);
            
        }
        else {
            print("z방향3:"+gameObject.GetComponent.<Rigidbody>().velocity.z);
            gameObject.GetComponent.<Rigidbody>().AddForce(Vector3(-1,0,-1) * 150);
            
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
