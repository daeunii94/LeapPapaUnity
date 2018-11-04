#pragma strict


static var MinimumSpeed = 25;
static var MaximumSpeed = 30;

static var MinimumVerticalMovement = 0.1F;
private var hasBeenLaunched = true;



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
        Physics.gravity.z -= 0.2;

    if(coll.collider.gameObject.tag == "PADDLE") {
        var ball: GameObject = GameObject.Find("Ball");
        ball.GetComponent.<Rigidbody>().AddForce(Vector3.forward * 100);

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
