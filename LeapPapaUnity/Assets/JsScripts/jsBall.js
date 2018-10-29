#pragma strict

static var speed = 5.5;



function OnCollisionEnter(coll: Collision) { 
    var flag = true;


    if (coll.collider.gameObject.tag == "BLOCK") {
        coll.collider.gameObject.SendMessage("SetCollision", flag, SendMessageOptions.DontRequireReceiver);
     
        //Physics.gravity.z -= 0.2;
        //if (Physics.gravity.x > 0) {
        //    Physics.gravity.x -= 6;
        //} else {
        //    Physics.gravity.x += 6;
        //}
    }

}

function Bounce(coll: Collider) {

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
